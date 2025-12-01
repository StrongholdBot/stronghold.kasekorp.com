document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("search-input");
    const list = document.getElementById("results-container");

    if (!input || !list) return; // fail gracefully

    fetch("/search.json")
        .then(res => res.json())
        .then(commands => {
            const fuse = new Fuse(commands, {
                keys: ["title", "usage", "description", "ancestry"],
                threshold: 0.3
            });

            // Debounce helper
            function debounce(func, delay) {
                let timeout;
                return function (...args) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func.apply(this, args), delay);
                };
            }

            // Render results
            function renderResults(query) {
                if (!query) {
                    list.innerHTML = "";
                    return;
                }
                const results = fuse.search(query).map(r => r.item);

                if (results.length === 0) {
                    list.innerHTML = `<li>No results found</li>`;
                    return;
                }
                list.innerHTML = results.map(cmd => `
          <li>
            <a href="${cmd.url}"><strong>${cmd.title}</strong></a>
            ${cmd.ancestry ? `<small>(${cmd.ancestry} ${cmd.title})</small>` : ""}
            <p>${cmd.description.length > 60 ? cmd.description.slice(0, 60) + "..." : cmd.description}</p>
          </li>
        `).join("");
            }
            // Attach input listener
            const debouncedRender = debounce(() => renderResults(input.value), 250);
            input.addEventListener("input", debouncedRender);

            // Initial render
            renderResults("");
        });
});

document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  const headings = document.querySelectorAll("h2, h3");

  // Build TOC
  headings.forEach(h => {
    if (h.classList.contains("no-toc")) {
      return;
    }
    if (!h.id) {
      h.id = h.textContent.trim().toLowerCase().replace(/[^\w]+/g, "-");
    }

    const link = document.createElement("a");
    link.href = `#${h.id}`;
    link.textContent = h.textContent;
    link.className = h.tagName === "H3" ? "toc-sub" : "";

    toc.appendChild(link);
  });

  // Highlight active heading
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = toc.querySelector(`a[href="#${id}"]`);
        if (entry.isIntersecting) {
          toc.querySelectorAll("a").forEach(a => a.classList.remove("active"));
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  headings.forEach(h => observer.observe(h));
});

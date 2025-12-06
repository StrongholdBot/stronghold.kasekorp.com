document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  const headings = Array.from(document.querySelectorAll("h2, h3, h4").values()).filter(h => !h.classList.contains("no-toc"));
  if (!headings.length) {
    const title = document.getElementById("toc-title");
    if (title) title.style.visibility = "hidden";
  };

  // Build TOC
  headings.forEach(h => {
    if (!h.id) {
      h.id = h.textContent.trim().toLowerCase().replace(/[^\w]+/g, "-");
    }

    const link = document.createElement("a");
    link.href = `#${h.id}`;
    link.textContent = h.textContent;
    link.className = h.tagName === "H3" ? "toc-sub" : "";

    toc.appendChild(link);
  });


  window.addEventListener('scroll', () => {
    let current = headings[0];

    for (const h of headings) {
      console.log(h, h.getBoundingClientRect().top);
      if (h.getBoundingClientRect().top <= 100) {
        current = h;
      } else {
        break;
      }
    }

    const id = current.id;
    const link = toc.querySelector(`a[href="#${id}"]`);

    toc.querySelectorAll("a").forEach(a => a.classList.remove("active"));
    if (link) link.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".sidebar-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
});

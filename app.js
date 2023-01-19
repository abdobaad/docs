// JavaScript code to toggle the sidebar
const toggleButton = document.getElementById("toggle-sidebar");
const sidebar = document.getElementById("sidebar");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

toggleButton.addEventListener("click", function() {
    sidebar.classList.toggle("open");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});

const links = document.querySelectorAll('.smooth-scroll');
for (const link of links) {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const target = document.querySelector(targetId);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    sidebar.classList.toggle("open");
  });
}
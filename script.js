// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) {
      el.classList.add("active");
    }
  });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully! 🚀");
});

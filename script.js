function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const educationItems = document.querySelectorAll(".education-item");

  // Function to check if an element is in the viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});

// Toggle Navbar for Mobile
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Add interactive hover effects with JavaScript
const certificates = document.querySelectorAll(".certificate");

certificates.forEach((certificate) => {
  certificate.addEventListener("mouseenter", () => {
    certificate.style.transform = "scale(1.05)";
    certificate.style.transition = "transform 0.3s ease";
  });

  certificate.addEventListener("mouseleave", () => {
    certificate.style.transform = "scale(1)";
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

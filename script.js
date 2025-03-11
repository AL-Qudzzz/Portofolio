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

//Navbar for Mobile
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

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

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function openModal(projectId) {
  document.getElementById(projectId).style.display = "block";
}

function closeModal(projectId) {
  document.getElementById(projectId).style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function (event) {
  let modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width;
    }, 500); // Delay animasi agar terlihat smooth
  });
});

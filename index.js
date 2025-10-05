const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const nodes = Array.from(el.childNodes);
        el.innerHTML = "";

        let charIndex = 0;

        nodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent.split("").forEach((char) => {
              const span = document.createElement("span");
              span.textContent = char;
              span.style.animation = `fade-in 0.3s ${
                charIndex * 0.02
              }s forwards ease-out`;
              el.appendChild(span);
              charIndex++;
            });
          } else {
            el.appendChild(node);
          }
        });

        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".staggered-text").forEach((el) => {
  observer.observe(el);
});

const observers = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("lineUp");
        observers.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observers.observe(el);
});

// img sliding
const imgObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slideInRight");
        imgObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".observe-img").forEach((img) => {
  imgObserver.observe(img);
});

/* Mobile responsive */

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const lineCt = document.querySelector(".line-ct");

  window.ToggleMenu = function () {
    nav.classList.toggle("open");
    lineCt.classList.toggle("open");
  };
  document.querySelectorAll(".menu-list a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      lineCt.classList.remove("open");
    });
  });
});

// document.querySelectorAll(".menu-list a").forEach((link) => {
//   link.addEventListener("click", () => {
//     nav.classList.remove("open");
//     lineCt.classList.remove("open");
//   });
// });

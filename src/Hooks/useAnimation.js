import { useEffect } from "react";

export const useAnimations = () => {
  useEffect(() => {
    // Staggered text animation
    const staggeredObserver = new IntersectionObserver(
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

            staggeredObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".staggered-text").forEach((el) => {
      staggeredObserver.observe(el);
    });

    // Line up animation
    const lineUpObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lineUp");
            lineUpObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      lineUpObserver.observe(el);
    });

    // Image sliding animation
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

    // Cleanup function
    return () => {
      staggeredObserver.disconnect();
      lineUpObserver.disconnect();
      imgObserver.disconnect();
    };
  }, []);
};

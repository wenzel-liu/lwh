(function () {
  function revealWithoutMotion() {
    document.querySelectorAll("[data-reveal]").forEach(function (node) {
      node.classList.add("is-revealed");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

    if (!nodes.length || prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      revealWithoutMotion();
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          var delay = Number(entry.target.getAttribute("data-reveal-delay") || 0);
          entry.target.style.transitionDelay = delay > 0 ? String(delay) + "ms" : "0ms";
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    nodes.forEach(function (node) {
      observer.observe(node);
    });
  });
})();

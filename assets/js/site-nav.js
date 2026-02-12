(function () {
  function currentPage() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf("/") + 1);
    if (!page) {
      return "index.html";
    }
    return page;
  }

  function markActiveLinks() {
    var page = currentPage();
    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href) {
        return;
      }
      var hrefPage = href.split("/").pop() || "index.html";
      var active = hrefPage === page;
      link.classList.toggle("active", active);
      link.setAttribute("aria-current", active ? "page" : "false");
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector("[data-mobile-toggle]");
    var menu = document.querySelector("[data-mobile-nav]");

    if (!toggle || !menu) {
      return;
    }

    var close = function () {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("open");
    };

    var open = function () {
      toggle.setAttribute("aria-expanded", "true");
      menu.classList.add("open");
    };

    toggle.addEventListener("click", function () {
      if (menu.classList.contains("open")) {
        close();
      } else {
        open();
      }
    });

    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        close();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        close();
      }
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        close();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    markActiveLinks();
    initMobileNav();
  });
})();

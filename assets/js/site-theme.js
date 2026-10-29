(function () {
  var STORAGE_KEY = "site-theme";
  var ALLOWED = ["light", "dark", "system"];
  var root = document.documentElement;

  function systemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function normalized(value) {
    return ALLOWED.indexOf(value) >= 0 ? value : "system";
  }

  function readPreference() {
    try {
      return normalized(localStorage.getItem(STORAGE_KEY));
    } catch (err) {
      return "system";
    }
  }

  function resolve(preference) {
    return preference === "system" ? systemTheme() : preference;
  }

  function updateLabels(preference, resolved) {
    var label = preference.charAt(0).toUpperCase() + preference.slice(1);

    document.querySelectorAll("[data-theme-current]").forEach(function (node) {
      node.textContent = label;
      node.setAttribute("data-resolved", resolved);
    });

    document.querySelectorAll("[data-theme-option]").forEach(function (node) {
      var active = node.getAttribute("data-theme-option") === preference;
      node.classList.toggle("active", active);
      node.setAttribute("aria-pressed", String(active));
    });
  }

  function apply(preference) {
    var resolved = resolve(preference);

    root.setAttribute("data-theme-preference", preference);
    root.setAttribute("data-theme", resolved);
    root.classList.toggle("dark", resolved === "dark");

    updateLabels(preference, resolved);
  }

  function persist(preference) {
    try {
      localStorage.setItem(STORAGE_KEY, preference);
    } catch (err) {
      // Ignore storage restrictions
    }
  }

  function setTheme(preference) {
    var next = normalized(preference);
    persist(next);
    apply(next);
  }

  function closeAllMenus(except) {
    document.querySelectorAll("[data-theme-control]").forEach(function (control) {
      if (!except || control !== except) {
        control.classList.remove("open");
      }
    });
  }

  function bindThemeControls() {
    document.querySelectorAll("[data-theme-control]").forEach(function (control) {
      var toggle = control.querySelector("[data-theme-toggle]");
      var menu = control.querySelector("[data-theme-menu]");
      if (!toggle || !menu) {
        return;
      }

      toggle.addEventListener("click", function (event) {
        event.stopPropagation();
        var isOpen = control.classList.contains("open");
        closeAllMenus();
        if (!isOpen) {
          control.classList.add("open");
        }
      });

      control.querySelectorAll("[data-theme-option]").forEach(function (option) {
        option.addEventListener("click", function () {
          var value = option.getAttribute("data-theme-option") || "system";
          setTheme(value);
          control.classList.remove("open");
        });
      });
    });

    document.addEventListener("click", function () {
      closeAllMenus();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    });
  }

  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  var onSystemChange = function () {
    if (readPreference() === "system") {
      apply("system");
    }
  };

  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", onSystemChange);
  } else if (typeof mq.addListener === "function") {
    mq.addListener(onSystemChange);
  }

  apply(readPreference());

  document.addEventListener("DOMContentLoaded", function () {
    bindThemeControls();
    apply(readPreference());
  });

  window.SiteTheme = {
    getTheme: readPreference,
    setTheme: setTheme
  };
})();

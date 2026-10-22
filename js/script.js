// Kuwentuhan - script.js (isang external JS file para sa lahat ng pages)

document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;

  // Safe localStorage helpers (hindi mag-crash kung naka-block ang storage)
  function load(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v === null ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }
  function save(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  }

  /* ---------- Feature 1: Dark / Light mode ---------- */
  var themeBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeBtn) {
      themeBtn.textContent = theme === "dark" ? "Light mode" : "Dark mode";
    }
  }

  applyTheme(load("theme", "light"));

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      save("theme", next);
    });
  }

  /* ---------- Feature 2: Like button (story pages) ---------- */
  var likeBtn = document.getElementById("like-btn");
  var likeCount = document.getElementById("like-count");

  if (likeBtn && likeCount) {
    var storyId = likeBtn.getAttribute("data-story");
    var liked = load("liked-" + storyId, "no") === "yes";
    var count = parseInt(load("likes-" + storyId, "0"), 10) || 0;

    function renderLike() {
      likeBtn.setAttribute("aria-pressed", liked ? "true" : "false");
      likeCount.textContent = count;
    }
    renderLike();

    likeBtn.addEventListener("click", function () {
      liked = !liked;
      count = liked ? count + 1 : Math.max(0, count - 1);
      save("liked-" + storyId, liked ? "yes" : "no");
      save("likes-" + storyId, String(count));
      renderLike();
    });
  }

  /* ---------- Feature 3: Show / Hide synopsis ---------- */
  var synBtn = document.getElementById("synopsis-toggle");
  var synBox = document.getElementById("synopsis");

  if (synBtn && synBox) {
    synBtn.addEventListener("click", function () {
      var hidden = synBox.classList.toggle("is-hidden");
      synBtn.textContent = hidden ? "Show synopsis" : "Hide synopsis";
      synBtn.setAttribute("aria-expanded", hidden ? "false" : "true");
    });
  }

  /* ---------- Feature 4: Reading progress bar ---------- */
  var bar = document.getElementById("progress-bar");

  if (bar) {
    function updateProgress() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - window.innerHeight;
      var percent = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, percent)) + "%";
    }
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    updateProgress();
  }

  /* ---------- Feature 5: Nav highlight ayon sa kasalukuyang page ---------- */
  // Awtomatikong nilalagay ang aria-current="page" sa link na tugma sa file na binuksan
  // (index.html, genres.html, about.html), kaya hindi na kailangang baguhin sa bawat HTML.
  var here = location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll(".main-nav a");

  for (var n = 0; n < navLinks.length; n++) {
    var href = navLinks[n].getAttribute("href") || "";
    var file = href.split("#")[0].split("?")[0].split("/").pop() || "index.html";

    if (file === here) {
      navLinks[n].setAttribute("aria-current", "page");
    } else {
      navLinks[n].removeAttribute("aria-current");
    }
  }
});
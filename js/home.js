// KATHA - home.js (para sa index.html lang: hero sky, ribbon, filter, search, book grid)
(function () {
  var hero = document.getElementById("hero");
  if (!hero) return;
  var root = document.documentElement;

  /* ===== MGA LIBRO: dito palitan ang title, genre, tags at synopsis ===== */
/* ===== MGA LIBRO: galing sa books.js (doon magpalit, hindi dito) ===== */
var genres = window.KATHA_GENRES || [];
var books = window.KATHA_BOOKS || [];

  /* ===== Sky: kumukutitap na bituin + shooting stars ===== */
  var cv = document.getElementById("sky"), ctx = cv.getContext("2d");
  var still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var tails = {
    dark: ["#F8A092", "#F6B193", "#F7C497", "#F6D197", "#F5D993"],
    light: ["#E0705C", "#D98A5E", "#C99A55", "#BFA047", "#B8862A"]
  };
  var W, H, stars = [], streaks = [], last = 0, t = 0;

  function resize() {
    var d = window.devicePixelRatio || 1, r = hero.getBoundingClientRect();
    W = r.width; H = r.height;
    cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    stars = [];
    for (var k = 0; k < Math.round(W * H / 5000); k++) {
      stars.push({ x: Math.random() * W, y: Math.random() * H * 0.85, r: Math.random() * 1.4 + 0.3, p: Math.random() * 6.28 });
    }
  }
  window.addEventListener("resize", resize);
  resize();

  function frame(ts) {
    var dark = root.getAttribute("data-theme") === "dark";
    var pal = dark ? tails.dark : tails.light;
    ctx.clearRect(0, 0, W, H);
    t += 0.02;

    stars.forEach(function (s) {
      var a = still ? 0.7 : 0.35 + 0.65 * Math.abs(Math.sin(t + s.p));
      ctx.fillStyle = dark ? "rgba(255,240,225," + a + ")" : "rgba(185,71,47," + a * 0.7 + ")";
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.28); ctx.fill();
    });

    if (!still) {
      if (ts - last > 900 + Math.random() * 1400) {
        streaks.push({ x: Math.random() * W * 1.1 + W * 0.1, y: -20, len: 120 + Math.random() * 140,
          sp: 9 + Math.random() * 7, a: Math.PI * 0.73 + Math.random() * 0.2, i: Math.random() * 5 | 0 });
        last = ts;
      }
      streaks = streaks.filter(function (s) { return s.y < H + 200 && s.x > -300; });
      streaks.forEach(function (s) {
        s.x += Math.cos(s.a) * s.sp; s.y += Math.sin(s.a) * s.sp;
        var tx = s.x - Math.cos(s.a) * s.len, ty = s.y - Math.sin(s.a) * s.len;
        var head = dark ? "#fff" : "#B9472F";
        var g = ctx.createLinearGradient(s.x, s.y, tx, ty);
        g.addColorStop(0, head); g.addColorStop(0.25, pal[s.i]); g.addColorStop(1, "transparent");
        ctx.strokeStyle = g; ctx.lineWidth = 2.4; ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(tx, ty); ctx.stroke();
        ctx.fillStyle = head; ctx.shadowColor = pal[s.i]; ctx.shadowBlur = 12;
        ctx.beginPath(); ctx.arc(s.x, s.y, 2.4, 0, 6.28); ctx.fill(); ctx.shadowBlur = 0;
      });
      requestAnimationFrame(frame);
    }
  }
  requestAnimationFrame(frame);

  /* ===== Ribbon ===== */
  var track = document.getElementById("ribbon");
  track.innerHTML = genres.concat(genres, genres, genres).map(function (g) { return "<span>" + g + "</span>"; }).join("");

  /* ===== Filter + search + grid ===== */
  var grid = document.getElementById("grid"), filters = document.getElementById("filters"), search = document.getElementById("search");
  var active = "All";
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  ["All"].concat(genres).forEach(function (g) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "filter-chip"; b.textContent = g;
    b.setAttribute("aria-pressed", g === "All" ? "true" : "false");
    b.addEventListener("click", function () {
      active = g;
      Array.prototype.forEach.call(filters.children, function (c) { c.setAttribute("aria-pressed", c === b ? "true" : "false"); });
      render();
    });
    filters.appendChild(b);
  });

  function card(b, idx) {
    var url = "stories/story-" + b.n + ".html";
    var bg = "linear-gradient(160deg,var(--c" + (idx % 5 + 1) + "),var(--c" + ((idx + 1) % 5 + 1) + "))";
    return '<article class="book-card">' +
      '<a class="cover-link" href="' + url + '" tabindex="-1" aria-hidden="true" style="aspect-ratio:2/3;background:' + bg + '">' +
      '<img class="cover" src="' + b.cover + '" alt="Cover of ' + b.title + '" loading="lazy" onerror="this.parentNode.classList.add(\'no-img\');this.remove()">' +

      '<span class="cover-title">' + b.title + '</span></a>' +
      '<div class="card-body"><span class="genre-badge">' + b.genre + '</span>' +
      '<h3>' + b.title + '</h3><p class="author">by ' + b.author + '</p>' +
      '<p class="card-synopsis">' + b.synopsis + '</p>' +
      '<a class="btn" href="' + url + '">Read Story</a></div></article>';
  }

  function render() {
    var q = search.value.trim().toLowerCase();
    var html = "";
    books.forEach(function (b, idx) {
      if ((active === "All" || b.tags.indexOf(active) > -1) && b.title.toLowerCase().indexOf(q) > -1) html += card(b, idx);
    });
    grid.innerHTML = html || '<p class="empty-msg">Walang nahanap. Subukan ang ibang salita o genre.</p>';
    Array.prototype.forEach.call(grid.querySelectorAll(".book-card"), function (c) { io.observe(c); });
  }
  search.addEventListener("input", render);
  render();
})();
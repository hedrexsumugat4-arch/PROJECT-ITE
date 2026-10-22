// KATHA - genres.js (para sa genres.html lang)
(function () {
  var host = document.getElementById("genre-sections");
  var chipList = document.getElementById("genre-chips");
  if (!host || !window.KATHA_BOOKS) return;

  var genres = window.KATHA_GENRES, books = window.KATHA_BOOKS;
  function slug(g) { return g.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  function card(b) {
    var idx = books.indexOf(b), url = "stories/story-" + b.n + ".html";
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

  var html = "", chips = "";
  genres.forEach(function (g) {
    var list = books.filter(function (b) { return b.tags.indexOf(g) > -1; });
    if (!list.length) return;
    chips += '<li><a href="genres.html#' + slug(g) + '">' + g + '</a></li>';
    html += '<section class="container shelf genre-section" id="' + slug(g) + '"><h2>' + g + '</h2>' +
      '<div class="book-grid">' + list.map(card).join("") + '</div></section>';
  });
  host.innerHTML = html;
  chipList.innerHTML = chips;

  // kung may #genre sa link (hal. genres.html#horror), pumunta roon pagkatapos mag-render
  var target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView();
})();
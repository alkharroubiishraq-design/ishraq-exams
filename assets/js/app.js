(function () {
  var cols = window.COLLECTIONS || [];
  var filtersEl = document.getElementById("filters");
  var listEl = document.getElementById("collections");

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function card(col, m) {
    var href = col.dir + m.file;
    var img = "assets/img/covers/" + m.cover;
    return (
      '<article class="card">' +
        '<a class="cover" href="' + href + '" target="_blank" rel="noopener" aria-label="معاينة النموذج ' + m.n + '">' +
          '<picture><source srcset="' + img + '.webp" type="image/webp">' +
          '<img src="' + img + '.jpg" alt="غلاف النموذج ' + m.n + '" loading="lazy" width="600" height="848"></picture>' +
        "</a>" +
        '<div class="card-body">' +
          '<div class="card-title"><h3>النموذج ' + m.n + "</h3>" + (m.tag ? '<span class="tag">' + esc(m.tag) + "</span>" : "") + "</div>" +
          '<p class="meta">' + m.pages + " صفحات · PDF · " + esc(m.size) + "</p>" +
          '<div class="card-btns">' +
            '<a class="btn btn-pink" href="' + href + '" download>تحميل</a>' +
            '<a class="btn btn-soft" href="' + href + '" target="_blank" rel="noopener">معاينة</a>' +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function section(col) {
    var zip = col.zip
      ? '<a class="btn btn-navy" href="' + col.dir + col.zip.file + '" download>تحميل كل النماذج (ZIP · ' + esc(col.zip.size) + ")</a>"
      : "";
    return (
      '<section class="collection" id="' + col.id + '" data-id="' + col.id + '">' +
        '<div class="col-head">' +
          "<div>" +
            '<div class="chips"><span class="chip chip-teal">' + esc(col.grade) + '</span><span class="chip chip-purple">' + esc(col.subject) + "</span></div>" +
            "<h2>" + esc(col.title) + "</h2>" +
            '<p class="sub">' + esc(col.term) + (col.units ? " · " + esc(col.units) : "") + "</p>" +
          "</div>" + zip +
        "</div>" +
        '<div class="grid">' + col.models.map(function (m) { return card(col, m); }).join("") + "</div>" +
      "</section>"
    );
  }

  listEl.innerHTML = cols.map(section).join("");

  if (cols.length > 1) {
    var btns = [{ id: "all", label: "الكل" }].concat(cols.map(function (c) {
      return { id: c.id, label: c.grade + " · " + c.subject };
    }));
    filtersEl.innerHTML = btns.map(function (b, i) {
      return '<button role="tab" aria-selected="' + (i === 0) + '" data-f="' + b.id + '">' + esc(b.label) + "</button>";
    }).join("");
    filtersEl.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      filtersEl.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-selected", x === b); });
      listEl.querySelectorAll(".collection").forEach(function (s) {
        s.hidden = b.dataset.f !== "all" && s.dataset.id !== b.dataset.f;
      });
    });
  } else {
    filtersEl.hidden = true;
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

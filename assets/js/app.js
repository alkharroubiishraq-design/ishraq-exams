(function () {
  var grades = window.GRADES || [];
  var pageGrade = document.body.getAttribute("data-grade");

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function modelCount(g) {
    return g.collections.reduce(function (n, c) { return n + c.models.length; }, 0);
  }

  function subjects(g) {
    var seen = [];
    g.collections.forEach(function (c) { if (seen.indexOf(c.subject) < 0) seen.push(c.subject); });
    return seen;
  }

  /* ---------- home page: grade cards ---------- */
  function gradeCard(g, i) {
    var tone = ["pink", "teal", "purple"][i % 3];
    return (
      '<a class="grade-card tone-' + tone + '" href="' + g.id + '/">' +
        '<span class="grade-num">' + esc(g.num) + "</span>" +
        "<div>" +
          "<h3>" + esc(g.name) + "</h3>" +
          "<p>" + esc(g.desc) + "</p>" +
          '<div class="chips">' +
            subjects(g).map(function (s) { return '<span class="chip chip-purple">' + esc(s) + "</span>"; }).join("") +
            '<span class="chip chip-teal">' + modelCount(g) + " نماذج</span>" +
          "</div>" +
        "</div>" +
        '<span class="go" aria-hidden="true">←</span>' +
      "</a>"
    );
  }

  /* ---------- grade page: exam cards ---------- */
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
          '<p class="meta">' + m.pages + " صفحات · مع الإجابات" + "</p>" +
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
      '<section class="collection" id="' + col.id + '" data-subject="' + esc(col.subject) + '">' +
        '<div class="col-head">' +
          "<div>" +
            '<div class="chips"><span class="chip chip-purple">' + esc(col.subject) + "</span></div>" +
            "<h2>" + esc(col.title) + "</h2>" +
            '<p class="sub">' + esc(col.term) + (col.units ? " · " + esc(col.units) : "") + "</p>" +
          "</div>" + zip +
        "</div>" +
        '<div class="grid">' + col.models.map(function (m) { return card(col, m); }).join("") + "</div>" +
      "</section>"
    );
  }

  if (pageGrade) {
    var g = grades.filter(function (x) { return x.id === pageGrade; })[0];
    var listEl = document.getElementById("collections");
    if (!g) {
      listEl.innerHTML = '<p class="empty">ما في نماذج لهذا الصف حاليًا. <a href="./">ارجع للصفحة الرئيسية</a></p>';
    } else {
      document.title = g.name + " | نماذج امتحانات المعلمة إشراق الخروبي";
      document.getElementById("grade-name").textContent = g.name;
      document.getElementById("grade-crumb").textContent = g.name;
      document.getElementById("grade-desc").textContent = g.desc;
      listEl.innerHTML = g.collections.map(section).join("");

      var subs = subjects(g);
      var filtersEl = document.getElementById("filters");
      if (subs.length > 1) {
        filtersEl.innerHTML = ["الكل"].concat(subs).map(function (s, i) {
          return '<button role="tab" aria-selected="' + (i === 0) + '" data-f="' + (i ? esc(s) : "") + '">' + esc(s) + "</button>";
        }).join("");
        filtersEl.addEventListener("click", function (e) {
          var b = e.target.closest("button");
          if (!b) return;
          filtersEl.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-selected", x === b); });
          listEl.querySelectorAll(".collection").forEach(function (s) {
            s.hidden = b.dataset.f !== "" && s.dataset.subject !== b.dataset.f;
          });
        });
      } else {
        filtersEl.hidden = true;
      }
    }
  } else {
    var gradesEl = document.getElementById("grades-list");
    if (gradesEl) {
      gradesEl.innerHTML = grades.map(gradeCard).join("") +
        '<div class="grade-card soon"><span class="grade-num">+</span><div><h3>صفوف أخرى</h3><p>نماذج لصفوف جديدة تُضاف قريبًا.</p></div></div>';
    }
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

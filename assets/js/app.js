(function () {
  var grades = window.GRADES || [];
  var curricula = window.CURRICULA || {};
  var pageGrade = document.body.getAttribute("data-grade");
  var pageCur = document.body.getAttribute("data-curriculum");

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function modelCount(g) {
    return (g.collections || []).reduce(function (n, c) { return n + c.models.length; }, 0);
  }

  function pagesText(n) {
    return n + (n >= 3 && n <= 10 ? " صفحات" : " صفحة");
  }

  function subjects(g) {
    var seen = [];
    g.collections.forEach(function (c) { if (seen.indexOf(c.subject) < 0) seen.push(c.subject); });
    return seen;
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
          '<div class="card-title"><h3>' + esc(m.title || "النموذج " + m.n) + "</h3>" + (m.tag ? '<span class="tag" dir="auto">' + esc(m.tag) + "</span>" : "") + "</div>" +
          '<p class="meta">' + pagesText(m.pages) + " · مع الإجابات" + "</p>" +
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

  /* ---------- curriculum page: one card per grade, each grade has its own page ---------- */
  function gradeHref(key, g) {
    return key === "ew" ? "english-world/grade" + g.num + "/" : g.id + "/";
  }

  function countText(n) {
    return n + (n >= 3 && n <= 10 ? " نماذج" : " نموذج");
  }

  function gradePick(key, g, i) {
    var tone = ["pink", "teal", "purple"][i % 3];
    var n = modelCount(g);
    var lvl = g.level ? '<span class="chip chip-purple" dir="ltr">' + esc(g.level) + "</span>" : "";
    if (!n) {
      return (
        '<div class="grade-card soon">' +
          '<span class="grade-num">' + esc(g.num) + "</span>" +
          "<div><h3>" + esc(g.name) + "</h3><p>النماذج قيد الإعداد وتُضاف قريبًا.</p></div>" +
        "</div>"
      );
    }
    return (
      '<a class="grade-card tone-' + tone + '" href="' + gradeHref(key, g) + '">' +
        '<span class="grade-num">' + esc(g.num) + "</span>" +
        "<div>" +
          "<h3>" + esc(g.name) + "</h3>" +
          "<p>" + (key === "ew" ? "نموذج شامل لكل وحدة" : "نماذج منتصف الفصل الأول") + "</p>" +
          '<div class="chips">' + lvl + '<span class="chip chip-teal">' + countText(n) + "</span></div>" +
        "</div>" +
        '<span class="go" aria-hidden="true">←</span>' +
      "</a>"
    );
  }

  if (pageCur) {
    var cur = curricula[pageCur];
    var listC = document.getElementById("collections");
    document.title = cur.name + " | نماذج امتحانات المعلمة إشراق الخروبي";
    document.getElementById("grade-name").textContent = cur.name;
    document.getElementById("grade-crumb").textContent = cur.name;
    document.getElementById("grade-desc").textContent = cur.desc;
    document.getElementById("filters").hidden = true;
    listC.innerHTML = '<div class="grades">' +
      cur.grades.map(function (g, i) { return gradePick(pageCur, g, i); }).join("") + "</div>";
  } else if (pageGrade) {
    var all = grades.concat(window.EW_GRADES || []);
    var g = all.filter(function (x) { return x.id === pageGrade; })[0];
    var listEl = document.getElementById("collections");
    if (!g) {
      listEl.innerHTML = '<p class="empty">ما في نماذج لهذا الصف حاليًا. <a href="./">ارجع للصفحة الرئيسية</a></p>';
    } else {
      document.title = g.name + " | نماذج امتحانات المعلمة إشراق الخروبي";
      document.getElementById("grade-name").textContent = g.name;
      document.getElementById("grade-crumb").textContent = g.name;
      document.getElementById("grade-desc").textContent = g.desc || (g.level ? g.level + " · نموذج شامل لكل وحدة مع الإجابات" : "");
      listEl.innerHTML = (g.collections || []).map(section).join("") || '<p class="empty">النماذج قيد الإعداد وتُضاف قريبًا.</p>';

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
      gradesEl.innerHTML = ["gov", "ew"].map(function (key, i) {
        var c = curricula[key];
        var n = c.grades.reduce(function (t, g) { return t + modelCount(g); }, 0);
        var ready = c.grades.filter(function (g) { return modelCount(g) > 0; }).length;
        return (
          '<a class="grade-card cur-card tone-' + (i ? "teal" : "pink") + '" href="' + c.page + '">' +
            '<span class="grade-num">' + (i ? "EW" : "📘") + "</span>" +
            "<div>" +
              "<h3>" + esc(c.name) + "</h3>" +
              "<p>" + esc(c.desc) + "</p>" +
              '<div class="chips">' +
                '<span class="chip chip-purple">' + (ready === 1 ? "صف واحد" : ready + (ready > 2 && ready < 11 ? " صفوف" : " صف")) + "</span>" +
                '<span class="chip chip-teal">' + n + " نموذج</span>" +
              "</div>" +
              '<div class="cur-grades">' + c.grades.map(function (g) {
                return '<span class="' + (modelCount(g) ? "" : "off") + '">' + esc(g.num) + "</span>";
              }).join("") + "</div>" +
            "</div>" +
            '<span class="go" aria-hidden="true">←</span>' +
          "</a>"
        );
      }).join("");
    }
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();

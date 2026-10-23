# نماذج امتحانات — المعلمة إشراق الخروبي

موقع ثابت (HTML/CSS/JS) لتحميل نماذج الامتحانات، منشور على GitHub Pages.

- `index.html`: الصفحة الرئيسية (تعريف بالموقع، اختيار الصف، نبذة عن المعلمة).
- `government/index.html`: صفحة منهاج الحكومة، فيها كل الصفوف ونماذج كل صف (من `GRADES`).
- `english-world/index.html`: صفحة منهاج English World، فيها كل الصفوف ونموذج لكل وحدة (من `EW_GRADES`).
- `gradeNN/index.html`: صفحة صف واحد من منهاج الحكومة (روابط قديمة ما زالت تعمل).

## إضافة نماذج English World لصف
1. ضع ملفات PDF في `files/gradeNN/english-world/` والأغلفة في `assets/img/covers/` باسم `gradeNN-english-world-unit-N`.
2. في `EW_GRADES` داخل `assets/js/catalog.js` احذف `soon` من الصف وأضف له `collections` مثل الصف العاشر.

## إضافة صف جديد
1. ضع ملفات PDF في مجلد مثل `files/grade11/english/midterm/`، والأغلفة (webp + jpg بعرض 600px) في `assets/img/covers/`.
2. أضف كتلة للصف في `GRADES` داخل `assets/js/catalog.js`.
3. انسخ مجلد `grade10` باسم الصف الجديد وغيّر `data-grade` في ملف `index.html` داخله.

مفتاح إجابات كل نموذج مضاف في آخر ملف النموذج نفسه.

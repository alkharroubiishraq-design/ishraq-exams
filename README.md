# نماذج امتحانات — المعلمة إشراق الخروبي

موقع ثابت (HTML/CSS/JS) لتحميل نماذج الامتحانات، منشور على GitHub Pages.

- `index.html`: الصفحة الرئيسية (تعريف بالموقع، اختيار الصف، نبذة عن المعلمة).
- `gradeNN/index.html`: صفحة كل صف، تعرض نماذجه من `assets/js/catalog.js`.

## إضافة صف جديد
1. ضع ملفات PDF في مجلد مثل `files/grade11/english/midterm/`، والأغلفة (webp + jpg بعرض 600px) في `assets/img/covers/`.
2. أضف كتلة للصف في `GRADES` داخل `assets/js/catalog.js`.
3. انسخ مجلد `grade10` باسم الصف الجديد وغيّر `data-grade` في ملف `index.html` داخله.

مفتاح إجابات كل نموذج مضاف في آخر ملف النموذج نفسه.

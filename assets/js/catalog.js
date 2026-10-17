/*
  قائمة النماذج المعروضة في الموقع.
  لإضافة صف أو مادة جديدة: انسخ كتلة كاملة داخل COLLECTIONS وعدّل البيانات،
  وضع ملفات PDF في المجلد المذكور في "dir" وصور الأغلفة في assets/img/covers/.
*/
window.SITE = {
  teacher: "إشراق الخروبي",
  teacherEn: "Ishraq Al-Kharoubi",
  role: "معلمة اللغة الإنجليزية",
  phone: "0790146621",
  whatsapp: "962790146621"
};

window.COLLECTIONS = [
  {
    id: "grade10-english-midterm",
    grade: "الصف العاشر",
    subject: "اللغة الإنجليزية",
    title: "امتحان منتصف الفصل الأول",
    term: "الفصل الدراسي الأول 2026 / 2027",
    units: "الوحدات من 1 إلى 3، كتاب Jordan High Note",
    dir: "files/grade10/english/midterm/",
    zip: { file: "Grade10-English-Midterm-All-PDF.zip", size: "2.6 MB" },
    models: [
      { n: 1, file: "Grade10-English-Midterm-Model-1.pdf", cover: "grade10-english-model-1", size: "540 KB", pages: 6, tag: "نموذج موسّع" },
      { n: 2, file: "Grade10-English-Midterm-Model-2.pdf", cover: "grade10-english-model-2", size: "540 KB", pages: 6, tag: "نموذج موسّع" },
      { n: 3, file: "Grade10-English-Midterm-Model-3.pdf", cover: "grade10-english-model-3", size: "525 KB", pages: 5, tag: "60 علامة" },
      { n: 4, file: "Grade10-English-Midterm-Model-4.pdf", cover: "grade10-english-model-4", size: "535 KB", pages: 4, tag: "60 علامة" },
      { n: 5, file: "Grade10-English-Midterm-Model-5.pdf", cover: "grade10-english-model-5", size: "545 KB", pages: 4, tag: "60 علامة" }
    ]
  }
];

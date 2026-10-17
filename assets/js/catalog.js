/*
  بيانات الموقع.
  لإضافة صف جديد:
    1) أضف كتلة جديدة داخل GRADES (انسخ كتلة الصف العاشر وعدّلها).
    2) انسخ المجلد grade10 باسم الصف الجديد (مثل grade11) وغيّر data-grade في ملف index.html داخله.
  لإضافة مادة أو امتحان لصف موجود: أضف كتلة داخل "collections" لذلك الصف.
  ملفات PDF توضع في المجلد المذكور في "dir"، وصور الأغلفة في assets/img/covers/.
*/
window.SITE = {
  teacher: "إشراق الخروبي",
  teacherEn: "Ishraq Al-Kharoubi",
  role: "معلمة اللغة الإنجليزية",
  phone: "0790146621",
  whatsapp: "962790146621"
};

window.GRADES = [
  {
    id: "grade5",
    name: "الصف الخامس",
    num: "5",
    desc: "نماذج امتحانات منتصف الفصل الأول في اللغة الإنجليزية.",
    collections: [
      {
        id: "grade5-english-midterm",
        subject: "اللغة الإنجليزية",
        title: "امتحان منتصف الفصل الأول",
        term: "الفصل الدراسي الأول 2026 / 2027",
        units: "الوحدتان 1 و2",
        dir: "files/grade5/english/midterm/",
        zip: { file: "Grade5-English-Midterm-All-PDF.zip", size: "4 MB" },
        models: [
          { n: 1, file: "Grade5-English-Midterm-Model-1.pdf", cover: "grade5-english-model-1", size: "830 KB", pages: 6, tag: "30 علامة · من الكتاب" },
          { n: 2, file: "Grade5-English-Midterm-Model-2.pdf", cover: "grade5-english-model-2", size: "770 KB", pages: 6, tag: "30 علامة · من الكتاب" },
          { n: 3, file: "Grade5-English-Midterm-Model-3.pdf", cover: "grade5-english-model-3", size: "850 KB", pages: 5, tag: "30 علامة" },
          { n: 4, file: "Grade5-English-Midterm-Model-4.pdf", cover: "grade5-english-model-4", size: "830 KB", pages: 5, tag: "30 علامة" },
          { n: 5, file: "Grade5-English-Midterm-Model-5.pdf", cover: "grade5-english-model-5", size: "830 KB", pages: 5, tag: "30 علامة" }
        ]
      }
    ]
  },
  {
    id: "grade6",
    name: "الصف السادس",
    num: "6",
    desc: "نماذج امتحانات منتصف الفصل الأول في اللغة الإنجليزية.",
    collections: [
      {
        id: "grade6-english-midterm",
        subject: "اللغة الإنجليزية",
        title: "امتحان منتصف الفصل الأول",
        term: "الفصل الدراسي الأول 2026 / 2027",
        units: "الوحدتان 1 و2",
        dir: "files/grade6/english/midterm/",
        zip: { file: "Grade6-English-Midterm-All-PDF.zip", size: "3.4 MB" },
        models: [
          { n: 1, file: "Grade6-English-Midterm-Model-1.pdf", cover: "grade6-english-model-1", size: "720 KB", pages: 5, tag: "30 علامة · من الكتاب" },
          { n: 2, file: "Grade6-English-Midterm-Model-2.pdf", cover: "grade6-english-model-2", size: "700 KB", pages: 5, tag: "30 علامة · من الكتاب" },
          { n: 3, file: "Grade6-English-Midterm-Model-3.pdf", cover: "grade6-english-model-3", size: "725 KB", pages: 5, tag: "30 علامة" },
          { n: 4, file: "Grade6-English-Midterm-Model-4.pdf", cover: "grade6-english-model-4", size: "725 KB", pages: 5, tag: "30 علامة" },
          { n: 5, file: "Grade6-English-Midterm-Model-5.pdf", cover: "grade6-english-model-5", size: "720 KB", pages: 5, tag: "30 علامة" }
        ]
      }
    ]
  },
  {
    id: "grade7",
    name: "الصف السابع",
    num: "7",
    desc: "نماذج امتحانات منتصف الفصل الأول في اللغة الإنجليزية.",
    collections: [
      {
        id: "grade7-english-midterm",
        subject: "اللغة الإنجليزية",
        title: "امتحان منتصف الفصل الأول",
        term: "الفصل الدراسي الأول 2026 / 2027",
        units: "الوحدتان 1 و2",
        dir: "files/grade7/english/midterm/",
        zip: { file: "Grade7-English-Midterm-All-PDF.zip", size: "3.2 MB" },
        models: [
          { n: 1, file: "Grade7-English-Midterm-Model-1.pdf", cover: "grade7-english-model-1", size: "655 KB", pages: 6, tag: "30 علامة · من الكتاب" },
          { n: 2, file: "Grade7-English-Midterm-Model-2.pdf", cover: "grade7-english-model-2", size: "650 KB", pages: 6, tag: "30 علامة · من الكتاب" },
          { n: 3, file: "Grade7-English-Midterm-Model-3.pdf", cover: "grade7-english-model-3", size: "665 KB", pages: 5, tag: "30 علامة" },
          { n: 4, file: "Grade7-English-Midterm-Model-4.pdf", cover: "grade7-english-model-4", size: "670 KB", pages: 5, tag: "30 علامة" },
          { n: 5, file: "Grade7-English-Midterm-Model-5.pdf", cover: "grade7-english-model-5", size: "680 KB", pages: 5, tag: "30 علامة" }
        ]
      }
    ]
  },
  {
    id: "grade8",
    name: "الصف الثامن",
    num: "8",
    desc: "نماذج امتحانات منتصف الفصل الأول في اللغة الإنجليزية.",
    collections: [
      {
        id: "grade8-english-midterm",
        subject: "اللغة الإنجليزية",
        title: "امتحان منتصف الفصل الأول",
        term: "الفصل الدراسي الأول 2026 / 2027",
        units: "الوحدات من 1 إلى 3",
        dir: "files/grade8/english/midterm/",
        zip: { file: "Grade8-English-Midterm-All-PDF.zip", size: "3.3 MB" },
        models: [
          { n: 1, file: "Grade8-English-Midterm-Model-1.pdf", cover: "grade8-english-model-1", size: "680 KB", pages: 8, tag: "موسّع · 30 علامة" },
          { n: 2, file: "Grade8-English-Midterm-Model-2.pdf", cover: "grade8-english-model-2", size: "675 KB", pages: 8, tag: "موسّع · 30 علامة" },
          { n: 3, file: "Grade8-English-Midterm-Model-3.pdf", cover: "grade8-english-model-3", size: "670 KB", pages: 6, tag: "60 علامة" },
          { n: 4, file: "Grade8-English-Midterm-Model-4.pdf", cover: "grade8-english-model-4", size: "680 KB", pages: 6, tag: "60 علامة" },
          { n: 5, file: "Grade8-English-Midterm-Model-5.pdf", cover: "grade8-english-model-5", size: "685 KB", pages: 6, tag: "60 علامة" }
        ]
      }
    ]
  },
  {
    id: "grade9",
    name: "الصف التاسع",
    num: "9",
    desc: "نماذج امتحانات منتصف الفصل الأول في اللغة الإنجليزية.",
    collections: [
      {
        id: "grade9-english-midterm",
        subject: "اللغة الإنجليزية",
        title: "امتحان منتصف الفصل الأول",
        term: "الفصل الدراسي الأول 2026 / 2027",
        units: "الوحدات من 1 إلى 3 مع التركيز على الوحدتين الأولى والثانية",
        dir: "files/grade9/english/midterm/",
        zip: { file: "Grade9-English-Midterm-All-PDF.zip", size: "3.2 MB" },
        models: [
          { n: 1, file: "Grade9-English-Midterm-Model-1.pdf", cover: "grade9-english-model-1", size: "670 KB", pages: 8, tag: "موسّع · 30 علامة" },
          { n: 2, file: "Grade9-English-Midterm-Model-2.pdf", cover: "grade9-english-model-2", size: "670 KB", pages: 8, tag: "موسّع · 30 علامة" },
          { n: 3, file: "Grade9-English-Midterm-Model-3.pdf", cover: "grade9-english-model-3", size: "660 KB", pages: 6, tag: "60 علامة" },
          { n: 4, file: "Grade9-English-Midterm-Model-4.pdf", cover: "grade9-english-model-4", size: "660 KB", pages: 6, tag: "60 علامة" },
          { n: 5, file: "Grade9-English-Midterm-Model-5.pdf", cover: "grade9-english-model-5", size: "670 KB", pages: 6, tag: "60 علامة" }
        ]
      }
    ]
  },
  {
    id: "grade10",
    name: "الصف العاشر",
    num: "10",
    desc: "نماذج امتحانات منتصف الفصل الأول في اللغة الإنجليزية.",
    collections: [
      {
        id: "grade10-english-midterm",
        subject: "اللغة الإنجليزية",
        title: "امتحان منتصف الفصل الأول",
        term: "الفصل الدراسي الأول 2026 / 2027",
        units: "الوحدات من 1 إلى 3",
        dir: "files/grade10/english/midterm/",
        zip: { file: "Grade10-English-Midterm-All-PDF.zip", size: "2.6 MB" },
        models: [
          { n: 1, file: "Grade10-English-Midterm-Model-1.pdf", cover: "grade10-english-model-1", size: "530 KB", pages: 8, tag: "موسّع · 30 علامة" },
          { n: 2, file: "Grade10-English-Midterm-Model-2.pdf", cover: "grade10-english-model-2", size: "530 KB", pages: 8, tag: "موسّع · 30 علامة" },
          { n: 3, file: "Grade10-English-Midterm-Model-3.pdf", cover: "grade10-english-model-3", size: "525 KB", pages: 7, tag: "60 علامة" },
          { n: 4, file: "Grade10-English-Midterm-Model-4.pdf", cover: "grade10-english-model-4", size: "535 KB", pages: 6, tag: "60 علامة" },
          { n: 5, file: "Grade10-English-Midterm-Model-5.pdf", cover: "grade10-english-model-5", size: "540 KB", pages: 6, tag: "60 علامة" }
        ]
      }
    ]
  }
];

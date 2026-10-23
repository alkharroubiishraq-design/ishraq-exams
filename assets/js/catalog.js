/*
  بيانات الموقع.
  المنهاجان: GRADES = منهاج الحكومة (صفحة government/)، EW_GRADES = منهاج English World (صفحة english-world/).
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
    id: "grade4",
    name: "الصف الرابع",
    num: "4",
    desc: "نماذج امتحانات منتصف الفصل الأول في اللغة الإنجليزية.",
    collections: [
      {
        id: "grade4-english-midterm",
        subject: "اللغة الإنجليزية",
        title: "امتحان منتصف الفصل الأول",
        term: "الفصل الدراسي الأول 2026 / 2027",
        units: "الوحدتان 1 و2",
        dir: "files/grade4/english/midterm/",
        zip: { file: "Grade4-English-Midterm-All-PDF.zip", size: "3.7 MB" },
        models: [
          { n: 1, file: "Grade4-English-Midterm-Model-1.pdf", cover: "grade4-english-model-1", size: "810 KB", pages: 5, tag: "30 علامة · من الكتاب" },
          { n: 2, file: "Grade4-English-Midterm-Model-2.pdf", cover: "grade4-english-model-2", size: "735 KB", pages: 5, tag: "30 علامة · من الكتاب" },
          { n: 3, file: "Grade4-English-Midterm-Model-3.pdf", cover: "grade4-english-model-3", size: "835 KB", pages: 5, tag: "30 علامة" },
          { n: 4, file: "Grade4-English-Midterm-Model-4.pdf", cover: "grade4-english-model-4", size: "740 KB", pages: 5, tag: "30 علامة" },
          { n: 5, file: "Grade4-English-Midterm-Model-5.pdf", cover: "grade4-english-model-5", size: "770 KB", pages: 5, tag: "30 علامة" }
        ]
      }
    ]
  },
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

/*
  منهاج English World (Macmillan): نموذج شامل لكل وحدة.
  الصف بدون نماذج بعد يظهر "قريبًا" (soon = عدد الوحدات المنتظرة).
*/
window.EW_GRADES = [
  { id: "ew4", name: "الصف الرابع", num: "4", level: "English World 4", soon: 3 },
  {
    id: "ew5",
    name: "الصف الخامس",
    num: "5",
    level: "English World 5",
    collections: [
      {
        id: "ew5-units",
        subject: "English World 5",
        title: "نماذج الوحدات",
        term: "نموذج شامل لكل وحدة من 30 علامة: قراءة، معاني، إملاء، قواعد وكتابة",
        units: "الوحدات من 1 إلى 3",
        dir: "files/grade5/english-world/",
        zip: { file: "Grade5-English-World-Units-1-3-PDF.zip", size: "1.8 MB" },
        models: [
          { n: 1, title: "الوحدة 1", file: "Grade5-English-World-Unit-1.pdf", cover: "grade5-english-world-unit-1", size: "635 KB", pages: 7, tag: "A journey to adventure" },
          { n: 2, title: "الوحدة 2", file: "Grade5-English-World-Unit-2.pdf", cover: "grade5-english-world-unit-2", size: "635 KB", pages: 7, tag: "In the mountains" },
          { n: 3, title: "الوحدة 3", file: "Grade5-English-World-Unit-3.pdf", cover: "grade5-english-world-unit-3", size: "640 KB", pages: 8, tag: "Tunnels and bridges" }
        ]
      }
    ]
  },
  { id: "ew6", name: "الصف السادس", num: "6", level: "English World 6", soon: 3 },
  {
    id: "ew7",
    name: "الصف السابع",
    num: "7",
    level: "English World 7",
    collections: [
      {
        id: "ew7-units",
        subject: "English World 7",
        title: "نماذج الوحدات",
        term: "نموذج شامل لكل وحدة من 30 علامة: قراءة، معاني، إملاء، قواعد وكتابة",
        units: "الوحدات من 1 إلى 3",
        dir: "files/grade7/english-world/",
        zip: { file: "Grade7-English-World-Units-1-3-PDF.zip", size: "1.9 MB" },
        models: [
          { n: 1, title: "الوحدة 1", file: "Grade7-English-World-Unit-1.pdf", cover: "grade7-english-world-unit-1", size: "650 KB", pages: 9, tag: "The portrait project" },
          { n: 2, title: "الوحدة 2", file: "Grade7-English-World-Unit-2.pdf", cover: "grade7-english-world-unit-2", size: "650 KB", pages: 9, tag: "The man at the fountain" },
          { n: 3, title: "الوحدة 3", file: "Grade7-English-World-Unit-3.pdf", cover: "grade7-english-world-unit-3", size: "655 KB", pages: 9, tag: "Endangered animals" }
        ]
      }
    ]
  },
  {
    id: "ew8",
    name: "الصف الثامن",
    num: "8",
    level: "English World 8",
    collections: [
      {
        id: "ew8-units",
        subject: "English World 8",
        title: "نماذج الوحدات",
        term: "نموذج شامل لكل وحدة من 60 علامة: قراءة، معاني، إملاء، قواعد وكتابة",
        units: "الوحدات من 1 إلى 3",
        dir: "files/grade8/english-world/",
        zip: { file: "Grade8-English-World-Units-1-3-PDF.zip", size: "1.8 MB" },
        models: [
          { n: 1, title: "الوحدة 1", file: "Grade8-English-World-Unit-1.pdf", cover: "grade8-english-world-unit-1", size: "650 KB", pages: 10, tag: "A website project" },
          { n: 2, title: "الوحدة 2", file: "Grade8-English-World-Unit-2.pdf", cover: "grade8-english-world-unit-2", size: "650 KB", pages: 10, tag: "We love New York" },
          { n: 3, title: "الوحدة 3", file: "Grade8-English-World-Unit-3.pdf", cover: "grade8-english-world-unit-3", size: "655 KB", pages: 10, tag: "Different places" }
        ]
      }
    ]
  },
  {
    id: "ew9",
    name: "الصف التاسع",
    num: "9",
    level: "English World 9",
    collections: [
      {
        id: "ew9-units",
        subject: "English World 9",
        title: "نماذج الوحدات",
        term: "نموذج شامل لكل وحدة من 60 علامة: قراءة، معاني، إملاء، قواعد وكتابة",
        units: "الوحدات من 1 إلى 3",
        dir: "files/grade9/english-world/",
        zip: { file: "Grade9-English-World-Units-1-3-PDF.zip", size: "1.9 MB" },
        models: [
          { n: 1, title: "الوحدة 1", file: "Grade9-English-World-Unit-1.pdf", cover: "grade9-english-world-unit-1", size: "655 KB", pages: 10, tag: "An international school" },
          { n: 2, title: "الوحدة 2", file: "Grade9-English-World-Unit-2.pdf", cover: "grade9-english-world-unit-2", size: "660 KB", pages: 11, tag: "Music" },
          { n: 3, title: "الوحدة 3", file: "Grade9-English-World-Unit-3.pdf", cover: "grade9-english-world-unit-3", size: "655 KB", pages: 10, tag: "It's a mystery ..." }
        ]
      }
    ]
  },
  {
    id: "ew10",
    name: "الصف العاشر",
    num: "10",
    level: "English World 10",
    collections: [
      {
        id: "ew10-units",
        subject: "English World 10",
        title: "نماذج الوحدات",
        term: "نموذج شامل لكل وحدة: قراءة، معاني، إملاء، قواعد وكتابة",
        units: "الوحدات من 1 إلى 3",
        dir: "files/grade10/english-world/",
        zip: { file: "Grade10-English-World-Units-1-3-PDF.zip", size: "1.9 MB" },
        models: [
          { n: 1, title: "الوحدة 1", file: "Grade10-English-World-Unit-1.pdf", cover: "grade10-english-world-unit-1", size: "650 KB", pages: 9, tag: "It's headline news!" },
          { n: 2, title: "الوحدة 2", file: "Grade10-English-World-Unit-2.pdf", cover: "grade10-english-world-unit-2", size: "650 KB", pages: 9, tag: "I am writing to say ..." },
          { n: 3, title: "الوحدة 3", file: "Grade10-English-World-Unit-3.pdf", cover: "grade10-english-world-unit-3", size: "655 KB", pages: 11, tag: "This house believes ..." }
        ]
      }
    ]
  }
];

window.CURRICULA = {
  gov: {
    name: "منهاج الحكومة",
    desc: "نماذج امتحانات منتصف الفصل الأول لكل الصفوف، مبنية على الكتاب المقرر، وكل نموذج معه إجاباته في آخره.",
    page: "government/",
    grades: window.GRADES
  },
  ew: {
    name: "منهاج English World",
    desc: "نموذج شامل لكل وحدة من كتاب English World: فقرة قراءة وأسئلتها، معاني إنجليزي-إنجليزي، إملاء، قواعد وكتابة، مع الإجابات وورقة لكل كلمات الوحدة.",
    page: "english-world/",
    grades: window.EW_GRADES
  }
};

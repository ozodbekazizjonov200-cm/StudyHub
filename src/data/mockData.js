export const currentUser = {
  name: "Ozodbek",
  role: "Student",
  email: "ozodbek@studyhub.uz",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
  bio: "Toshkent Axborot Texnologiyalari Universiteti talabasi. Dasturlash va aniq fanlarga qiziqadi.",
  location: "Toshkent, O'zbekiston",
  joinedDate: "Yanvar 2026",
  stats: {
    enrolledSubjects: 5,
    completedTests: 28,
    averageScore: 87,
    streakDays: 12,
    totalCourses: 12,
    rank: "Top 5%"
  }
};

export const statsCardsData = [
  {
    id: 1,
    title: "O'zlashtirilayotgan fanlar",
    value: "5",
    unit: "fan",
    icon: "BookOpen",
    bgColor: "#F3F0FF",
    iconColor: "#7C3AED"
  },
  {
    id: 2,
    title: "Yechilgan testlar",
    value: "28",
    unit: "ta",
    icon: "CheckSquare",
    bgColor: "#FFF7ED",
    iconColor: "#EA580C"
  },
  {
    id: 3,
    title: "O'rtacha natija",
    value: "87%",
    unit: "",
    badge: "+5%",
    isPositive: true,
    icon: "Trophy",
    bgColor: "#ECFDF5",
    iconColor: "#059669"
  },
  {
    id: 4,
    title: "Ketma-ketlik",
    value: "12",
    unit: "kun",
    icon: "Flame",
    bgColor: "#FEE2E2",
    iconColor: "#DC2626"
  }
];

export const subjectsData = [
  {
    id: "math",
    name: "Matematika",
    lessonsCount: "12 ta mavzu",
    progress: 75,
    color: "#7C3AED",
    bgColor: "#F3F0FF",
    category: "Aniq fanlar",
    description: "Algebra, Geometriya, Matematik analiz va Trigonometriya asoslari",
    teacher: "Prof. Alisher Qodirov",
    imageBg: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
    iconName: "Calculator"
  },
  {
    id: "english",
    name: "Ingliz tili",
    lessonsCount: "15 ta mavzu",
    progress: 60,
    color: "#D97706",
    bgColor: "#FEF3C7",
    category: "Gumanitar",
    description: "IELTS Grammar, Vocabulary, Speaking va Writing ko'nikmalari",
    teacher: "Ms. Elena Smith",
    imageBg: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)",
    iconName: "Languages"
  },
  {
    id: "cs",
    name: "Informatika",
    lessonsCount: "10 ta mavzu",
    progress: 90,
    color: "#059669",
    bgColor: "#D1FAE5",
    category: "Aniq fanlar",
    description: "Python dasturlash, Algoritmlar, Ma'lumotlar tuzilmasi va Web",
    teacher: "Jahongir Raximov",
    imageBg: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
    iconName: "Code"
  },
  {
    id: "physics",
    name: "Fizika",
    lessonsCount: "8 ta mavzu",
    progress: 40,
    color: "#2563EB",
    bgColor: "#DBEAFE",
    category: "Tabiiy fanlar",
    description: "Mexanika, Molekulyar fizika, Elektr va Optika qonuniyatlari",
    teacher: "Dr. Nodirbek Yuldashev",
    imageBg: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
    iconName: "Atom"
  },
  {
    id: "chemistry",
    name: "Kimyo",
    lessonsCount: "6 ta mavzu",
    progress: 30,
    color: "#DB2777",
    bgColor: "#FCE7F3",
    category: "Tabiiy fanlar",
    description: "Organik va Anorganik kimyo, Kimyoviy reaksiyalar va Formulalar",
    teacher: "Gulnora Ergasheva",
    imageBg: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)",
    iconName: "FlaskConical"
  }
];

export const continueLearningData = [
  {
    id: 1,
    subjectId: "math",
    subject: "Matematika",
    topic: "Algebraik ifodalar",
    progress: 75,
    buttonColor: "#7C3AED",
    nextLesson: "Ko'phadlarni ko'paytirish va bo'lish",
    totalDuration: "45 daqiqa"
  },
  {
    id: 2,
    subjectId: "english",
    subject: "Ingliz tili",
    topic: "Present Perfect Tense",
    progress: 60,
    buttonColor: "#F59E0B",
    nextLesson: "Ever vs Never mashqlari",
    totalDuration: "30 daqiqa"
  },
  {
    id: 3,
    subjectId: "cs",
    subject: "Informatika",
    topic: "Python asoslari",
    progress: 90,
    buttonColor: "#10B981",
    nextLesson: "Funktsiyalar va Rekursiya",
    totalDuration: "60 daqiqa"
  }
];

export const progressChartData = [
  { day: "Dush", score: 25, tests: 2, hours: 1.5 },
  { day: "Sesh", score: 40, tests: 4, hours: 2.2 },
  { day: "Chor", score: 38, tests: 3, hours: 2.0 },
  { day: "Pay", score: 40, tests: 4, hours: 2.5 },
  { day: "Jum", score: 60, tests: 6, hours: 3.8 },
  { day: "Shan", score: 55, tests: 5, hours: 3.2 },
  { day: "Yak", score: 80, tests: 8, hours: 4.5 }
];

export const recentResultsData = [
  {
    id: 1,
    subject: "Matematika testi",
    score: 92,
    date: "Bugun, 10:30",
    questionsCount: 50,
    correctCount: 46,
    color: "#7C3AED",
    status: "A'lo"
  },
  {
    id: 2,
    subject: "Ingliz tili testi",
    score: 78,
    date: "Kecha, 16:45",
    questionsCount: 40,
    correctCount: 31,
    color: "#F59E0B",
    status: "Yaxshi"
  },
  {
    id: 3,
    subject: "Informatika testi",
    score: 85,
    date: "29-Avg, 14:20",
    questionsCount: 30,
    correctCount: 26,
    color: "#10B981",
    status: "A'lo"
  },
  {
    id: 4,
    subject: "Fizika testi",
    score: 65,
    date: "28-Avg, 11:15",
    questionsCount: 25,
    correctCount: 16,
    color: "#3B82F6",
    status: "Qoniqarli"
  }
];

export const subjectQuizQuestions = {
  "Matematika": [
    {
      id: 1,
      question: "Tenglamani yeching: 3x + 15 = 45. x ning qiymati nechaga teng?",
      options: [
        "x = 8",
        "x = 10",
        "x = 12",
        "x = 15"
      ],
      correctAnswer: 1,
      explanation: "3x = 45 - 15 => 3x = 30 => x = 10."
    },
    {
      id: 2,
      question: "Funksiyaning hosilasini toping: f(x) = x³ + 4x² - 5x + 7. f'(x) = ?",
      options: [
        "3x² + 8x - 5",
        "3x² + 4x - 5",
        "x² + 8x + 7",
        "3x³ + 8x² - 5"
      ],
      correctAnswer: 0,
      explanation: "(x³)' = 3x², (4x²)' = 8x, (-5x)' = -5. Demak f'(x) = 3x² + 8x - 5."
    },
    {
      id: 3,
      question: "To'g'ri burchakli uchburchakning katetlari 6 sm va 8 sm. Gipotenuza uzunligini toping.",
      options: [
        "9 sm",
        "12 sm",
        "10 sm",
        "14 sm"
      ],
      correctAnswer: 2,
      explanation: "Pifagor teoremasi: c² = 6² + 8² = 36 + 64 = 100 => c = 10 sm."
    },
    {
      id: 4,
      question: "Trigonometrik tenglik: sin²(α) + cos²(α) nimaga teng?",
      options: [
        "1",
        "0",
        "tan(α)",
        "2"
      ],
      correctAnswer: 0,
      explanation: "Asosiy trigonometrik ayniyatga ko'ra sin²(α) + cos²(α) = 1."
    },
    {
      id: 5,
      question: "Logarifmik ifoda: log₂(32) ning qiymati nechaga teng?",
      options: [
        "4",
        "5",
        "6",
        "8"
      ],
      correctAnswer: 1,
      explanation: "2⁵ = 32 bo'lgani uchun log₂(32) = 5."
    }
  ],

  "Ingliz tili": [
    {
      id: 1,
      question: "Qaysi gapda Present Perfect zamoni to'g'ri ishlatilgan?",
      options: [
        "I have lived in Tashkent since 2020.",
        "I am live in Tashkent since 2020.",
        "I lived in Tashkent since 2020 yesterday.",
        "I was lived in Tashkent since 2020."
      ],
      correctAnswer: 0,
      explanation: "'have lived' + 'since 2020' Present Perfect zamonining klassik namunasidir."
    },
    {
      id: 2,
      question: "Choose the correct synonym for the word 'ENORMOUS':",
      options: [
        "Tiny",
        "Ordinary",
        "Huge",
        "Weak"
      ],
      correctAnswer: 2,
      explanation: "'Enormous' o'zbek tilida 'juda katta', 'ulkan' degani, sinonimi 'Huge'."
    },
    {
      id: 3,
      question: "Fill in the blank: If I ____ enough money, I would buy a new laptop.",
      options: [
        "have",
        "had",
        "will have",
        "would have"
      ],
      correctAnswer: 1,
      explanation: "Second Conditional tuzilishi: If + Past Simple (had), would + Infinitive."
    },
    {
      id: 4,
      question: "Select the correct passive voice sentence for: 'She wrote a brilliant essay.'",
      options: [
        "A brilliant essay was written by her.",
        "A brilliant essay is written by her.",
        "A brilliant essay has written by her.",
        "A brilliant essay had written by her."
      ],
      correctAnswer: 0,
      explanation: "Past Simple Passive: Object + was/were + V3 (was written)."
    },
    {
      id: 5,
      question: "What is the antonym (opposite meaning) of 'ANCIENT'?",
      options: [
        "Old",
        "Historic",
        "Traditional",
        "Modern"
      ],
      correctAnswer: 3,
      explanation: "'Ancient' (qadimiy) so'zining qarama-qarshi ma'nosi 'Modern' (zamonaviy)."
    }
  ],

  "Informatika": [
    {
      id: 1,
      question: "Python dasturlash tilida ro'yxatga (list) yangi element qo'shish uchun qaysi metod ishlatiladi?",
      options: [
        "list.add()",
        "list.append()",
        "list.insert_end()",
        "list.push()"
      ],
      correctAnswer: 1,
      explanation: "Python'da ro'yxat oxiriga element qo'shish uchun append() me'yorda ishlatiladi."
    },
    {
      id: 2,
      question: "Python'da o'zgarmas (immutable) ma'lumotlar turini ko'rsating:",
      options: [
        "List (ro'yxat)",
        "Dictionary (lug'at)",
        "Tuple (kortej)",
        "Set (to'plam)"
      ],
      correctAnswer: 2,
      explanation: "Tuple (kortej) yaratilgandan so'ng uning elementlarini o'zgartirib bo'lmaydi."
    },
    {
      id: 3,
      question: "HTML faylida eng katta va asosiy sarlavha tegini ko'rsating:",
      options: [
        "<h1>",
        "<h6>",
        "<head>",
        "<header>"
      ],
      correctAnswer: 0,
      explanation: "<h1> tegi eng yuqori darajali va yirik sarlavha hisoblanadi."
    },
    {
      id: 4,
      question: "Binary Search (Ikkilik qidirish) algoritmining vaqt murakkabligi (Time complexity) nimaga teng?",
      options: [
        "O(n²)",
        "O(log n)",
        "O(n)",
        "O(1)"
      ],
      correctAnswer: 1,
      explanation: "Tartiblangan massivda Binary Search har bir qadamda izlash sohasi teng ikkiga bo'lingani uchun O(log n) beradi."
    },
    {
      id: 5,
      question: "SQL ma'lumotlar bazasida jadvaldagi barcha yozuvlarni olish uchun qaysi buyruq ishlatiladi?",
      options: [
        "SELECT * FROM table_name",
        "FETCH ALL table_name",
        "GET table_name",
        "SHOW ALL FROM table_name"
      ],
      correctAnswer: 0,
      explanation: "SELECT * FROM jadval_nomi barcha ustun va satrlarni qaytaradi."
    }
  ],

  "Fizika": [
    {
      id: 1,
      question: "Nyutonning ikkinchi qonuni formulasini ko'rsating:",
      options: [
        "F = m / a",
        "E = mc²",
        "F = m * a",
        "P = F * v"
      ],
      correctAnswer: 2,
      explanation: "Kuch (F) massaning (m) tezlanishga (a) ko'paytmasiga teng (F = m*a)."
    },
    {
      id: 2,
      question: "Yorug'likning vakuumdagi tarqalish tezligi taxminan nechaga teng?",
      options: [
        "300,000 m/s",
        "300,000 km/s",
        "150,000 km/s",
        "3,000 km/s"
      ],
      correctAnswer: 1,
      explanation: "Vakuumda yorug'lik tezligi c ≈ 300,000 km/s (3×10⁸ m/s)."
    },
    {
      id: 3,
      question: "Jismning massasi 5 kg va tezlanishi 2 m/s² bo'lsa, unga ta'sir etayotgan kuch teng:",
      options: [
        "10 N",
        "2.5 N",
        "7 N",
        "20 N"
      ],
      correctAnswer: 0,
      explanation: "F = m * a = 5 kg * 2 m/s² = 10 Nyuton."
    },
    {
      id: 4,
      question: "Om qonunining zanjir qismi uchun formulasini tanlang:",
      options: [
        "I = U * R",
        "I = U / R",
        "R = I / U",
        "U = I² * R"
      ],
      correctAnswer: 1,
      explanation: "Tok kuchi (I) kuchlanishga (U) to'g'ri, qarshilikka (R) teskari mutanosib (I = U/R)."
    },
    {
      id: 5,
      question: "Jismning kinetik energiyasi formulasi qaysi javobda to'g'ri berilgan?",
      options: [
        "E = m * g * h",
        "E = m * v",
        "E = (m * v²) / 2",
        "E = F * s"
      ],
      correctAnswer: 2,
      explanation: "Kinetik energiya Ek = (m * v²) / 2."
    }
  ],

  "Kimyo": [
    {
      id: 1,
      question: "Suvning kimyoviy formulasi qaysi javobda to'g'ri berilgan?",
      options: [
        "CO2",
        "H2O",
        "NaCl",
        "O2"
      ],
      correctAnswer: 1,
      explanation: "H2O ikkita vodorod va bitta kislorod atomidan tashkil topgan."
    },
    {
      id: 2,
      question: "D.I. Mendeleyev davriy sistemasidagi eng birinchi element qaysi?",
      options: [
        "Vodorod (H)",
        "Geliy (He)",
        "Litiy (Li)",
        "Kislorod (O)"
      ],
      correctAnswer: 0,
      explanation: "Vodorod (H) tartib raqami 1 bo'lib, eng birinchi va yengil elementdir."
    },
    {
      id: 3,
      question: "Osh tuzining kimyoviy formulasini ko'rsating:",
      options: [
        "KCl",
        "CaCO3",
        "NaCl",
        "NaOH"
      ],
      correctAnswer: 2,
      explanation: "Natriy xlorid (NaCl) kundalik hayotda osh tuzi sifatida ishlatiladi."
    },
    {
      id: 4,
      question: "Neytral eritmaning (masalan toza suvning) pH ko'rsatkichi nechaga teng?",
      options: [
        "0",
        "7",
        "14",
        "5"
      ],
      correctAnswer: 1,
      explanation: "pH = 7 neytral muhitni anglatadi. pH < 7 kislotali, pH > 7 ishqoriy."
    },
    {
      id: 5,
      question: "Er sharining havo atmosferasi tarkibida eng ko'p ulushni (taxminan 78%) tashkil etuvchi gaz:",
      options: [
        "Kislorod (O2)",
        "Karbonat angidrid (CO2)",
        "Argon (Ar)",
        "Azot (N2)"
      ],
      correctAnswer: 3,
      explanation: "Havo hajmining 78% qismini Azot (N2) gazi tashkil qiladi."
    }
  ]
};

// Fallback for default
export const sampleQuizQuestions = subjectQuizQuestions["Matematika"];

export const remindersData = [
  {
    id: 1,
    title: "Matematika yakuniy testi",
    date: "Ertaga, 14:00",
    subject: "Matematika",
    type: "Exam",
    urgent: true
  },
  {
    id: 2,
    title: "Python topshirig'ini yuklash",
    date: "3-Sentabr, 23:59",
    subject: "Informatika",
    type: "Homework",
    urgent: false
  },
  {
    id: 3,
    title: "English Speaking Club online uchrashuvi",
    date: "5-Sentabr, 18:00",
    subject: "Ingliz tili",
    type: "Live Event",
    urgent: false
  }
];

export const notificationsData = [
  {
    id: 1,
    title: "Yangi test natijasi tayyor",
    description: "Matematika testidan 92% to'pladingiz! Ajoyib natija.",
    time: "10 daqiqa oldin",
    unread: true
  },
  {
    id: 2,
    title: "Ketma-ketlik rekordi!",
    description: "Siz ketma-ket 12 kun davomida ta'lim olmoqdasiz 🔥",
    time: "2 soat oldin",
    unread: true
  },
  {
    id: 3,
    title: "Yangi dars qo'shildi",
    description: "Informatika kursiga 'Python Rekursiya' darsi qo'shildi.",
    time: "Kecha",
    unread: false
  }
];

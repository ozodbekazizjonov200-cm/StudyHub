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

export const sampleQuizQuestions = [
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
    question: "Python dasturlash tilida ro'yxatga (list) yangi element qo'shish uchun qaysi metod ishlatiladi?",
    options: [
      "list.add()",
      "list.append()",
      "list.insert_end()",
      "list.push()"
    ],
    correctAnswer: 1,
    explanation: "Python'da ro'yxat oxiriga element qo'shish uchun append() metodi qo me'yorda ishlatiladi."
  },
  {
    id: 3,
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
    id: 4,
    question: "Nyutonning ikkinchi qonuni formulasini ko'rsating:",
    options: [
      "F = m / a",
      "E = mc²",
      "F = m * a",
      "P = F * v"
    ],
    correctAnswer: 2,
    explanation: "Kuch (F) massaning (m) tezlanishga (a) ko'paytmasiga teng."
  },
  {
    id: 5,
    question: "Suvning kimyoviy formulasi qaysi javobda to'g'ri berilgan?",
    options: [
      "CO2",
      "H2O",
      "NaCl",
      "O2"
    ],
    correctAnswer: 1,
    explanation: "H2O ikkita vodorod va bitta kislorod atomidan tashkil topgan."
  }
];

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

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Course {
  id: string;
  name: string;
  classes: string;
  subjects: string[];
  mediums: ('Hindi Medium' | 'English Medium')[];
  boards: string[];
  description: string;
  gradient: string;
}

export interface Board {
  name: string;
  code: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  parentName: string;
  studentName: string;
  studentClass: string;
  feedback: string;
  rating: number;
}

export interface LocationDetail {
    title: string;
    address: string;
    phone: string[];
    gmapLink?: string;
    isHeadOffice: boolean;
}

export interface SuccessStory {
  id: string;
  studentName: string;
  percentage: string;
  board: string;
  classYear: string;
  achievement: string;
  gender: 'boy' | 'girl';
}

export const INST_DETAILS = {
  name: 'Yogya Coaching Classes',
  tagline: 'Build Your Future With Quality Education',
  subtitle: 'Kanpur\'s absolute finest platform for personal attention, academic excellence, and overall development from Class 1st to 12th.',
  phoneNumbers: ['6388562019', '8001784236', '8554972417'],
  whatsappMsg: 'Hello, I want to enquire about admission and scheduling the 5-day free trial class at Yogya Coaching Classes.',
  emails: ['info@yogyacoaching.com', 'yogyaclasseskanpur@gmail.com']
};

export const COURSES_DATA: Course[] = [
  {
    id: 'primary-wing',
    name: 'Primary Foundation Wing',
    classes: 'Classes 1st to 5th',
    subjects: ['Mathematics', 'Science (EVS)', 'English Grammar & Literature', 'Hindi', 'Social Studies'],
    mediums: ['Hindi Medium', 'English Medium'],
    boards: ['CBSE', 'UP Board', 'ICSE'],
    description: 'Nurturing basic cognitive ability, strong handwriting, logical calculations, and primary concepts in a supportive learning environment.',
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'middle-wing',
    name: 'Middle School Wing',
    classes: 'Classes 6th to 8th',
    subjects: ['Mathematics', 'Sanskrit', 'Science (Physics, Chemistry, Biology)', 'English Grammar', 'Hindi Grammar', 'Social Sciences (History, Civics, Geography)'],
    mediums: ['Hindi Medium', 'English Medium'],
    boards: ['CBSE', 'UP Board', 'ICSE / CISCE'],
    description: 'Transitioning from primary to advanced level topics. Conceptual depth in Science and Math with special interactive exercises for confidence-building.',
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'secondary-wing',
    name: 'Secondary Board Prep Wing',
    classes: 'Classes 9th & 10th',
    subjects: ['Mathematics (Standard & Basic)', 'Science', 'English Grammar & Lit', 'Social Science', 'Hindi (Sanchayan & Sparsh)'],
    mediums: ['Hindi Medium', 'English Medium'],
    boards: ['CBSE', 'UP Board', 'ICSE'],
    description: 'Rigorous training with special focus on concepts, paper-solving speeds, proper answer writing, and building an rock-solid analytical base for board exams.',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'senior-secondary-wing',
    name: 'Senior Secondary Board Wing',
    classes: 'Classes 11th & 12th',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English Core', 'Hindi (Core/Elective)'],
    mediums: ['Hindi Medium', 'English Medium'],
    boards: ['CBSE', 'UP Board', 'ISC / CISCE'],
    description: 'Specialist subjects domain knowledge mapping according to board guidelines. Rigorous test series and thorough doubt clearance for high percentage scores.',
    gradient: 'from-blue-700 to-teal-600'
  }
];

export const BOARDS_DATA: Board[] = [
  {
    name: 'UP Board',
    code: 'UPMSP',
    description: 'Uttar Pradesh Madhyamik Shiksha Parishad integration. We provide specialized notes, past papers, and expert Hindi and English medium coaching strictly aligned to UPMSP guidelines.',
    features: ['Syllabus mapping on NCERT pattern', 'Excellent answer sheet writing tips', 'Hindi & English medium detailed explanation', 'Special prep for Class 10 and 12 Board exams']
  },
  {
    name: 'CBSE Board',
    code: 'CBSE',
    description: 'Central Board of Secondary Education. Rigorous conceptual worksheets, NCERT-exemplar text coverage, continuous and comprehensive evaluation style weekly tests.',
    features: ['NCERT + Exemplar coverage', 'Case-study based question practice', 'ASL (Assessment of Speaking & Listening) guidance', 'Regular mock board question testing']
  },
  {
    name: 'CISCE / ICSE / ISC Board',
    code: 'CISCE',
    description: 'Council for the Indian School Certificate Examinations format support. In-depth English grammar worksheets, strong analytical literature coverage, and conceptual science questions coaching.',
    features: ['High-level English vocabulary and phrasing lessons', 'Selina / Concise book solution reviews', 'Critical analysis patterns coaching', 'Comprehensive scientific practical concept guidance']
  }
];

export const KEY_FEATURES: Feature[] = [
  {
    id: 'free-trial',
    title: '5 Days Free Trial Classes',
    description: 'Experience the quality of our lectures completely risk-free before making any decision. Attend full lectures, check the classrooms, and meet our teachers.',
    iconName: 'GraduationCap'
  },
  {
    id: 'weekly-tests',
    title: 'Weekly Test Schedule',
    description: 'Regular chapter-wise examinations every weekend to assess knowledge retention, time-management, and pinpoint precise areas for growth.',
    iconName: 'ClipboardCheck'
  },
  {
    id: 'parent-feedback',
    title: 'Regular Parent Feedback',
    description: 'We host interactive monthly updates and immediate digital alerts on attendance and marks to ensure parents are always deeply integrated in the child’s progress.',
    iconName: 'Users'
  },
  {
    id: 'syllabus-completion',
    title: 'Timely Completion of Syllabus',
    description: 'Paced carefully to complete the full syllabus months ahead of exams, allowing ample weeks for multiple full-length revisions and full mock board runs.',
    iconName: 'CalendarRange'
  },
  {
    id: 'result-oriented',
    title: 'Result Oriented Coaching',
    description: 'Our strategies are entirely structured around performance maximization, standard templates of toppers, and scientific memorization tricks.',
    iconName: 'TrendingUp'
  },
  {
    id: 'positive-env',
    title: 'Positive Learning Environment',
    description: 'Cozy, clean, and inspiring classrooms with absolute safety. Highly encouraging environment that converts study pressure into dynamic visual curiosity.',
    iconName: 'Sparkles'
  },
  {
    id: 'talent-dev',
    title: 'Talent & Skills Development',
    description: 'We look beyond standard textbook memorization. We teach cognitive speed tricks, mental math, speed calculation, and general awareness concepts.',
    iconName: 'Award'
  },
  {
    id: 'english-speaking',
    title: 'English Speaking Improvement',
    description: 'Special emphasis on communicative English, speech rhythm, self-introductions, correct pronunciations, and stage confidence.',
    iconName: 'MessageSquareShare'
  },
  {
    id: 'personal-attention',
    title: 'Personal Attention to Every Class',
    description: 'Extremely controlled batch sizes. We ensure no student is left behind, resolving individual doubts post-class or in special personal sessions.',
    iconName: 'HeartHandshake'
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Conceptual Lectures',
    desc: 'Each topic is started from visual real-world examples in a simplistic bilingual layout, ensuring perfect understanding.'
  },
  {
    step: '02',
    title: 'Rigorous Daily Practice (DPP)',
    desc: 'Short, daily assignments distributed right after the class containing targeted practice problems to solidify theoretical principles.'
  },
  {
    step: '03',
    title: 'Saturday Assessment Series',
    desc: 'Structured board-pattern and local school-pattern written tests of 50/100 marks to check writing stamina and accuracy.'
  },
  {
    step: '04',
    title: 'Doubt and Revision Circles',
    desc: 'Personal standard operating hour dedicated entirely to personal questions, clearing old syllabus backlogs, and solving student queries.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    parentName: 'Mr. Rajesh Verma',
    studentName: 'Ayush Verma',
    studentClass: 'Class 10th (CBSE) - Scored 94.6%',
    feedback: 'Yogya Coaching Classes changed the learning attitude of my son Ayush. The level of personal attention given by the teachers is unmatched. The weekly mock tests made him completely confident for his board exams. We highly recommend Yogya to all parents in Kanpur.',
    rating: 5
  },
  {
    id: 't2',
    parentName: 'Mrs. Suman Shukla',
    studentName: 'Pooja Shukla',
    studentClass: 'Class 12th (UP Board) - Scored 91.2%',
    feedback: 'Both Hindi and English medium explanations are incredibly thorough here. My daughter Pooja felt highly encouraged by the friendly atmosphere and the teacher\'s explanations. Specially, science subjects are simplified to a practical level.',
    rating: 5
  },
  {
    id: 't3',
    parentName: 'Dr. Alok Srivastava',
    studentName: 'Rishabh Srivastava',
    studentClass: 'Class 8th (ICSE) - Rank 1 in School',
    feedback: "The weekly syllabus reviews and regular parent-teacher interactive cycles are premium features of Yogya Classes. They share comprehensive analytics of tests. My son's English speaking confidence has improved significantly!",
    rating: 5
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 's1',
    studentName: 'Prashant Dwivedi',
    percentage: '96.2%',
    board: 'UP Board (Hindi Medium)',
    classYear: 'Class 12th - Topper',
    achievement: 'District Merit Holder - Outstanding Physics & Chemistry scores',
    gender: 'boy'
  },
  {
    id: 's2',
    studentName: 'Sneha Mishra',
    percentage: '95.8%',
    board: 'CBSE (English Medium)',
    classYear: 'Class 10th - Elite Club',
    achievement: 'Perfect 100/100 in Mathematics, outstanding overall score',
    gender: 'girl'
  },
  {
    id: 's3',
    studentName: 'Karan Malhotra',
    percentage: '94.4%',
    board: 'ICSE (English Medium)',
    classYear: 'Class 10th - ICSE Topper',
    achievement: 'Ranked top in school, high-vocabulary English scores',
    gender: 'boy'
  },
  {
    id: 's4',
    studentName: 'Anjali Gupta',
    percentage: '92.6%',
    board: 'UP Board (English Medium)',
    classYear: 'Class 12th - Board Star',
    achievement: 'Scored 99/100 in Biology under special syllabus coaching',
    gender: 'girl'
  }
];

export const LOCATIONS: LocationDetail[] = [
  {
    title: 'Head Office (Barra-5 Branch)',
    address: 'ML-146, Barra-5, Kanpur, Uttar Pradesh (Near Barra-5 Water Tank)',
    phone: ['6388562019', '8001784236'],
    gmapLink: 'https://maps.google.com/?q=ML-146+Barra+5+Kanpur',
    isHeadOffice: true
  },
  {
    title: 'Branch Office (Gujaini Branch)',
    address: 'B-51, Gujaini, Kanpur, Uttar Pradesh (Near Gujaini Main Market)',
    phone: ['8554972417', '6388562019'],
    gmapLink: 'https://maps.google.com/?q=B-51+Gujaini+Kanpur',
    isHeadOffice: false
  }
];

/** Resume data for Lindsay Gullon, sourced from Resume.pdf */

export const personal = {
  name: 'Lindsay Gullon',
  fullName: 'Lindsay Iona Gullon',
  title: 'Computer Science Student & Software Developer',
  email: 'lindsaygullon@gmail.com',
  phone: '909-488-9853',
  location: 'San Diego, CA',
  linkedin: 'https://linkedin.com/in/lindsay-gullon-04591b322',
  studentId: 'A18-29-9462',
  summary:
    'A second-year Computer Science student at UC San Diego with a perfect 4.0 GPA. Enthusiastic and hard-working, eager to apply problem-solving and teamwork skills in a real-world software development environment.',
} as const;

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  highlights: string[];
}

export const education: EducationEntry[] = [
  {
    institution: 'University of California, San Diego',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Sep 2024 – Jun 2028 (expected)',
    gpa: '4.0 / 4.0',
    highlights: [
      'Seventh College',
      'Cumulative GPA: 4.000',
      'Provost Honors – Winter 2025, Spring 2025, Fall 2025',
      'Relevant courses: Data Structures, Discrete Math, Systems Programming, Computer Organization, Algorithms, Machine Learning, Software Engineering, Linear Algebra, Probability & Statistics',
    ],
  },
  {
    institution: 'Redlands East Valley High School',
    degree: 'High School Diploma',
    period: 'Graduated June 2024',
    gpa: '4.72 / 4.0',
    highlights: [
      'Valedictorian — Class rank 1 of 439',
      'Seal of Biliteracy (English & Mandarin)',
      'AP Scholar with Distinction',
      'AP Computer Science A & AP Computer Science Principles',
      '88.00 AP / transfer credits accepted by UCSD',
    ],
  },
];

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['Java', 'Python', 'C', 'C++', 'C#', 'JavaScript', 'HTML', 'CSS', 'SQL', 'MATLAB', 'ARM Assembly'],
  },
  {
    category: 'Tools & Libraries',
    icon: '🛠️',
    skills: ['VS Code', 'Git', 'GitHub', 'GitHub Actions', 'JUnit', 'JavaFX', 'Vim', 'WSL', 'Linux', 'Pandas', 'NumPy'],
  },
  {
    category: 'Concepts & Practices',
    icon: '🧠',
    skills: ['OOP', 'Data Structures', 'Backend Development', 'Full-Stack Development', 'Agile / Scrum', 'CI/CD', 'Computer Vision'],
  },
  {
    category: 'Languages',
    icon: '🌐',
    skills: ['English (Native)', 'Mandarin Chinese (Bilingual)'],
  },
];

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'A.I. Computer Vision Lab Research Member',
    company: 'ESB.AI Lab | AvoVision Project',
    period: 'Oct 2024 – Jun 2025',
    bullets: [
      'Applied computer vision methods to analyze avocado tree canopy and branching patterns.',
      'Wrote code to calculate the confusion matrix to find the mAP of datasets.',
      'Developed teamwork and communication skills in a research-oriented lab environment.',
    ],
  },
];

export interface ProjectEntry {
  title: string;
  context: string;
  description: string;
  url: string;
  tags: string[];
  period: string;
}

export const projects: ProjectEntry[] = [
  {
    title: 'Blink!',
    context: 'Tritonware Game Jam',
    description:
      'A 2D top-down pixel art escape room game created during Tritonware (a 2-week game jam). You play as a robot trying to escape your creator\'s lab, navigating puzzles and obstacles.',
    url: 'https://lindsaygullon.itch.io/blink',
    tags: ['Game Dev', 'Pixel Art', '2D', 'Escape Room', 'Team Project'],
    period: 'Oct 2025 – Present',
  },
  {
    title: 'Mopey Mage Maggins',
    context: 'TeenyTinyware 24-Hour Jam',
    description:
      'A two-button co-op game created during TeenyTinyware (a 24-hour jam). Using only the left and right Shift keys, you and a friend play as a mage and a dragon shooting fireballs at each other.',
    url: 'https://lindsaygullon.itch.io/mopey-mage-maggins',
    tags: ['Game Dev', '2-Button', 'Co-op', '24h Jam', 'Minimalist'],
    period: 'Oct 2025 – Present',
  },
  {
    title: '100 Days of Code: Python',
    context: 'Udemy',
    description:
      'The Complete Python Pro Bootcamp — intensive self-directed study covering Python from fundamentals through advanced topics including automation, data science, and web development.',
    url: '#',
    tags: ['Python', 'Self-Study', 'Automation', 'Data Science'],
    period: 'Jul 2025 – Present',
  },
  {
    title: 'The Web Developer Bootcamp 2025',
    context: 'Udemy',
    description:
      'Comprehensive full-stack web development course covering HTML, CSS, JavaScript, Node.js, Express, and MongoDB to build production-ready web applications.',
    url: '#',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Full-Stack'],
    period: 'Jul 2025 – Present',
  },
];

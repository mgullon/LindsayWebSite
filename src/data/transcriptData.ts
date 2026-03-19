/** Transcript data for Lindsay Gullon, sourced from OfficialTranscript.pdf */

export interface Course {
  code: string;
  title: string;
  units: number;
  grade: string;
  gradePoints: number;
}

export interface Term {
  name: string;
  year: string;
  courses: Course[];
  termGPA: number | null;
  termCredits: number;
  honors?: string;
  inProgress?: boolean;
}

export const terms: Term[] = [
  {
    name: 'Summer Session II',
    year: '2024',
    courses: [
      { code: 'CSE 8A', title: 'Intro to Programming 1', units: 4, grade: 'A+', gradePoints: 16 },
      { code: 'ENG 15', title: 'Engineer Your Success', units: 2, grade: 'P', gradePoints: 0 },
    ],
    termGPA: 4.0,
    termCredits: 4,
  },
  {
    name: 'Fall Quarter',
    year: '2024',
    courses: [
      { code: 'CSE 11', title: 'Accel. Intro to Programming', units: 4, grade: 'A', gradePoints: 16 },
      { code: 'CSE 89', title: 'Intro to CSE Seminar', units: 2, grade: 'P', gradePoints: 0 },
      { code: 'MATH 20A', title: 'Calculus for Science & Engineering', units: 2, grade: 'A', gradePoints: 8 },
      { code: 'VIS 41', title: 'Design Communication', units: 4, grade: 'A+', gradePoints: 16 },
    ],
    termGPA: 4.0,
    termCredits: 10,
  },
  {
    name: 'Winter Quarter',
    year: '2025',
    courses: [
      { code: 'CSE 12', title: 'Basic Data Structures & O-O Design', units: 4, grade: 'A+', gradePoints: 16 },
      { code: 'CSE 20', title: 'Discrete Mathematics', units: 4, grade: 'A+', gradePoints: 16 },
      { code: 'CSE 29', title: 'Systems Programming & Software Tools', units: 4, grade: 'A+', gradePoints: 16 },
      { code: 'MATH 18', title: 'Linear Algebra', units: 4, grade: 'A+', gradePoints: 16 },
    ],
    termGPA: 4.0,
    termCredits: 16,
    honors: 'Provost Honors',
  },
  {
    name: 'Spring Quarter',
    year: '2025',
    courses: [
      { code: 'CSE 21', title: 'Math for Algorithm & Systems Analysis', units: 4, grade: 'A', gradePoints: 16 },
      { code: 'CSE 30', title: 'Computer Organization', units: 4, grade: 'A', gradePoints: 16 },
      { code: 'MATH 20B', title: 'Calculus for Science & Engineering', units: 4, grade: 'A+', gradePoints: 16 },
      { code: 'SYN 1', title: 'Communicating in a Changing Planet', units: 4, grade: 'A', gradePoints: 16 },
    ],
    termGPA: 4.0,
    termCredits: 16,
    honors: 'Provost Honors',
  },
  {
    name: 'Fall Quarter',
    year: '2025',
    courses: [
      { code: 'CSE 100', title: 'Advanced Data Structures', units: 4, grade: 'A', gradePoints: 16 },
      { code: 'CSE 101', title: 'Design & Analysis of Algorithms', units: 4, grade: 'A+', gradePoints: 16 },
      { code: 'CSE 103', title: 'Practical Intro to Probability & Stats', units: 4, grade: 'A', gradePoints: 16 },
      { code: 'MATH 20C', title: 'Calculus & Analytic Geometry', units: 4, grade: 'A', gradePoints: 16 },
    ],
    termGPA: 4.0,
    termCredits: 16,
    honors: 'Provost Honors',
  },
  {
    name: 'Winter Quarter',
    year: '2026',
    courses: [
      { code: 'CHIN 20BM', title: 'Second-Year Chinese/Mandarin II', units: 4, grade: 'IP', gradePoints: 0 },
      { code: 'CSE 110', title: 'Software Engineering', units: 4, grade: 'IP', gradePoints: 0 },
      { code: 'CSE 151A', title: 'Machine Learning: Learning Algorithms', units: 4, grade: 'IP', gradePoints: 0 },
      { code: 'EDS 124AR', title: 'Teaching Computation & Digital World', units: 4, grade: 'IP', gradePoints: 0 },
      { code: 'SYN 2', title: 'Inquiring in a Changing Planet', units: 4, grade: 'IP', gradePoints: 0 },
    ],
    termGPA: null,
    termCredits: 0,
    inProgress: true,
  },
];

export const cumulativeSummary = {
  letterGradeCreditsAttempted: 62,
  letterGradeCreditsCompleted: 62,
  totalCreditsCompleted: 150,
  gpaCredits: 58,
  gradePoints: 232,
  gpa: 4.0,
} as const;

// Initial sample data for the admin dashboard
export const initialStudents = [
  {
    id: "S001",
    name: "Amina Khan",
    class: "10-A",
    email: "amina@example.com",
  },
  {
    id: "S002",
    name: "Rohit Sharma",
    class: "11-B",
    email: "rohit@example.com",
  },
  {
    id: "S003",
    name: "Sara Ali",
    class: "12-C",
    email: "sara@example.com",
  },
];

export const initialResults = [
  { exam: "Midterm 2025", passed: 120, total: 150, avg: 73 },
  { exam: "Term 1 2024", passed: 110, total: 150, avg: 68 },
  { exam: "Finals 2024", passed: 130, total: 150, avg: 77 },
];

export const initialBooks = [
  {
    id: "B001",
    title: "Physics Fundamentals",
    author: "Halliday",
    borrowed: false,
  },
  {
    id: "B002",
    title: "Intro to Algorithms",
    author: "Cormen",
    borrowed: true,
  },
  {
    id: "B003",
    title: "World History",
    author: "Grant",
    borrowed: false,
  },
];

export const initialUsers = [
  {
    id: "U001",
    name: "Admin One",
    email: "admin1@edu.com",
    role: "admin",
  },
  {
    id: "U002",
    name: "Teacher Two",
    email: "t2@edu.com",
    role: "teacher",
  },
];

// Utility function to generate a new student ID
export const generateStudentId = () => {
  return `S${String(Math.floor(Math.random() * 900) + 100)}`;
};

// Utility function to create a new student
export const createNewStudent = (id) => ({
  id,
  name: "New Student",
  class: "10-A",
  email: `${id.toLowerCase()}@example.com`,
});

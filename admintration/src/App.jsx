import React, { useState, useMemo, useEffect } from "react";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Card from "./components/common/Card";
import DashboardView from "./components/views/DashboardView";
import StudentTable from "./components/features/StudentTable";
import ExamResults from "./components/features/ExamResults";
import LibraryTable from "./components/features/LibraryTable";
import UserTable from "./components/features/UserTable";
import {
  initialStudents,
  initialResults,
  initialBooks,
  initialUsers,
  generateStudentId,
  createNewStudent,
} from "./data/sampleData";

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [query, setQuery] = useState("");

  // State management with initial data from sampleData
  const [students, setStudents] = useState(initialStudents);
  const [results, setResults] = useState(initialResults);
  const [books, setBooks] = useState(initialBooks);
  const [users, setUsers] = useState(initialUsers);

  // Derived filtered students by query
  const filteredStudents = useMemo(() => {
    if (!query) return students;
    return students.filter((s) =>
      [s.name, s.email, s.id, s.class]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [students, query]);

  // CRUD functions
  const addStudent = () => {
    const id = generateStudentId();
    setStudents((prev) => [createNewStudent(id), ...prev]);
    setActive("students");
  };

  const editStudent = (student) => {
    const name = prompt("Edit name", student.name) || student.name;
    setStudents((prev) =>
      prev.map((s) => (s.id === student.id ? { ...s, name } : s))
    );
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const borrowBook = (id) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, borrowed: true } : book))
    );
  };

  const returnBook = (id) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...book, borrowed: false } : book))
    );
  };

  const toggleRole = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, role: user.role === "admin" ? "teacher" : "admin" }
          : user
      )
    );
  };

  // Metrics calculation
  const metrics = useMemo(
    () => ({
      totalStudents: students.length,
      booksAvailable: books.filter((book) => !book.borrowed).length,
      totalUsers: users.length,
      recentExams: results.length,
    }),
    [students, books, users, results]
  );

  // Keyboard shortcut for adding student
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "n") addStudent();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Render active section based on navigation
  const renderActiveSection = () => {
    switch (active) {
      case "dashboard":
        return (
          <DashboardView
            results={results}
            books={books}
            borrowBook={borrowBook}
            returnBook={returnBook}
            students={students}
            onEdit={editStudent}
            onDelete={deleteStudent}
          />
        );
      case "students":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Student Management</h2>
              <div className="text-sm text-gray-500">
                Total: {students.length}
              </div>
            </div>
            <StudentTable
              students={filteredStudents}
              onEdit={editStudent}
              onDelete={deleteStudent}
            />
          </div>
        );
      case "exams":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Exam Results</h2>
            <ExamResults results={results} />
          </div>
        );
      case "library":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Library</h2>
            <LibraryTable
              books={books}
              borrowBook={borrowBook}
              returnBook={returnBook}
            />
          </div>
        );
      case "users":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">User Management</h2>
            <UserTable users={users} toggleRole={toggleRole} />
          </div>
        );
      case "settings":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Settings</h2>
            <p className="text-gray-600">
              Theme presets are available in source as GRADIENTS constants.
              Apply them to the layout wrapper or specific cards.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F5F5F5] text-black">
      <Sidebar active={active} setActive={setActive} />

      <main className="flex-1 p-6">
        <Topbar query={query} setQuery={setQuery} onAdd={addStudent} />

        {/* Metrics Cards */}
        <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card title="Students" value={metrics.totalStudents}>
            <div className="text-xs text-gray-500">Active</div>
          </Card>
          <Card title="Books Available" value={metrics.booksAvailable}>
            <div className="text-xs text-gray-500">Library</div>
          </Card>
          <Card title="Users" value={metrics.totalUsers}>
            <div className="text-xs text-gray-500">Admins & Teachers</div>
          </Card>
        </section>

        {/* Main Content Area */}
        <section className="mt-6">{renderActiveSection()}</section>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} EduAdmin • Built with React + Tailwind
        </footer>
      </main>
    </div>
  );
}

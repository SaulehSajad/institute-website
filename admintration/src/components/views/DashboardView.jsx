import React from "react";
import ExamResults from "../features/ExamResults";
import LibraryTable from "../features/LibraryTable";
import StudentTable from "../features/StudentTable";

const DashboardView = ({
  results,
  books,
  borrowBook,
  returnBook,
  students,
  onEdit,
  onDelete,
}) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-4 rounded-2xl bg-gradient-to-r from-white to-gray-50 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-semibold">Overview</h3>
        <p className="text-sm text-gray-600 mt-2">
          Quick snapshot of your institute activities.
        </p>
        <div className="mt-4">
          <ExamResults results={results} />
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white/60 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-semibold">Library Activity</h3>
        <div className="mt-3">
          <LibraryTable
            books={books}
            borrowBook={borrowBook}
            returnBook={returnBook}
          />
        </div>
      </div>
    </div>

    <div className="p-4 rounded-2xl bg-white/60 border border-gray-100 shadow-sm">
      <h3 className="text-lg font-semibold">Recent Students</h3>
      <div className="mt-3">
        <StudentTable
          students={students.slice(0, 5)}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </div>
  </div>
);

export default DashboardView;

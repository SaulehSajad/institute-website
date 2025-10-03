import React from "react";

const LibraryTable = ({ books, borrowBook, returnBook }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Library Catalog</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {books.map((b) => (
        <div
          key={b.id}
          className="p-3 rounded-xl bg-white/70 border border-gray-100 shadow-sm flex justify-between items-center"
        >
          <div>
            <div className="font-medium">{b.title}</div>
            <div className="text-xs text-gray-500">{b.author}</div>
          </div>
          <div className="flex gap-2">
            {b.borrowed ? (
              <button
                onClick={() => returnBook(b.id)}
                className="px-3 py-1 rounded bg-yellow-50"
              >
                Return
              </button>
            ) : (
              <button
                onClick={() => borrowBook(b.id)}
                className="px-3 py-1 rounded bg-black text-white"
              >
                Borrow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LibraryTable;

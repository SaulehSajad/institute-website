import React from "react";
import Card from "../common/Card";

const ExamResults = ({ results }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Recent Exam Results</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {results.map((r) => (
        <Card key={r.exam} title={r.exam} value={`${r.passed}/${r.total}`}>
          <div className="text-xs text-gray-500">Avg: {r.avg}%</div>
        </Card>
      ))}
    </div>
  </div>
);

export default ExamResults;

'use client';

export default function TaskStats({
  total,
  completed,
  active,
  onClearCompleted,
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm text-gray-600">
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Active: {active}</p>
      </div>

      <button
        onClick={onClearCompleted}
        className="border rounded px-3 py-1 text-sm hover:bg-gray-100"
      >
        Clear completed
      </button>
    </div>
  );
}
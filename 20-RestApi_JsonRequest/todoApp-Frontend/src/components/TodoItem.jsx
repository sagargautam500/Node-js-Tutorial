import React, { useContext } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { ItemContext } from '../store/ContextItems';

function TodoItem() {
  const {
    todoName,
    todoDate,
    handleDeleteButton,
    handleMarkComplete,
    isCompleted,
    Id,
  } = useContext(ItemContext);

  return (
    <div
      className={`grid grid-cols-4 items-center gap-4 p-4 mb-4 rounded-xl shadow-sm ${
        isCompleted ? 'bg-gray-100' : 'bg-white'
      } border border-gray-200 w-full`}
    >
      {/* Checkbox */}
      <div className="flex justify-center">
        <input
          type="checkbox"
          className="h-5 w-5 text-green-600"
          checked={isCompleted}
          onChange={() => handleMarkComplete(Id)}
        />
      </div>

      {/* Task */}
      <div className="truncate text-base">
        <span
          className={`${
            isCompleted ? 'text-gray-400 italic line-through' : 'text-gray-800'
          }`}
        >
          {todoName}
        </span>
      </div>

      {/* Date */}
      <div className="text-sm text-gray-500">
        <span
          className={`${
            isCompleted ? 'text-gray-400 italic line-through' : 'text-gray-600'
          }`}
        >
          {new Date(todoDate).toLocaleDateString()}
        </span>
      </div>

      {/* Delete Button */}
      <div className="flex justify-center">
        <button
          onClick={() => handleDeleteButton(Id)}
          className="text-red-500 hover:text-red-700"
        >
          <MdDeleteForever size={24} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

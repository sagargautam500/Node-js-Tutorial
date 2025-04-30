import React, { useContext } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { ItemContext } from '../store/ContextItems';

function TodoItem() {
  const { todoName, todoDate, handleDeleteButton, handleMarkComplete, isCompleted, Id } = useContext(ItemContext);

  return (
    <div
      className={`flex items-center justify-between p-4 mb-4 rounded-xl shadow-md ${
        isCompleted ? 'bg-gray-100' : 'bg-white'
      } border border-gray-200`}
    >
      <div className="flex items-center space-x-4 w-full">
        {/* Checkbox for marking as completed */}
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-green-600 focus:ring-2 focus:ring-green-300"
          checked={isCompleted}
          // disabled={isCompleted}
          onChange={() => handleMarkComplete(Id)}
          aria-label={`Mark ${todoName} as completed`}
        />

        {/* Task description */}
        <div className="flex flex-col space-y-1 w-full">
          <p
            className={`text-lg ${isCompleted ? 'text-gray-400 italic line-through' : 'text-gray-800'}`}
          >
            {todoName}
          </p>
          <p
            className={`text-sm ${isCompleted ? 'text-gray-400 italic line-through' : 'text-gray-500'}`}
          >
            {todoDate}
          </p>
        </div>
      </div>

      {/* Delete button */}
      <button
        onClick={() => handleDeleteButton(Id)}
        className="text-red-500 hover:text-red-700"
      >
        <MdDeleteForever size={24} />
      </button>
    </div>
  );
}

export default TodoItem;

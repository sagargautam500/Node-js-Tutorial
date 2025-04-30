import React, { useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { ContextItem } from "../store/ContextItems";

function AddTodo() {
  const { handleAddButton, text, date } = useContext(ContextItem);

  return (
    <form
      onSubmit={handleAddButton}
      className="max-w-2xl mx-auto mt-10 flex flex-col sm:flex-row items-center gap-4 px-4"
    >
      {/* Task Input */}
      <input
        ref={text}
        type="text"
        required
        className="w-full p-4 text-gray-800 bg-gray-50 border border-gray-300 rounded-full shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        placeholder="Add a task..."
      />

      {/* Date Input */}
      <input
        ref={date}
        type="date"
        required
        className="w-full sm:w-48 p-4 bg-gray-50 border border-gray-300 rounded-full shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-md transition"
      >
        <IoMdAddCircle className="text-2xl" />
      </button>
    </form>
  );
}

export default AddTodo;

import React, { useContext } from 'react';
import { ContextItem, ItemContext } from '../store/ContextItems';
import TodoItem from './TodoItem';

const TodoItems = () => {
  const { listItems, handleDeleteButton, handleMarkComplete } = useContext(ContextItem);

  const incompleteItems = listItems.filter(item => !item.Completed);
  const completedItems = listItems.filter(item => item.Completed);

  return (
    <div className="mt-6 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto p-6 bg-gray-50 shadow-xl rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">My Todo List</h2>

      {/* Incomplete tasks */}
      <ul className="space-y-4">
        {incompleteItems.map(item => (
          <ItemContext.Provider
            value={{
              Id: item.Id,
              todoName: item.Name,
              todoDate: item.Date,
              isCompleted: item.Completed,
              handleMarkComplete,
              handleDeleteButton
            }}
            key={item.Id}
          >
            <TodoItem />
          </ItemContext.Provider>
        ))}
      </ul>

      {/* Completed tasks */}
      {completedItems.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-1 border-gray-300">Completed Todos</h3>
          <ul className="space-y-4">
            {completedItems.map(item => (
              <ItemContext.Provider
                value={{
                  Id: item.Id,
                  todoName: item.Name,
                  todoDate: item.Date,
                  isCompleted: item.Completed,
                  handleMarkComplete,
                  handleDeleteButton
                }}
                key={item.Id}
              >
                <TodoItem />
              </ItemContext.Provider>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoItems;

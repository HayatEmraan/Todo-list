import React from "react";

const TodoList = ({
  todoListData,
  handleDelete,
  handleComplete,
  handleEdit,
}) => {
  return (
    <div>
      {todoListData.map((todo, index) => (
        <div
          key={index}
          className="shadow-lg p-3 mb-2 bg-[#fff4e6] rounded-md flex justify-between flex-wrap"
        >
          <p
            className={`${
              todo.isComplete && "line-through"
            } text-3xl font-Cinzel`}
          >
            {index + 1}. {todo.data}
          </p>
          <div className="space-x-2">
            <button
              onClick={() => handleEdit(todo)}
              className={`p-2 rounded-md ${
                todo.isComplete ? "bg-gray-400" : "bg-orange-300"
              }`}
              disabled={todo.isComplete}
            >
              Edit
            </button>
            <button
              className={`p-2 rounded-md ${
                todo.isComplete ? "bg-purple-300" : "bg-orange-300"
              }`}
              onClick={() => handleComplete(todo.id)}
              disabled={todo.isComplete}
            >
              {todo.isComplete ? "Completed" : "Complete"}
            </button>
            <button
              className="bg-orange-300 p-2 rounded-md"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

import React from "react";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todoListData, setTodoList] = React.useState([
    {
      data: "Complete the research paper - WithIn (Tomorrow)",
      id: 0,
      isComplete: false,
    },
    {
      data: "Organize a birthday party - With Family",
      id: 1,
      isComplete: false,
    },
    {
      data: "Plan a home renovation project - Done",
      id: 2,
      isComplete: true,
    },
  ]);
  const [editing, setEditing] = React.useState(null);
  const inputFunc = (e) => {
    e.preventDefault();
    const middle = e.target.todoField.value;
    if (editing) {
      todoListData[editing.id].data = middle;
      setEditing(null);
    } else {
      todoListData.push({
        data: middle,
        id: todoListData.length,
        isComplete: false,
      });
    }
    setTodoList([...todoListData]);
    e.target.reset();
  };
  const handleEdit = (item) => {
    setEditing(item);
  };
  const handleDelete = (id) => {
    const deleteAlert = confirm("Are you sure you want to delete this todo?");
    if (deleteAlert) {
      const deleteUpdate = todoListData.filter((todo) => todo.id !== id);
      setTodoList(deleteUpdate);
      setEditing(null);
    }
  };
  const handleComplete = (id) => {
    todoListData.find((todo) => todo.id === id).isComplete = true;
    setTodoList([...todoListData]);
    setEditing(null);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-[10vh] mx-2">
        <h1 className="text-3xl font-bold font-Cinzel text-center mb-8">
          Todo List - Management
        </h1>
        <div className="shadow-lg p-8 bg-[#fff4e6] rounded-md mb-12">
          <Input inputFunc={inputFunc} editing={editing} />
        </div>
        {todoListData.length !== 0 && (
          <div className="shadow-lg p-8 bg-[#aaa59f] rounded-md">
            <TodoList
              todoListData={todoListData}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

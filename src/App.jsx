import React from "react";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todoListData, setTodoList] = React.useState([]);
  const inputFunc = (e) => {
    e.preventDefault();
    const middle = e.target.todoField.value;
    todoListData.push({
      data: middle,
      id: todoListData.length,
      isComplete: false,
    });
    setTodoList([...todoListData]);
  };
  const handleDelete = (id) => {
    const deleteAlert = confirm("Are you sure you want to delete this todo?");
    if (deleteAlert) {
      const deleteUpdate = todoListData.filter((todo) => todo.id !== id);
      setTodoList(deleteUpdate);
    }
  };
  const handleComplete = (id) => {
    todoListData.find((todo) => todo.id === id).isComplete = true;
    setTodoList([...todoListData]);
  };
  console.log(todoListData);
  return (
    <div className="container mx-auto">
      <div className="mt-[10vh] mx-2">
        <h1 className="text-3xl font-bold font-Cinzel text-center mb-8">
          Todo List - Management
        </h1>
        <div className="shadow-lg p-8 bg-[#fff4e6] rounded-md mb-12">
          <Input inputFunc={inputFunc} />
        </div>
        {todoListData.length !== 0 && (
          <div className="shadow-lg p-8 bg-[#aaa59f] rounded-md">
            <TodoList
              todoListData={todoListData}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

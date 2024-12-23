import React, { useState, useRef } from 'react';

export default function Todo() {
  const [todolist, setTodolist] = useState([]);
  const inputRef = useRef(null); // Use ref for the input field

  const handleSave = (e) => {
    e.preventDefault();
    const toname = inputRef.current.value.trim();

    if (!toname) {
      alert("ToDo Name Cannot Be Empty");
      return;
    }

    if (!todolist.includes(toname)) {
      const finalTodolist = [...todolist, toname];
      setTodolist(finalTodolist);
      inputRef.current.value = ''; // Clear the input field
    } else {
      alert("ToDo Name Already Exists");
    }
  };

  const list = todolist.map((value, i) => (
    <ToDoListItems
      value={value}
      key={i}
      index={i}
      todolist={todolist}
      setTodolist={setTodolist}
    />
  ));

  return (
    <div className="todoMain">
      <h1 className="text-2xl font-bold mb-4 ">ToDo List</h1>
      <form onSubmit={handleSave} className="mb-2">
        <input
          type="text"
          ref={inputRef} // Attach ref to the input field
          className="px-2 py-1 border border-gray-400 rounded mr-5 text-[black]"
          placeholder="Add a task"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          onClick={(e) => e.stopPropagation()}
        >
          Add
        </button>
      </form>
      <div className="w-[285px] m-auto">
        <ul className="m-0 p-0 list-none">{list}</ul>
      </div>
    </div>
  );
}

function ToDoListItems({ value, index, todolist, setTodolist }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const deleteRow = () => {
    const finalData = todolist.filter((_, i) => i !== index);
    setTodolist(finalData);
  };

  const toggleStatus = () => {
    setIsCompleted((prev) => !prev);
  };

  return (
    <li
      onClick={toggleStatus}
      className={`p-[5px] h-[30px] text-black mb-[10px] relative text-left bg-[#9CDE9F] rounded-[5px] ${
        isCompleted ? 'line-through text-gray-500' : ''
      }`}
    >
      {index + 1}. {value}{' '}
      <span
        onClick={(e) => {
          e.stopPropagation(); // Prevent `toggleStatus` when clicking delete
          deleteRow();
        }}
        className="absolute right-5 text-[20px] mt-[-5px] text-red-700 cursor-pointer"
      >
        &times;
      </span>
    </li>
  );
}

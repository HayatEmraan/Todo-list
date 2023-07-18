import React from "react";

const Input = ({inputFunc}) => {
  return (
    <>
      <h1 className="text-3xl font-bold font-Cinzel text-center mb-8">
        Your Personal Todo List - Explore
      </h1>
      <form className="flex gap-4 mb-8" onSubmit={inputFunc}>
        <input
          type="text"
          name="todoField"
          placeholder="Start typing ..."
          className="w-full p-2 rounded-md focus:outline-orange-300"
        />
        <button type="submit" className="bg-orange-300 p-2 rounded-md">
          Submit
        </button>
      </form>
    </>
  );
};

export default Input;

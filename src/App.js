import React, { useState } from "react";
import ItemList from "./ItemList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [item, setItem] = useState([]);

  const addTodo = (event) => {
    setTodo(event.target.value);
  };

  const addItem = () => {
    setItem((oldItem) => {
      return [...oldItem, todo];
    });
    setTodo("");
  };

  const deleteItems = (id) => {
    console.log("delete");
    setItem((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="w-full h-[100vh] flex flex-row justify-center items-center text-xl text-center bg-green-400">
        <div className="w-1/4 h-[80vh] bg-white shadow-lg rounded-2xl">
          <h1 className="bg-white bg-transparent pt-1.5 pl-0.5 py-0 mb-2.5 shadow-md">
            ToDo list
          </h1>
          <input
            className="text-center h-7 top-2.5 border-green-950 bg-transparent text-xl font-medium w-3/5 border-b-2 outline-none"
            type="text"
            placeholder="Add a Todo"
            onChange={addTodo}
          />
          <button
            className="py-1	px-3.5 rounded-3xl bg-green-600 decoration-green-950 border-none outline-none ml-2.5 shadow-xl"
            onClick={addItem}
          >
            Add
          </button>

          <ol className="mt-7">
            {item.map((itemval, index) => {
              return (
                <ItemList
                  text={itemval}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

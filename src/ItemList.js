import React from "react";

const ItemList = (props) => {
  return (
    <>
      <div className="flex flex-row justify-left items-baseline">
        <button
          className="flex justify-center items-center rounded-3xl bg-green-300 py-1 px-1.5 mt-0 mr-3.5 mb-3.5 ml-5"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Romove
        </button>
        <li className="pl-0	text-left text-xl min-h-[40%] flex items-center decoration-green-700 capitalize">
          {props.text}
        </li>
      </div>
    </>
  );
};

export default ItemList;

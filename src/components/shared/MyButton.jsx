import React from "react";

export default function MyButton(props) {
  return (
    <button
      className={`px-3 py-1 text-md rounded-xl ${props.styles}`}
      {...props}
    >
      {props.title}
    </button>
  );
}

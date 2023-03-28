import React, { useRef, useState } from "react";
import MyButton from "../shared/MyButton";

export default function AddNote({ handleSaveNote }) {
  const textarea = useRef(null);
  const [remain, setRemain] = useState(200);

  const handleSave = () => {
    if (textarea.current.value) {
      handleSaveNote(textarea.current.value);
      textarea.current.value = "";
      setRemain(200)
    }
  };
  const handleRemain = (e) => {
    if (remain > 0) {
      setRemain(200 - textarea.current.value.length);
    }
  };
  return (
    <li className="p-4 col-span-12 sm:col-span-6 lg:col-span-4 bg-teal-300 dark:bg-purple-600 dark:text-white rounded-xl flex flex-col justify-between gap-6">
      <textarea
        onChange={handleRemain}
        ref={textarea}
        className="bg-transparent font-semibold placeholder:text-gray-500  dark:placeholder:text-gray-300 text-xl focus:outline-none target:outline-none resize-none"
        placeholder="Type to add an note..."
        rows="6"
        maxLength={200}
      />
      <div className="flex justify-between">
        <span className="text-black">{remain} remaining</span>
        <MyButton
          onClick={handleSave}
          title="Save"
          styles={
            "transition font-semibold bg-gray-300 hover:text-gray-300 hover:bg-black dark:bg-transparent dark:text-black dark:hover:bg-black dark:hover:text-purple-600"
          }
        />
      </div>
    </li>
  );
}

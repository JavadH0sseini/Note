import React, { useRef, useState } from "react";
import MyButton from "../shared/MyButton";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function CardNotes({ note, handleDeleteNote }) {
  const cardRef = useRef([]);
  return (
    <li
      ref={cardRef}
      className="p-4 col-span-12 sm:col-span-6 lg:col-span-4 bg-yellow-200 dark:bg-sky-500 dark:text-white rounded-xl flex flex-col justify-between gap-44"
      id={note.id}
    >
      <p className="text-xl font-semibold">{note.content}</p>

      <div className="flex justify-between">
        <span className="text-black">{note.date}</span>
        <TrashIcon
          onClick={() => handleDeleteNote(note.id)}
          title="Delete"
          className="transition hover:scale-110 dark:text-black w-7 cursor-pointer active:scale-90"
        />
      </div>
    </li>
  );
}

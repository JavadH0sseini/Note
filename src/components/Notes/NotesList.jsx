import React, { Fragment } from "react";
import AddNote from "./AddNote";
import CardNotes from "./CardNotes";

export default function NotesList({ notes, handleSaveNote, handleDeleteNote }) {
  return (
    <ul
      className="grid grid-cols-12 container mx-auto my-5 gap-5 p-4"
      id="notesList"
    >
      {notes.map((item, index) => (
        <Fragment key={`note-${index}`}>
          <CardNotes note={item} handleDeleteNote={handleDeleteNote} />
        </Fragment>
      ))}
      <AddNote handleSaveNote={handleSaveNote} />
    </ul>
  );
}

import React, { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import NotesList from "./components/Notes/NotesList";
import Search from "./components/Search";
export default function Notes() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      date: "15/4/2021",
      content: "This is my first note!",
    },
    {
      id: nanoid(),
      date: "21/4/2021",
      content: "This is my second note!",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNote = (value) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      date: date.toLocaleDateString(),
      content: value,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deletNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note)=> note.content.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))}
        handleSaveNote={addNote}
        handleDeleteNote={deletNote}
      />
    </div>
  );
}

import React, { useState } from "react";
import MyButton from "./shared/MyButton";

export default function Header() {
  const [theme, setTheme] = useState('dark')
  const handleTheme = ()=>{
    document.documentElement.classList.toggle(theme)
  }
  return (
    <header className="container py-6 flex justify-between mx-auto dark:text-white">
      <h1 className="font-bold text-3xl">Notes</h1>
      <MyButton onClick={handleTheme} title={"Toggle Mode"} styles="bg-gray-200 hover:bg-gray-300 dark:bg-purple-700 dark:hover:bg-purple-800" />
    </header>
  );
}

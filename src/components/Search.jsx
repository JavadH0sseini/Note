import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ handleSearchNote }) {
  const searchHandle = (e) => {
    handleSearchNote(e.target.value)
  };

  return (
    <div className="container mx-auto mt-2 relative flex items-center">
      <MagnifyingGlassIcon className="h-5 w-5 absolute ml-3 pointer-events-none" />
      <input
        onInput={searchHandle}
        type="text"
        className="w-full bg-gray-200 rounded-xl py-2 px-3  focus:outline-none focus:border-none pl-10"
        placeholder="type to search..."
      />
    </div>
  );
}

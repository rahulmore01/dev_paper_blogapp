import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  //   const handleSearch = () => {
  //     onSearch(searchText);
  //   };

  //   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //     if (event.key === "Enter") {
  //       handleSearch();
  //     }
  //   };

  return (
    <div>
      <BiSearch className="w-7 h-7 text-slate-400" />
    </div>
  );
}

import React from "react";

const Header = ({ onPublish }) => {
  return (
    <header className="bg-gray-200 py-4 fixed top-0 w-full backdrop-blur-sm">
      <div className="container mx-auto flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onPublish}
        >
          Publish
        </button>
      </div>
    </header>
  );
};

export default Header;

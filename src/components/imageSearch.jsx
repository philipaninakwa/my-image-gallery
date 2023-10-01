import { React, useState } from "react";
import logo from "../assets/pixss-logo.svg";

export const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="container flex items-center justify-between w-2/3 mx-auto my-8">
      <img src={logo} alt="" />
      <form onSubmit={onSubmit}>
        <div className="border-b-2 py-1 border-red-600">
          <input
            type="text"
            placeholder="Search Image..."
            className="outline-none rounded text-sm text-red-600 font-bold p-2 mr-2"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="text-sm font-semibold rounded border border-red-600 bg-red-600 text-white p-2 hover:bg-red-800 hover:border-red-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

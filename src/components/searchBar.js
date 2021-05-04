import React from "react";

function SearchBar(props) {
  const { searchTodo } = props;
  return (
    <input
      className="Input"
      placeholder={props.title}
      onChange={(e) => {
        searchTodo(e.target.value);
      }}
    />
  );
}

export default SearchBar;

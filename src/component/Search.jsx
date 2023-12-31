import React, { useRef } from "react";
import { fetchSearchCocktails } from "../Features/CocktailSlice";
import { useDispatch } from "react-redux";
const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useRef();

  const handleChange = () => {
    const searchParams = searchValue.current.value;
    dispatch(fetchSearchCocktails(searchParams));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="search-container">
      <div className="search-content">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="search cocktails........."
            className="search-input"
            ref={searchValue}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import { CocktailList, Search } from "../component";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-search">
        <Search />
      </div>
      <div className="home-list">
        <CocktailList />
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "../Features/CocktailSlice";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const CocktailList = () => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          glass: strGlass,
          info: strAlcoholic,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    return (
      <div className="loading">
        <Loader />
      </div>
    );
  }

  if (!cocktails) {
    return (
      <h3 className="no-cocktail">
        No cocktail match your searching parameter{" "}
      </h3>
    );
  }

  return (
    <div className="list-cocktail-container">
      <div className="cocktail-list-container">
        {modifiedCocktail.map((item) => {
          const { id, name, glass, info, image } = item;
          return (
            <div key={id} className="list-container">
              <div className="list-container-top">
                <img src={image} alt={name} className="cocktail-img" />
              </div>
              <div className="list-container-middle">
                <h3>{name}</h3>
                <h3>{glass}</h3>
              </div>
              <div className="list-container-bottom">
                <p>{info}</p>
              </div>
              <div className="list-container-detail">
                <Link to={`/cockdetail/${id}`}>View Details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailList;

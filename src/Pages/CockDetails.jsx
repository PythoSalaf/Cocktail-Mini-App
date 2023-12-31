import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleCocktail } from "../Features/CocktailSlice";
import { useParams, Link } from "react-router-dom";
import { Loader } from "../component";

const CockDetails = () => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  console.log("this modified", modifiedCocktail);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("neww", cocktail);

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (cocktail) {
      console.log("Logging", cocktail);
      const newCocktails = cocktail?.map((item) => {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strGlass,
          strAlcoholic,
          strCategory,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          glass: strGlass,
          info: strAlcoholic,
          category: strCategory,
          instruction: strInstructions,
          ingredients: [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ],
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [id, cocktail]);

  if (loading) {
    return (
      <div className="loading">
        <Loader />
      </div>
    );
  }

  return (
    <div className="single-cocktail-container">
      <div className="single-cocktail-left">
        <div className="cocktail-left-top">
          <Link to="/" className="about-cocktail">
            More Cocktails
          </Link>
          <h3 className="about-secrete">
            Secrete your parents never told you about cocktails
          </h3>
        </div>
        {modifiedCocktail?.map((item) => {
          const {
            id,
            name,
            glass,
            info,
            image,
            category,
            instruction,
            ingredients,
          } = item;
          return (
            <div key={id} className="cocktail-items-container">
              <div className="cocktail-details">
                <div className="details-left">
                  <img src={image} alt={name} className="single-coctail-img" />
                </div>
                <div className="details-right">
                  <div className="details-right-content">
                    <div className="detail-name">
                      <h2>name</h2>
                      <h2>{name}</h2>
                    </div>
                    <div className="detail-name">
                      <h2>glass</h2>
                      <h2>{glass}</h2>
                    </div>
                    <div className="detail-name">
                      <h2>info</h2>
                      <h2>{info}</h2>
                    </div>
                    <div className="detail-name">
                      <h2>category</h2>
                      <h2>{category}</h2>
                    </div>
                    <div className="instruction-name">
                      <p className="instruction">{instruction}</p>
                    </div>
                    <h4 className="ingredient-title">ingredients</h4>
                    <div className="instruction-name">
                      {ingredients.map((item, index) => (
                        <span key={index}>
                          <p className="ingredients">
                            {" "}
                            {item}
                            {index < ingredients.length - 2 && ", "}
                          </p>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CockDetails;

import { configureStore } from "@reduxjs/toolkit";
import CocktailReducer from "../Features/CocktailSlice";

export default configureStore({
  reducer: {
    app: CocktailReducer,
  },
});

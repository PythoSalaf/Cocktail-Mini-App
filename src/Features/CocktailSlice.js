import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  "cocktail/fetchcocktails",
  async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    );
    const data = response.json();
    return data;
  }
);
export const fetchSingleCocktail = createAsyncThunk(
  "cocktail/fetchSingleCocktail",
  async (id) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = response.json();
    console.log(data);
    return data;
  }
);

export const fetchSearchCocktails = createAsyncThunk(
  "cocktail/fetchSearchCocktails",
  async (searchParams) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchParams}`
    );
    const data = response.json();
    return data;
  }
);

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cocktails = payload.drinks;
      })
      .addCase(fetchCocktails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchSingleCocktail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleCocktail.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cocktail = payload.drinks;
      })
      .addCase(fetchSingleCocktail.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchSearchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchCocktails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cocktails = payload.drinks;
      })
      .addCase(fetchSearchCocktails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export default cocktailSlice.reducer;

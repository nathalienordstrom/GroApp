import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  food: {
    accessToken: null,
    foodId: 0,
    name: null,
    rating: 0,
    timeStamp: null,
  },
};

export const food = createSlice({
  name: "food",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      console.log(`Access Token: ${accessToken}`);
      state.login.accessToken = accessToken;
    },
    setFoodId: (state, action) => {
      const { foodId } = action.payload;
      console.log(`User Id: ${foodId}`);
      state.login.foodId = foodId;
    },
    setName: (state, action) => {
      const { name } = action.payload;
      state.login.name = name;
  },
    setRating: (state, action) => {
      const { rating } = action.payload;
      console.log(`Status Message: ${rating}`);
      state.login.rating = rating;
    },
    setTimeStamp: (state, action) => {
        const { rating } = action.payload;
        console.log(`Status Message: ${timeStamp}`);
        state.login.timeStamp = timeStamp;
      },
      
  },
});


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foods: {
    accessToken: null,
    foodId: 0,
    name: null,
    rating: 0,
    timeStamp: null,
    usersId: null,
  },
};

export const food = createSlice({
  name: "food",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      console.log(`Access Token: ${accessToken}`);
      state.foods.accessToken = accessToken;
    },
    setUserId: (state, action) => {
      const { userId } = action.payload;
      console.log(`Access Token: ${userId}`);
      state.foods.userId = userId;
    }, 

    setFoodId: (state, action) => {
      const { foodId } = action.payload;
      console.log(`User Id: ${foodId}`);
      state.foods.foodId = foodId;
    },
    setName: (state, action) => {
      const { name } = action.payload;
      state.foods.name = name;
  },
    setRating: (state, action) => {
      const { rating } = action.payload;
      console.log(`Status Message: ${rating}`);
      state.foods.rating = rating;
    },
    setTimeStamp: (state, action) => {
        const { rating } = action.payload;
        console.log(`Status Message: ${timeStamp}`);
        state.foods.timeStamp = timeStamp;
      },
      
  },
});


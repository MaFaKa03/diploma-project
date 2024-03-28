import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducers from "./cardSlicer";
import reducersCart from "./cartSlicer";

// const rootReducer = combineReducers({
//   card: reducers,
//   cart: reducersCart,
// });

export const store = configureStore({
  reducer: {
    card: reducers,
    cart: reducersCart,
  },
});
// export const store = configureStore(rootReducer);

import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    subTotal: 0,
    grandTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      // if (state.cart.length === 0) {
      //   state.cart.push(action.payload);
      // } else {
      //   state.cart.map((prod) =>
      //     prod.id !== action.payload.id
      //       ? prod.quantity + 1
      //       : state.cart.push(action.payload)
      //   );
      // }

      let objTemp = {
        id: 0,
        name: "",
        dicription: "",
        cost: 0,
        image: "",
        quantity: 1,
        idInCart: 0,
        sum: 0,
      };

      objTemp.id = action.payload.id;
      objTemp.name = action.payload.name;
      objTemp.dicription = action.payload.dicription;
      objTemp.cost = action.payload.cost;
      objTemp.image = action.payload.image;
      objTemp.quantity = 1;
      objTemp.idInCart = Date.now();
      objTemp.sum = action.payload.cost * objTemp.quantity;

      // if (state.cart.length === 0) {
      //   state.cart.push(action.payload);
      //   state.subTotal = state.subTotal + action.payload.cost;
      // } else {
      //   for (let index = 0; index < state.cart.length; index++) {
      //     if (state.cart[index].id === action.payload.id) {
      //       console.log("товар добавлен уже");
      //       state.subTotal = state.subTotal + action.payload.cost;
      //     } else {
      //       state.cart.push(action.payload);
      //       state.subTotal = state.subTotal + action.payload.cost;
      //     }
      //   }
      // }

      state.cart.push(objTemp);
      // state.cart.push(action.payload);
      state.subTotal = state.subTotal + objTemp.sum;

      // updateTotal(action.payload.cost * action.payload.quantity);
    },
    // updateTotal: (state, action) => {
    //   state.subTotal = action.payload;
    // },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (prod) => prod.idInCart !== action.payload.idInCart
      );
      state.subTotal =
        state.subTotal - action.payload.cost * action.payload.quantity;
    },
    removeAllFromCart: (state) => {
      state.cart.splice(0, state.cart.length);
      state.subTotal = 0;
    },
    editQuantity: (state, action) => {
      let sum = 0;
      let total = state.subTotal;
      state.cart.map((prod) =>
        prod.idInCart === action.payload.idInCart
          ? ((prod.quantity = action.payload.quantity),
            (prod.sum = action.payload.quantity * prod.cost),
            (sum = prod.sum))
          : (prod.quantity = prod.quantity)
      );
      // sum = sum * action.payload.quantity;
      // state.subTotal = state.subTotal + (action.payload.quantity * action.payload.cost);
      // state.subTotal = total + sum;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  editQuantity,
  updateTotal,
} = cartSlicer.actions;
export default cartSlicer.reducer;

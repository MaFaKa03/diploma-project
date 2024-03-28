import { createSlice } from "@reduxjs/toolkit";
export const cardSlicer = createSlice({
  name: "card",
  initialState: {
    card:
    {
      // id: 1,
      // name: "ELLERY X M'O CAPSULEs",
      // dicription:
      //   "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      // cost: 52.0,
      // image: '',
    },
  },
  reducers: {
      showCard: (state, action) => {
          state.card = action.payload;
    //   state.card.id = action.payload.id;
    //   state.card.name = action.payload.name;
    //   state.card.dicription = action.payload.dicription;
    //   state.card.cost = action.payload.cost;
    //   state.card.image = action.payload.image;
    },
  },
});

export const { showCard } = cardSlicer.actions;
export default cardSlicer.reducer;

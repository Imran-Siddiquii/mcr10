import { createSlice } from "@reduxjs/toolkit";
import { inventoryData } from "../Json";

// const LocalData = localStorage.setItem("data", JSON.stringify(inventoryData));
const getLocaldata = JSON.parse(localStorage.getItem("data"));
const inventory = createSlice({
  name: "intentory-data",
  initialState: {
    data: getLocaldata,
  },
  reducers: {
    getData: (state, action) => {
    const LocalData = localStorage.setItem("data", JSON.stringify(inventoryData));
    },
    addData: (state, action) => {
      const id = state.data.length;
      state.data = [...inventoryData, { id: id + 1, ...action.payload }];
      const LocalData = localStorage.setItem(
        "data",
        JSON.stringify([...getLocaldata, { id: id + 1, ...action.payload }])
      );
    },
  },
});

export const { getData, addData } = inventory.actions;

export default inventory.reducer;

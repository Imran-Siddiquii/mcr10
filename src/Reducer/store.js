import { configureStore } from "@reduxjs/toolkit";
import inventory from "./InventorySlice";
const store=configureStore({
    reducer:{
        dataList:inventory
    }
})
export default store


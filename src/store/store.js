import {configureStore } from "@reduxjs/toolkit";
// import { Value } from "sass";
import listSlice from "./listSlice";
import articleSlice from "./articleSlice";
import sortSlice from "./sortSlice";
const store=configureStore({
    reducer:{
        // key:Value
        list:listSlice,
        article:articleSlice,
        sort:sortSlice
    }
})

export default store
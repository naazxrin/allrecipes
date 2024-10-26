import {configureStore} from "@reduxjs/toolkit";
import recipieSlice from "./recipieSlice";
const recipieStore = configureStore({
    reducer:{
        recipieReducer : recipieSlice
    }
})
export default recipieStore
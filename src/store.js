import { configureStore } from "@reduxjs/toolkit";
import CounterSlicer from "./component/Redux/CounterSlicer";


export const store = configureStore({
    reducer : {
        counter : CounterSlicer
    }
});


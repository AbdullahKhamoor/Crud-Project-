import {configureStore} from "@reduxjs/toolkit"
import  userReducer  from "./userSliced.jsx";

const store = configureStore({
    reducer: {
        users : userReducer ,
        cart: "asd"
    }
})

export default store;
 
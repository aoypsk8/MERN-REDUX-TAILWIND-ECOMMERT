import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./reducers/userReducer"

const rootReducer = {
    user:userReducer,
}

export default configureStore({
    reducer:rootReducer
})
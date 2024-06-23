import { configureStore } from "@reduxjs/toolkit"
import TestSlice from "./redux/TestSlice"
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"

export const store: ToolkitStore = configureStore({
    reducer: {
        TestSlice
    }
})
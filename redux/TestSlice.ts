import { Slice, createSlice } from "@reduxjs/toolkit"

type TInitialState = {
    test: string
}

type TRootState = TInitialState & {
    TestSlice: typeof TestSlice
}
const initialState: TInitialState = {
    test: '',
}

export const TestSlice: Slice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setTest: (state, action) => {
            const user = action.payload
            state.test = user.test
        }
    }
})

export const { setTest } = TestSlice.actions
export default TestSlice.reducer
export const getTest = (state: TRootState) => state.TestSlice
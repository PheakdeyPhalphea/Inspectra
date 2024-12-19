import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userState = {
  email: string;
};

const initialState: userState = {
  email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        }
    }
});
export const { setUserEmail } = userSlice.actions;
export default userSlice.reducer;
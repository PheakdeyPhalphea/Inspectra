import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userState = {
  uuid: string;
};

const initialState: userState = {
  uuid: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserUUID(state, action: PayloadAction<string>) {
            state.uuid = action.payload;
        }
    }
});
export const { setUserUUID } = userSlice.actions;
export default userSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../model/User";

export type CurrentUserState = User[];

const initialState: CurrentUserState = [];

const userSlice = createSlice( {
    name: 'current-user',
    initialState,
    reducers: {
        set: ( state, action: PayloadAction<User> ) =>
        {
            // Remove the old state. Push the new state.
            state.pop();
            state.push( action.payload );
        },
        clear: ( state ) =>
        {
            // Remove all elements from the state.
            while ( state.length > 0 )
            {
                state.pop();
            }
        }
    }
} );

export const { set, clear } = userSlice.actions;

export default userSlice.reducer;
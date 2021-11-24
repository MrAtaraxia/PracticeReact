import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";

export type UserState = User[];

const initialState: UserState = [];

const userSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {
        addUser: ( state, action: PayloadAction<User> ) =>
        {
            state.push( action.payload );
        },
        removeUser: ( state, action: PayloadAction<number> ) =>
        {
            // Remove 1 element at the index where the user id matches the payload id
            state.splice( state.findIndex( ( user => user.id === action.payload ) ), 1 );
        }
    }
} );

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../model/User";

export type UserState = User[];

const initialState: UserState = [];

const userSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {
        add: ( state, action: PayloadAction<User> ) =>
        {
            state.push( action.payload );
        },
        remove: ( state, action: PayloadAction<number> ) =>
        {
            // Remove 1 element at the index where the user id matches the payload id
            state.splice( state.findIndex( ( user => user.id === action.payload ) ), 1 );
        },
        update: ( state, action: PayloadAction<User> ) =>
        {
            // Update 1 element at the index where the User id matches the payload id
            state[state.findIndex( ( user => user.id === action.payload.id ) )] =
                action.payload;
        }
    }
} );

export const { add, remove, update } = userSlice.actions;

export default userSlice.reducer;
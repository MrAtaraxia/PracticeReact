import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Message from "../model/Message";

export type MessageState = Message[];

const initialState: MessageState = [];

const messageSlice = createSlice( {
    name: 'message',
    initialState,
    reducers: {
        add: ( state, action: PayloadAction<Message> ) =>
        {
            state.push( action.payload );
        },
        remove: ( state, action: PayloadAction<number> ) =>
        {
            // Remove 1 element at the index where the message id matches the payload id
            state.splice( state.findIndex( ( message => message.id === action.payload ) ), 1 );
        },
        update: ( state, action: PayloadAction<Message> ) =>
        {
            // Update 1 element at the index where the Message id matches the payload id
            state[state.findIndex( ( message => message.id === action.payload.id ) )] =
                action.payload;
        }
    }
} );

export const { add, remove, update } = messageSlice.actions;

export default messageSlice.reducer;
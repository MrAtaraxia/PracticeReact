import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Message from "../models/Message";

export type MessageState = Message[];

const initialState: MessageState = [];

const messageSlice = createSlice( {
    name: 'message',
    initialState,
    reducers: {
        addMessage: ( state, action: PayloadAction<Message> ) =>
        {
            state.push( action.payload );
        },
        removeMessage: ( state, action: PayloadAction<number> ) =>
        {
            // Remove 1 element at the index where the message id matches the payload id
            state.splice( state.findIndex( ( message => message.id === action.payload ) ), 1 );
        }
    }
} );

export const { addMessage, removeMessage } = messageSlice.actions;

export default messageSlice.reducer;
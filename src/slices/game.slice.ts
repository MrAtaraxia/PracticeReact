import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Game from "../models/Game";

export type GameState = Game[];

const initialState: GameState = [];

const gameSlice = createSlice( {
    name: 'game',
    initialState,
    reducers: {
        add: ( state, action: PayloadAction<Game> ) =>
        {
            state.push( action.payload );
        },
        remove: ( state, action: PayloadAction<number> ) =>
        {
            // Remove 1 element at the index where the game id matches the payload id
            state.splice( state.findIndex( ( game => game.id === action.payload ) ), 1 );
        },
        update: ( state, action: PayloadAction<Game> ) =>
        {
            // Update 1 element at the index where the game id matches the payload id
            state[state.findIndex( ( game => game.id === action.payload.id ) )] =
                action.payload;
        }
    }
} );

export const { add, remove, update } = gameSlice.actions;

export default gameSlice.reducer;
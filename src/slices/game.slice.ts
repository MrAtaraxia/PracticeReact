import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Game from "../models/Game";

export type GameState = Game[];

const initialState: GameState = [];

const gameSlice = createSlice( {
    name: 'game',
    initialState,
    reducers: {
        addGame: ( state, action: PayloadAction<Game> ) =>
        {
            state.push( action.payload );
        },
        removeGame: ( state, action: PayloadAction<number> ) =>
        {
            // Remove 1 element at the index where the game id matches the payload id
            state.splice( state.findIndex( ( game => game.id === action.payload ) ), 1 );
        }
    }
} );

export const { addGame, removeGame } = gameSlice.actions;

export default gameSlice.reducer;
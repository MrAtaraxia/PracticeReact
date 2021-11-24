import React from 'react';
import Game from '../models/Game';
import { createGame, deleteGame } from '../remote/game-api/game.api';
import { addGame, removeGame } from '../slices/game.slice';

export type GameServiceProps = {
}

const GameService: React.FC<GameServiceProps> = () => {
    const toReturn = <>GameService</>
    return(
        <>
            {toReturn}
        </>
    )
}

export const GameServiceCreate = (theGame:Game) => {
    const localGame = theGame;
    console.log("CREATE GAME SERVICE STARTED.");
    try{
        //Create game on the server.
        createGame(localGame);
        //Add game on the store.
        addGame(localGame);
    } catch(e){
        console.log(e);
    }
    console.log("CREATE GAME SERVICE ENDED.");
}

export const GameServiceDelete = (theNumber:number) => {
    const localNumber = theNumber;
    console.log("DELETE GAME SERVICE STARTED.");
    try{
        //Delete game on the server.
        deleteGame(localNumber);
        //Remove game on the store.
        removeGame(localNumber);
    } catch(e){
        console.log(e);
    }
    console.log("DELETE GAME SERVICE ENDED.");
}

export default GameService
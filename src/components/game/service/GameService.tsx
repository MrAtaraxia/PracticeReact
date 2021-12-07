import React from 'react';
import Game from '../model/Game';
import { 
    createGame as createAPI, 
    deleteGame as deleteAPI, 
    getGame    as getAPI, 
    getGames   as getAllAPI, 
    updateGame as updateAPI 
} from '../../../remote/game-api/game.api';
import { add, remove, update } from '../slices/game.slice';

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

export const GameServiceGet = async (theNumber:number) => {
    const localNumber = theNumber;
    console.log("GET GAME SERVICE STARTED.");
    try{
        //Get game on the server.
        const theGame = await getAPI(localNumber);
        //Add game on the store.
        add(theGame);
    } catch(e){
        console.log(e);
    }
    console.log("GET GAME SERVICE ENDED.");
}

export const GameServiceGetAll = async () => {
    console.log("GET ALL GAMES SERVICE STARTED.");
    try{
        //Get games on the server.
        const theGame = await getAllAPI();
        //Add games on the store.
        theGame.forEach(item => add(item));
    } catch(e){
        console.log(e);
    }
    console.log("GET ALL GAMES SERVICE ENDED.");
}

export const GameServiceCreate = async (theGame:Game) => {
    const localGame = theGame;
    console.log("CREATE GAME SERVICE STARTED.");
    try{
        //Create game on the server.
        createAPI(localGame);
        //Add game on the store.
        add(localGame);
    } catch(e){
        console.log(e);
    }
    console.log("CREATE GAME SERVICE ENDED.");
}

export const GameServiceDelete = async (theNumber:number) => {
    const localNumber = theNumber;
    console.log("DELETE GAME SERVICE STARTED.");
    try{
        //Delete game on the server.
        deleteAPI(localNumber);
        //Remove game on the store.
        remove(localNumber);
    } catch(e){
        console.log(e);
    }
    console.log("DELETE GAME SERVICE ENDED.");
}

export const GameServiceUpdate = async (theGame:Game) => {
    const localGame = theGame;
    console.log("UPDATE GAME SERVICE STARTED.");
    try{
        //Update game on the server.
        updateAPI(localGame);
        //Add game on the store.
        update(localGame);
    } catch(e){
        console.log(e);
    }
    console.log("UPDATE GAME SERVICE ENDED.");
}
export default GameService
import Game from "../../models/Game";
import gameClient from "./game.client";

export const getGame = async ( id: number ): Promise<Game> =>
{
    console.log( "Getting Game - " + id );
    const { data: game } = await gameClient.get<Game>( `/${ id }` );
    return game;
}

export const createGame = async ( theGame: Game ): Promise<Game> =>
{
    console.log( "Creating Game - " + theGame.id );
    const { data: game } = await gameClient.post<Game>( `/`, theGame );
    return game;
}

export const updateGame = async ( theGame: Game ): Promise<Game> =>
{
    console.log( "Updating Game - " + theGame.id );
    const { data: game } = await gameClient.put<Game>( `/${ theGame.id }`, theGame );
    return game;
}

export const deleteGame = async ( id: number ): Promise<number> =>
{
    console.log( "Deleting Game - " + id );
    const { data: gameNumber } = await gameClient.delete<number>( `/${ id }` );
    return gameNumber;
}
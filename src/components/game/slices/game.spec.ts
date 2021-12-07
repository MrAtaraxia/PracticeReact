import currentGame, { GameState, add, remove, update } from './game.slice';
import Game, { DefaultGame } from '../model/Game'

describe( 'game reducer', () =>
{
    const initialState: GameState = [];
    it( 'should handle initial state', () =>
    {
        expect( currentGame( undefined, { type: 'unknown' } ) ).toEqual( initialState );
    } );

    it( 'should handle add', () =>
    {
        initialState.push( DefaultGame );
        const actual = currentGame( initialState, add( DefaultGame ) );
        expect( actual[0] ).toEqual( DefaultGame );
        expect( actual[1] ).toEqual( DefaultGame );
    } );

    it( 'should handle remove', () =>
    {
        initialState.push( DefaultGame );
        let startingLength = initialState.length;
        const actual = currentGame( initialState, remove( DefaultGame.id ) );
        expect( actual.length ).toEqual( startingLength - 1 );
    } );

    it( 'should handle update', () =>
    {
        initialState.push( DefaultGame );
        let aGame: Game = {
            id: 0,
            name: 'theName'
        };
        const actual = currentGame( initialState, update( aGame ) );
        expect( actual[0].name ).toEqual( 'theName' );
    } );
} );

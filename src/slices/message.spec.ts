import currentMessage, { MessageState, add, remove, update } from './message.slice';
import Message, { DefaultMessage } from '../models/Message'

describe( 'message reducer', () =>
{
    const initialState: MessageState = [];
    it( 'should handle initial state', () =>
    {
        expect( currentMessage( undefined, { type: 'unknown' } ) ).toEqual( initialState );
    } );

    it( 'should handle add', () =>
    {
        initialState.push( DefaultMessage );
        const actual = currentMessage( initialState, add( DefaultMessage ) );
        expect( actual[0] ).toEqual( DefaultMessage );
        expect( actual[1] ).toEqual( DefaultMessage );
    } );

    it( 'should handle remove', () =>
    {
        initialState.push( DefaultMessage );
        let startingLength = initialState.length;
        const actual = currentMessage( initialState, remove( DefaultMessage.id ) );
        expect( actual.length ).toEqual( startingLength - 1 );
    } );

    it( 'should handle update', () =>
    {
        initialState.push( DefaultMessage );
        let aMessage: Message = {
            id: 0,
            fromUser: {
                id: 0,
                name: 'theName'
            },
            toUser: {
                id: 0,
                name: ''
            },
            sent: 0,
            message: ''
        };
        const actual = currentMessage( initialState, update( aMessage ) );
        expect( actual[0].fromUser.name ).toEqual( 'theName' );
    } );
} );

import currentUser, { UserState, add, remove, update } from './user.slice';
import User, { DefaultUser } from '../model/User'

describe( 'user reducer', () =>
{
    const initialState: UserState = [];
    it( 'should handle initial state', () =>
    {
        expect( currentUser( undefined, { type: 'unknown' } ) ).toEqual( initialState );
    } );

    it( 'should handle add', () =>
    {
        initialState.push( DefaultUser );
        const actual = currentUser( initialState, add( DefaultUser ) );
        expect( actual[0] ).toEqual( DefaultUser );
        expect( actual[1] ).toEqual( DefaultUser );
    } );

    it( 'should handle remove', () =>
    {
        initialState.push( DefaultUser );
        let startingLength = initialState.length;
        const actual = currentUser( initialState, remove( DefaultUser.id ) );
        expect( actual.length ).toEqual( startingLength - 1 );
    } );

    it( 'should handle update', () =>
    {
        initialState.push( DefaultUser );
        let aUser: User = {
            id: 0,
            name: 'theName'
        };
        const actual = currentUser( initialState, update( aUser ) );
        expect( actual[0].name ).toEqual( 'theName' );
    } );
} );

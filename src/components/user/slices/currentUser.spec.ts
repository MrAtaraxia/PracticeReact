import currentUser, { CurrentUserState, set, clear } from './currentUser.slice';
import { DefaultUser } from '../model/User'

describe( 'current user reducer', () =>
{
    const initialState: CurrentUserState = [];
    it( 'should handle initial state', () =>
    {
        expect( currentUser( undefined, { type: 'unknown' } ) ).toEqual( initialState );
    } );

    it( 'should handle set', () =>
    {
        const actual = currentUser( initialState, set( DefaultUser ) );
        expect( actual[0] ).toEqual( DefaultUser );
    } );

    it( 'should handle clear', () =>
    {
        const actual = currentUser( initialState, clear() );
        expect( actual.length ).toEqual( 0 );
    } );
} );

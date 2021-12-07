import currentMeeting, { MeetingState, add, remove, update } from './meeting.slice';
import Meeting, { DefaultMeeting } from '../models/Meeting'

describe( 'meeting reducer', () =>
{
    const initialState: MeetingState = [];
    it( 'should handle initial state', () =>
    {
        expect( currentMeeting( undefined, { type: 'unknown' } ) ).toEqual( initialState );
    } );

    it( 'should handle add', () =>
    {
        initialState.push( DefaultMeeting );
        const actual = currentMeeting( initialState, add( DefaultMeeting ) );
        expect( actual[0] ).toEqual( DefaultMeeting );
        expect( actual[1] ).toEqual( DefaultMeeting );
    } );

    it( 'should handle remove', () =>
    {
        initialState.push( DefaultMeeting );
        let startingLength = initialState.length;
        const actual = currentMeeting( initialState, remove( DefaultMeeting.id ) );
        expect( actual.length ).toEqual( startingLength - 1 );
    } );

    it( 'should handle update', () =>
    {
        initialState.push( DefaultMeeting );
        let aMeeting: Meeting = {
            id: 0,
            organizer: {
                id: 0,
                name: ''
            },
            attending: [],
            created: 0,
            occurring: 0,
            title: 'theName',
            message: ''
        };
        const actual = currentMeeting( initialState, update( aMeeting ) );
        expect( actual[0].title ).toEqual( 'theName' );
    } );
} );

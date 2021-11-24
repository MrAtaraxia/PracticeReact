import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Meeting from "../models/Meeting";

export type MeetingState = Meeting[];

const initialState: MeetingState = [];

const meetingSlice = createSlice( {
    name: 'meeting',
    initialState,
    reducers: {
        addMeeting: ( state, action: PayloadAction<Meeting> ) =>
        {
            state.push( action.payload );
        },
        removeMeeting: ( state, action: PayloadAction<number> ) =>
        {
            // Remove 1 element at the index where the meeting id matches the payload id
            state.splice( state.findIndex( ( meeting => meeting.id === action.payload ) ), 1 );
        }
    }
} );

export const { addMeeting, removeMeeting } = meetingSlice.actions;

export default meetingSlice.reducer;
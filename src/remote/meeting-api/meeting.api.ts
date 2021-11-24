import Meeting from "../../models/Meeting";
import meetingClient from "./meeting.client";

export const getMeeting = async ( id: number ): Promise<Meeting> =>
{
    console.log( "Getting Meeting - " + id );
    const { data: meeting } = await meetingClient.get<Meeting>( `/${ id }` );
    return meeting;
}

export const createMeeting = async ( theMeeting: Meeting ): Promise<Meeting> =>
{
    console.log( "Creating Meeting - " + theMeeting.id );
    const { data: meeting } = await meetingClient.post<Meeting>( `/`, theMeeting );
    return meeting;
}

export const updateMeeting = async ( theMeeting: Meeting ): Promise<Meeting> =>
{
    console.log( "Updating Meeting - " + theMeeting.id );
    const { data: meeting } = await meetingClient.put<Meeting>( `/${ theMeeting.id }`, theMeeting );
    return meeting;
}

export const deleteMeeting = async ( id: number ): Promise<number> =>
{
    console.log( "Deleting Meeting - " + id );
    const { data: meetingNumber } = await meetingClient.delete<number>( `/${ id }` );
    return meetingNumber;
}
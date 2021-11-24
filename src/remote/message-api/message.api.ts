import Message from "../../models/Message";
import messageClient from "./message.client";

export const getMessage = async ( id: number ): Promise<Message> =>
{
    console.log( "Getting Message - " + id );
    const { data: message } = await messageClient.get<Message>( `/${ id }` );
    return message;
}

export const createMessage = async ( theMessage: Message ): Promise<Message> =>
{
    console.log( "Creating Message - " + theMessage.id );
    const { data: message } = await messageClient.post<Message>( `/`, theMessage );
    return message;
}

export const updateMessage = async ( theMessage: Message ): Promise<Message> =>
{
    console.log( "Updating Message - " + theMessage.id );
    const { data: message } = await messageClient.put<Message>( `/${ theMessage.id }`, theMessage );
    return message;
}

export const deleteMessage = async ( id: number ): Promise<number> =>
{
    console.log( "Deleting Message - " + id );
    const { data: messageNumber } = await messageClient.delete<number>( `/${ id }` );
    return messageNumber;
}

import Message from "../../models/Message";
import messageClient from "./message.client";

export const getMessage = async ( id: number ): Promise<Message> =>
{
    console.log( id );
    const { data: message } = await messageClient.get<Message>( `/${ id }` );
    return message;
}

export const createMessage = async ( id: number ): Promise<Message> =>
{
    console.log( id );
    const { data: message } = await messageClient.post<Message>( `/` );
    return message;
}

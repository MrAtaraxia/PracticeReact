import User from "../../models/User"
import userClient from "./user.client";

export const getUser = async ( id: number ): Promise<User> =>
{
    console.log( "Getting User - " + id );
    const { data: user } = await userClient.get<User>( `/${ id }` );
    return user;
}

export const createUser = async ( theUser: User ): Promise<User> =>
{
    console.log( "Creating User - " + theUser.id );
    const { data: user } = await userClient.post<User>( `/`, theUser );
    return user;
}

export const updateUser = async ( theUser: User ): Promise<User> =>
{
    console.log( "Updating User - " + theUser.id );
    const { data: user } = await userClient.put<User>( `/${ theUser.id }`, theUser );
    return user;
}

export const deleteUser = async ( id: number ): Promise<number> =>
{
    console.log( "Deleting User - " + id );
    const { data: userNumber } = await userClient.delete<number>( `/${ id }` );
    return userNumber;
}
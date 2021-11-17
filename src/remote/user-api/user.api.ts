import User from '../../models/User';
import userClient from './user.client';

export const getUser = async ( id: string | number ): Promise<User> =>
{
    const { data: user } = await userClient.get<User>( `/${ id }` );
    return user;
}

export const postUser = async ( toSend: User ): Promise<User> =>
{
    const { data: user } = await userClient.post<User>( `/`, toSend );
    return user;
}


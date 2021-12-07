import React from 'react';

export type CurrentUserServiceProps = {
}

const UserService: React.FC<CurrentUserServiceProps> = () => {
    const toReturn = <>CurrentUserService</>
    return(
        <>
            {toReturn}
        </>
    )
}

export default UserService
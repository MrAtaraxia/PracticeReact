import React from 'react';
export type HomePageProps = {
}

const HomePage : React.FC<HomePageProps> = () => {

    const toReturn = <>Home Page!</>
    return(
        <>{toReturn}</>
    )
}

export default HomePage
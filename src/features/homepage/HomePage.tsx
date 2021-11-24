import React from 'react';
import styles from './HomePage.module.css'
export type HomePageProps = {
}

const HomePage : React.FC<HomePageProps> = () => {

    const toReturn = <div className={styles.row}>Home Page!</div>
    return(
        <>{toReturn}</>
    )
}

export default HomePage
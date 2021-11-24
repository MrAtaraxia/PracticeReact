import React from 'react';
import styles from './Home.module.css'
export type HomeProps = {
}

const HomePage : React.FC<HomeProps> = () => {

    const toReturn = <div className={styles.row}>Home Page!</div>
    return(
        <>{toReturn}</>
    )
}

export default HomePage
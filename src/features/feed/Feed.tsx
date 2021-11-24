import React from 'react';
import styles from './Feed.module.css'
export type FeedProps = {
}

const FeedPage : React.FC<FeedProps> = () => {

    const toReturn = <div className={styles.row}>Feed Page!</div>
    return(
        <>{toReturn}</>
    )
}

export default FeedPage
import React from 'react';
import styles from './Navigation.module.css'
export type NavigationProps = {
}
const Navigation: React.FC<NavigationProps> = () => {

    const toReturn = <div className={styles.row}>Navigation Page!</div>
    return(
        <>{toReturn}</>
    )
}

export default Navigation

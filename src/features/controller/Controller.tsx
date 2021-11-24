import React, { useState } from 'react';
import styles from './Controller.module.css'
export type ControllerProps = {
    children: any
}

const Controller:React.FC<ControllerProps> = ({children}:{children:any}) => {
    const [LoggedIn, setLoggedIn] = useState(false);
    const toReturn = <div className={styles.row}>Controller</div>
    return(
        <>
            {children}
            {toReturn}
        </>
    )
}

export default Controller
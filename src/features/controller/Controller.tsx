import React from 'react';
import styles from './Controller.module.css'
export type ControllerProps = {
}

const Controller: React.FC<ControllerProps> = () => {
    const toReturn = <div className={styles.row}>Controller</div>
    return(
        <>
            {toReturn}
        </>
    )
}

export default Controller
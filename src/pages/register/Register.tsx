import React from 'react';
import styles from './Register.module.css'
export type RegisterProps = {
}

const RegisterPage : React.FC<RegisterProps> = () => {

    const toReturn = <div className={styles.row}>Register Page!</div>
    return(
        <>{toReturn}</>
    )
}

export default RegisterPage
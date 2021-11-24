import React from 'react';
import styles from './Login.module.css'
export type LoginProps = {
}

const LoginPage : React.FC<LoginProps> = () => {

    const toReturn = <div className={styles.row}>Login Page!</div>
    return(
        <>{toReturn}</>
    )
}

export default LoginPage
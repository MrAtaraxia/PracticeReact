import React from 'react';
import styles from './LoginPage.module.css'
export type LoginPageProps = {
}

const LoginPage : React.FC<LoginPageProps> = () => {

    const toReturn = <div className={styles.row}>Login Page!</div>
    return(
        <>{toReturn}</>
    )
}

export default LoginPage
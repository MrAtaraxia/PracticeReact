import React from 'react';
import styles from './RegisterPage.module.css'
export type RegisterPageProps = {
}

const RegisterPage : React.FC<RegisterPageProps> = () => {

    const toReturn = <div className={styles.row}>Register Page!</div>
    return(
        <>{toReturn}</>
    )
}

export default RegisterPage
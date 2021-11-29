import React from 'react';
import styles from './Profile.module.css'
export type ProfileProps = {
}

const ProfilePage : React.FC<ProfileProps> = () => {

    const toReturn = <div className={styles.row}>Profile Page!</div>
    return(
        <>{toReturn}</>
    )
}

export default ProfilePage
import React from "react";

import styles from './Comment.module.css'

interface commentProps {
    email: string;
    body: string;
}

const Comment: React.FC<commentProps> = ({email, body}) => {
    return (
        <div className={styles.comment}>
            <h5 className={styles.email}>{email}</h5>
            <p>{body}</p>
        </div>
    );
}

export default Comment;
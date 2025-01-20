import React from 'react'

import styles from './MyButton.module.css'

interface buttonProps {
    children: React.ReactNode
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const MyButton: React.FC<buttonProps> = ({children, ...props}) => {
    return (
        <button {...props} className={styles.button}>{children}</button>
    );
}
 
export default MyButton;
import React from 'react'

import styles from './MyInput.module.css'

interface inputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}   

const MyInput: React.FC<inputProps> = ({placeholder, value, onChange}) => {
    return (
        <input 
            value={value}
            onChange={onChange}
            className={styles.input} 
            type="text" 
            placeholder={placeholder}
        />
    );
}
 
export default MyInput;
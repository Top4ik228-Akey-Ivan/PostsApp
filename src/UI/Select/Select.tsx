import React from "react";
import styles from './Select.module.css'

interface optionProps {
    value: string;
    name: string;
}

interface selectProps {
    options: optionProps[];
    defaultValue: string;
    value: string;
    onChange: (sort: string) => void
}

const MySelect: React.FC<selectProps> = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={styles.select}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map((option) => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
}
 
export default MySelect;
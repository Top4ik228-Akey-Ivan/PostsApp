import React from "react";

import styles from './Modal.module.css'

interface ModalProps{
    children: React.ReactNode;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    isModalOpen: boolean
}

const Modal: React.FC<ModalProps> = ({children, isModalOpen, setIsModalOpen}) => {

    const rootClasses = [styles.modal]
    if (isModalOpen) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ') } onClick={() => setIsModalOpen(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
 
export default Modal;
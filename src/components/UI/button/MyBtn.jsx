import React from "react";
import cls from './MyBtn.module.css'

const MyBtn = ({children, ...props}) => {
    return (
        <button {...props} className={cls.myBtn}>
            {children}
        </button>
    );
};

export default MyBtn;
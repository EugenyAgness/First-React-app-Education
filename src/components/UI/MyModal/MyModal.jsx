import React from "react";
import classes from './MyModal.module.css';

const MyModal = ({visible, setVisible, children}) => {
    
    const listClassesNamesWrapper = [classes.divWrapper];

    if (visible) 
        listClassesNamesWrapper.push(classes.active);

    return (
        <div className={listClassesNamesWrapper.join(' ')} onClick={() => setVisible(false)}>

            <div className={classes.divContent} onClick={(e) => {e.stopPropagation()}}>                
                <button className={classes.btnClose} onClick={(e) => {
                    e.preventDefault()
                    setVisible(false)}}>Close</button>
                {children}
            
            </div>

        </div>
    )
}

export default MyModal;
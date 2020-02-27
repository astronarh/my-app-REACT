import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dialog 1
                </div>
                <div className={s.dialog}>
                    Dialog 2
                </div>
                <div className={s.dialog}>
                    Dialog 3
                </div>
                <div className={s.dialog}>
                    Dialog 4
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi Hi</div>
                <div className={s.message}>Hi Hi Hi</div>
            </div>
        </div>
    )
};

export default Dialogs;
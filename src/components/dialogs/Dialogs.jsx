import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.profilePage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.profilePage.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;
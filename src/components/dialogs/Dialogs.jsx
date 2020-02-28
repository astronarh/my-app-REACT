import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
};

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'Dialog 1'} id={'1'}/>
                <DialogItem name={'Dialog 2'} id={'2'}/>
                <DialogItem name={'Dialog 3'} id={'3'}/>
                <DialogItem name={'Dialog 4'} id={'4'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hi Hi'}/>
                <Message message={'Hi Hi Hi'}/>
            </div>
        </div>
    )
};

export default Dialogs;
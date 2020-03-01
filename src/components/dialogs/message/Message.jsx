import React from "react";
import s from './../Dialogs.module.css'

const Message = (props) => {
    let newMessage = React.createRef();

    let messages = React.createRef();

    let addMessage = () => {

    };

    return <div>
        <div>
            <textarea ref={newMessage}></textarea>
        </div>
        <div>
            <button onClick={addMessage}>Send</button>
        </div>
        <div ref={messages}>
            <div className={s.dialog}>{props.message}</div>

        </div>

    </div>
};

export default Message;
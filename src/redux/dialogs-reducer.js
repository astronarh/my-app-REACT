const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dialog 1'},
        {id: 2, name: 'Dialog 2'},
        {id: 3, name: 'Dialog 3'},
        {id: 4, name: 'Dialog 4'}
    ],
    messages: [
        {id: 1, message: 'Dialog 1'},
        {id: 2, message: 'Dialog 2'},
        {id: 3, message: 'Dialog 3'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
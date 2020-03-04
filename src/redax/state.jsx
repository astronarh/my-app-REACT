const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 10},
                {id: 2, message: 'It\'s my first post', likeCount: 13}
            ],
            newPostText: 'some-new-post-text',
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { //{ type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.dialogsPage.newPostText,
                likeCount: 0
            };
            this._state.dialogsPage.posts.push(newPost);
            this._state.dialogsPage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.dialogsPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

window.state = store;
export default store;
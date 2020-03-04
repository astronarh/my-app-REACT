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
            ],
        },
        dialogsPage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 10},
                {id: 2, message: 'It\'s my first post', likeCount: 13}
            ],
            newPostText: 'some-new-post-text'
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.dialogsPage.newPostText,
                likeCount: 0
            };
            this._state.dialogsPage.posts.push(newPost);
            this._state.dialogsPage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.dialogsPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

window.state = store;
export default store;
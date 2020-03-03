let rerendetEntireTree = () => {
    console.log('State changed')
};

let state = {
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
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id:5,
        message: state.dialogsPage.newPostText,
        likeCount: 0
    };
    state.dialogsPage.posts.push(newPost);
    state.dialogsPage.newPostText = '';
    rerendetEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.dialogsPage.newPostText = newText;
    rerendetEntireTree(state);
};

export const subscribe = (observer) => {
    rerendetEntireTree = observer;
};

export default state;
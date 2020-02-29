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
        ]
    }
};

export default state;
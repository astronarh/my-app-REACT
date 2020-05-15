import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 10},
        {id: 2, message: 'It\'s my first post', likeCount: 13}
    ]
};

test('length of posts should be incremented', () => {
    //1. tests data
    let action = addPostActionCreator("some new text post");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
})

test('message of new post should be correct', () => {
    //1. tests data
    let action = addPostActionCreator("some new text post");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[2].message).toBe("some new text post");
})

test('after deleting length of message should be decrement', () => {
    //1. tests data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(1);
})
test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. tests data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
})


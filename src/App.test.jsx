import state from './redax/state';
it(() => {
    expect(state.dialogsPage.posts.contain({id: 1, name: 'Dialog 1'}))
});
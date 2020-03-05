import state from './redux/state';
it(() => {
    expect(state.dialogsPage.posts.contain({id: 1, name: 'Dialog 1'}))
});
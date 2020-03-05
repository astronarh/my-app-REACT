import state from './redux/store';
it(() => {
    expect(state.dialogsPage.posts.contain({id: 1, name: 'Dialog 1'}))
});
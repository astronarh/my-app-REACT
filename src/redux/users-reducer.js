const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP3749-CUSA10307_00-AV00000000000025/1581372970000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
        //     followed: false,
        //     fullName: 'Alex',
        //     status: 'I am a boss? yep',
        //     location: {city: 'Penza', country: 'RU'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP3749-CUSA10307_00-AV00000000000025/1581372970000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
        //     followed: true,
        //     fullName: 'Alexa',
        //     status: 'I am not a boss',
        //     location: {city: 'Moscow', country: 'RU'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP3749-CUSA10307_00-AV00000000000025/1581372970000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
        //     followed: false,
        //     fullName: 'Ury',
        //     status: 'I am not a boss? again',
        //     location: {city: 'No', country: 'NO'}
        // }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
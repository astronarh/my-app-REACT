const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Alex',
            status: 'I am a boss? yep',
            location: {city: 'Penza', country: 'RU'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Alexa',
            status: 'I am not a boss',
            location: {city: 'Moscow', country: 'RU'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Ury',
            status: 'I am not a boss? again',
            location: {city: 'No', country: 'NO'}
        }
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
            !
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;
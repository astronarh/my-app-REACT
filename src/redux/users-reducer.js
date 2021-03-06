import {userAPI} from "../api/Api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

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
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await userAPI.getUsers(page, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
};

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));

    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        await followUnFollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccess);
    }
};

export const unFollow = (userId) => {
    return async (dispatch) => {
        await followUnFollowFlow(dispatch, userId, userAPI.unFollow.bind(userAPI), unfollowSuccess);
    }
};

export default usersReducer;
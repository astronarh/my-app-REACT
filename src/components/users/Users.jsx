import React from "react";
import styles from './users.module.css'
import * as axios from "axios";
import userPhoto from "../../assets/images/user.jpg"

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items);
            });

            // props.setUsers([
            //     {
            //         id: 1,
            //         photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP3749-CUSA10307_00-AV00000000000025/1581372970000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
            //         followed: false,
            //         fullName: 'Alex',
            //         status: 'I am a boss? yep',
            //         location: {city: 'Penza', country: 'RU'}
            //     },
            //     {
            //         id: 2,
            //         photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP3749-CUSA10307_00-AV00000000000025/1581372970000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
            //         followed: true,
            //         fullName: 'Alexa',
            //         status: 'I am not a boss',
            //         location: {city: 'Moscow', country: 'RU'}
            //     },
            //     {
            //         id: 3,
            //         photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP3749-CUSA10307_00-AV00000000000025/1581372970000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
            //         followed: false,
            //         fullName: 'Ury',
            //         status: 'I am not a boss? again',
            //         location: {city: 'No', country: 'NO'}
            //     }
            // ]);
        }
    };

    return <div>
        <button onClick={getUsers}>Get users</button>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                </span>
            </span>
        </div>)}
    </div>
};

export default Users;
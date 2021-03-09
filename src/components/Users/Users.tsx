import React from "react";
import s from './Users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";


let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers([
                    {
                        id: 1,
                        photoUrl: 'https://vgr.by/wp-content/uploads/2020/07/d_koldun.jpg',
                        followed: false,
                        fullName: 'Dmitry',
                        status: 'I am a boss',
                        location: {city: 'Minsk', country: 'Belarus'}
                    },
                    {
                        id: 2,
                        photoUrl: 'https://vgr.by/wp-content/uploads/2020/07/d_koldun.jpg',
                        followed: true,
                        fullName: 'Sasha',
                        status: 'I am a boss too',
                        location: {city: 'Moscow', country: 'Russia'}
                    },
                    {
                        id: 3,
                        photoUrl: 'https://vgr.by/wp-content/uploads/2020/07/d_koldun.jpg',
                        followed: false,
                        fullName: 'Andrew',
                        status: 'I am a boss too',
                        location: {city: 'Kiev', country: 'Ukraine'}
                    }
                ]
            )
        });
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        <button>Follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
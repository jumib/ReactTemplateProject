import React, {useState} from 'react'
import {User} from '../../templates/User'
import { useDispatch, useSelector } from "react-redux";
import { userActions } from '../../modules/user.action'

export default function UserPage() {
    const dispatch = useDispatch()
    const user = useSelector(state => (state.userReducer.user))
    
    return (<User>
        <h1>UserDetail</h1>
        <form>
        <table className='tab_layer'>
            
                <tr>
                    <td>ID</td>
                    <td>{user.userId}</td>
                </tr>
                <tr>
                    <td>PASSWORD</td>
                    <td>{user.password}</td>
                </tr>
                <tr>
                    <td>NAME</td>
                    <td>{user.name}</td>
                </tr>
                <tr>
                    <td colspan={2}><button>
                        Go Update</button>
                    <button>Cancel</button></td>
                </tr>
        </table></form>
    </User>)
}

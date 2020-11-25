import { createAction, handleActions } from 'redux-actions';
import { userService } from './user.service'
import { alertActions } from './alert.action'
// Action Types
import history from '../history'

export const userConstants = {
  REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
  REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
  REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

  LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
  
  LOGOUT: 'USERS_LOGOUT',

  GETALL_REQUEST: 'USERS_GETALL_REQUEST',
  GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
  GETALL_FAILURE: 'USERS_GETALL_FAILURE',

  DELETE_REQUEST: 'USERS_DELETE_REQUEST',
  DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
  DELETE_FAILURE: 'USERS_DELETE_FAILURE'    
}
// let sessionUser = JSON.parse(sessionStorage.getItem("user"));
// console.log(sessionUser)

export const loginSuccess = createAction(userConstants.LOGIN_SUCCESS);

// Initial State
const initialState = {
    user: [],
    payment: [], 
    loggingIn: false
}



// Reducer
const userReducer = handleActions(
    { [userConstants.LOGIN_SUCCESS]: (state, action) => ({ loggingIn: true, user: action.user }) },
    initialState,
  )


// Actions




export const userActions = {
  
  register, login, logout, getAll
}

///////////////////////////////////////
///////////////////////////////////////
//////////////    POST   //////////////
///////////////////////////////////////
///////////////////////////////////////

function register(userInfo) {
    return dispatch => {
        alert("register action = " + JSON.stringify(userInfo))
        dispatch(request(userInfo));
        userService.register(userInfo)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/signin')
                    // dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };
  
    function request(userInfo) { return { type: userConstants.REGISTER_REQUEST, userInfo } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function login(email,password){
    return dispatch => {
        dispatch(request(email,password))

        userService.login(email,password)
            .then(
                user => { 
                    console.log(user.name)
                    dispatch(success(user[0]))
                    sessionStorage.setItem('user', user[0].name)
                    history.push('/')
             },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
          )
    }

  function request(email, password) { return { type: userConstants.LOGIN_REQUEST, email,password} }
  function success(user) { 
    console.log(`#2 Login User Name is ${user.name}`) 
      return { type: userConstants.LOGIN_SUCCESS, user } 
  }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}


///////////////////////////////////////
///////////////////////////////////////
//////////////    GET   //////////////
///////////////////////////////////////
///////////////////////////////////////


function getAll(userName) {
    return dispatch => {
        console.log(userName)
        dispatch(request(userName));

        userService.getAll(userName)
            .then(
                payment => {
                    dispatch(success(payment))
                    history.push('/review')
                },
                error => {
                    dispatch(failure(error.toString()))
                }
            );
    };

    function request(userName) { return { type: userConstants.GETALL_REQUEST, userName } }
    function success(payment) { return { type: userConstants.GETALL_SUCCESS, payment } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
/*
const fetchAllUsers = useCallback(async () => {
    try{
        const req = {
            method: c.get, 
            url: `${c.url}/api/users`
        }
        const res = await axios(req)   
        setUsers(res.data)
    }catch(error){
        alert(`fetchAllUsers failure`)
        throw(error)
    }
},[]) 
const fetchSomeUsers = useCallback(async e=>{
    e.preventDefault()
    try {
        const req = {
            method: c.get,
            url: `${c.url}/api/users`,
            data: {params: e.target.getAttribute('userId')},
            auth: c.auth
        }
        const res = await axios(req)   
    } catch (error) {
        alert(`fetchSomeUsers failure`)
        throw(error)
    }
},[])
const fetchOneUser = useCallback(async e => {
    e.preventDefault()
    try {
        
        const userId = e.target.getAttribute('userId')
        console.log(`Search Id is ${userId}`) 
        const req = {
            method: c.get,
            url: `${c.url}/api/user/${userId}`,
            auth: c.auth
        }
        const res = await axios(req)   
        const data = JSON.parse(res.data)
        setUser(data)
        console.log(`${data.name}`) 
        history.push("/user-detail");
    } catch (error) {
        console.log(`Error ${error}`) 
    }
},[])
*/
export default userReducer
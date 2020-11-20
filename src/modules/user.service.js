import axios from 'axios'
import { context as c } from '../context'

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
  };
  /*
  access : async (userId, password) => {
    const req = {
        method: c.post,
        url: `${c.url}/api/access`,
        data: {id:userId, password:password},
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  },
  */


  async function login(email,password) {
    const req = {
        method: c.post,
        url: `http://192.168.0.10:8080/api/login`,
        data: {email,password},
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  async function logout(userId, password) {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
  }
  
  async function getAll(userName) {
    const req = {
        method: c.get,
        url: `http://192.168.0.10:8080/api/mypage/${userName}`,
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data[0]
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  async function getById(userId, password) {
    const req = {
        method: c.post,
        url: `${c.url}/api/access`,
        data: {id:userId, password:password},
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  async function register(userInfo) {
    alert("register service = " + JSON.stringify(userInfo))
    // console.log(userInfo.type)
    const req = {
        method: c.post,
        url: `http://192.168.0.10:8080/api/access`,
        data: {userInfo},
        // auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  async function update(userId, password) {
    const req = {
        method: c.post,
        url: `${c.url}/api/access`,
        data: {id:userId, password:password},
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  // prefixed function name with underscore because delete is a reserved word in javascript
  async function _delete(userId, password) {
    const req = {
        method: c.post,
        url: `${c.url}/api/access`,
        data: {id:userId, password:password},
        auth: c.auth
    }
    const resp = await axios(req)
    const data = resp.data
    alert(`Welcome ! ${data.name}'s connection is successful. ! `)
    return data
  }
  
  
  
  ///////////////////////////////////////////////////////////////////////////
  // const UserServiceSample = {
  //   access : async (userId, password) => {
  //     const req = {
  //         method: c.post,
  //         url: `${c.url}/api/access`,
  //         data: {id:userId, password:password},
  //         auth: c.auth
  //     }
  //     const resp = await axios(req)
  //     const data = resp.data
  //     alert(`Welcome ! ${data.name}'s connection is successful. ! `)
  //     return data
  //   },
  //   detail : async () => {
  //     alert(`move to detail`)
      
  //   }
  // } 
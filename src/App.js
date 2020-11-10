import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
import {Signin, Signup} from './containers/user'

// pages for this product
import Home from 'templates/Home/Home'
import LoginPage from "templates/LoginPage/LoginPage.js";
import User from "templates/User/User"
import Stock from "templates/Stock/Stock.jsx"
import Covid from "templates/Covid/Covid.jsx"
import UserPage from "containers/user/UserPage.jsx";
import {Payment,Review, Order } from "containers/buying";
import Buying from "templates/Buying/Buying";
import Total from "templates/Total/Total";


export default function App(){
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return (<>

    <Switch>
    <Route path="/login-page" component={LoginPage} />
    <Route exact path="/" component={Home} />
    <Route path="/buying" component={Buying} />
    <Route path="/user" component={User} />
    <Route path="/stock" component={Stock}/>
    <Route path="/covid" component={Covid} />
    <Route path="/total" component={Total} />
    <Route path="/signup" component={Signup}/>
    <Route path="/signin" component={Signin}/>
    <Route path="/mypage" component={UserPage} />
    <Route path="/order" component={Order}/>
    <Route path="/payment" component={Payment}/>
    <Route path="/review" component={Review}/>
    </Switch>
</>
    )}
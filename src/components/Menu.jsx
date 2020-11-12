import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => (
    <nav>
        <ol>
            <li><Link to='/signup'>회원가입</Link></li>
            <li><Link to='/signin'>로그인</Link></li>
        </ol>
    </nav>)

export const BuyMenu = () => (
    <nav>
            <li><Link to="/order">주문하기</Link></li>
            <li><Link to="/payment">결제하기</Link></li>
            <li><Link to="/review">주문확인</Link></li>
            <li><Link to='/mypage'>마이페이지</Link></li>
    </nav>)    
// import { makeStyles } from '@material-ui/core';
// import React from 'react';
// import ChatBot from 'react-simple-chatbot';



// export const ItemSearch = () => {
//         return (
//                 <p>삼성전자</p>

//         )
    
// }
// export const ItemSearch2 = () => {
//     return (
//             <p>정보가 없습니다.</p>

//     )

// }
// const useStyle = makeStyles({
//     location: {
//         padding: '100px'
//     }
// })

// export default function ChatBotContainer(){

//     const classes = useStyle()

//     return (
//     <div className={classes.location}>
//     <ChatBot
//         floating = {true}
//         headerTitle = {'서비스'}
//         enableSmoothScroll = {true}
//         steps={[
//             //서비스선택
//             {
//                 id: '1',
//                 message: '원하시는 서비스를 선택해주세요.',
//                 trigger: '2',
//             },
//             {
//                 id: '2',
//                 options: [
//                     { value: 1, label: '주식 정보', trigger: '3' },
//                     { value: 2, label: '주식 매매', trigger: '6' },
//                 ],
//             },
//             {
//                 id: '3',
//                 message: '알아 볼 종목의 이름을 입력하세요',
//                 trigger: '4',
//             },
//             {
//                 id: '4',
//                 user: true,
//                 trigger: '5',
//             },
//             {
//                 id: '5',
//                 component: <ItemSearch/>,
//                 trigger: '1',
//             },
//             {
//                 id: '6',
//                 message: '구매 할 종목명을 입력하세요',
//                 trigger: '7',
//             },
//             {
//                 id: '7',
//                 user: true,
//                 trigger: '8',
//             },
//             {
//                 id: '8',
//                 message: '구매 할 가격을 지정해주세요',
//                 trigger: '9'
//             },
//             {
//                 id: '9',
//                 options: [
//                     { value: 1, label: '지정가', trigger: '9-2' },
//                     { value: 2, label: '시장가', trigger: '10' },
//                 ]
//             },
//             {
//                 id: '9-2',
//                 message: '가격을 지정하세요',
//                 trigger: '9-3'
//             },
//             {
//                 id: '9-3',
//                 user: true,
//                 trigger: '10'
//             },
//             // {
//             //     id: '9-4',
//             //     user: true,
//             //     trigger: '11'
//             // },
//             {
//                 id: '10',
//                 message: '구매할 개수를 입력하세요',
//                 trigger: '11'
//             },
//             {
//                 id: '11',
//                 user: true,
//                 trigger: '12',
//             },
//             {
//                 id: '12',
//                 message: '구매가 완료되었습니다. 마이페이지를 확인하세요.',
//                 trigger: '1',
//             },
//         ]}
//     />
//     </div>
// )}

import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';
// import theme from '@amcharts/amcharts4/themes/animated';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

// const user = sessionStorage.getItem('user')
// alert('user : ' + JSON.stringify(user.name))

class Review extends Component {
  
  
  constructor(props) {
    // const userName = 'test'
    // console.log('userName = ' + userName)

    super(props);
    this.state = {
        username: '',
        money: '',
        stockname: '',
        type: '',
        date: '',
        price: '',
        cnt: '',
      
    };
  }
  
  componentWillMount() {
    const { steps } = this.props;
    console.log('props : ' + this.props)
    const { username, money, stockname, type, date, price, cnt } = steps; 
    console.log('steps : ' + steps)
    this.setState({ username, money, stockname, type, date, price, cnt });
  }
  render() {
    const { username, money, stockname, type, date, price, cnt } = this.state;
    // console.log(stockName)
    return (
      <div style={{ width: '100%' }}>
        <h3>거래 내역</h3>
        <table>
          <tbody>
            <tr>
              <td>구매자</td>
              <td>{username.value}</td>
            </tr>
            <tr>
              <td>충전 금액</td>
              <td>{money.value}</td>
            </tr>
            <tr>
              <td>종목명</td>
              <td>{stockname.value}</td>
            </tr>
            <tr>
              <td>매매 타입</td>
              <td>{type.value}</td>
            </tr>
            <tr>
              <td>거래 날짜</td>
              <td>{date.value}</td>
            </tr>
            <tr>
              <td>거래 가격</td>
              <td>{price.value}</td>
            </tr>
            <tr>
              <td>거래량</td>
              <td>{cnt.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
Review.propTypes = {
  steps: PropTypes.object,
};
Review.defaultProps = {
  steps: undefined,
};
class Answer extends Component {
  
  constructor(props) {
    super(props);
    // const userName = 'test'
    this.state = {
      // userName: 'test'
      // target_name: ''
    };
  }
  componentWillMount() {
    // const users = useSelector(state => (state.useReducer.user))
    // const username = users.name
    // alert(JSON.stringify(username))

    const { steps } = this.props;
    const { username, money, stockname, type, date, price, cnt } = steps;
    // ['age', 'real_name', 'religion', 'agency', 'spouse', 'children','debut_year', 'gender', 'state'])
    axios.post(`http://192.168.0.10:8080/api/mypage`,
    // {"age":50, "real_name":1, "religion":1,"agency":1,"spouse":1,"children":1, "debut":1991,"gender":1})
    { "username": username.value, "stockname":stockname.value, "money": money.value, "type":type.value, "date":date.value, "price":price.value, "cnt":cnt.value, })
    .then(res=>{
      alert("성공")
      localStorage.removeItem('stockName')
      alert(localStorage.getItem('stockName'))
      // this.setState(res.data)
      // this.state.target_name = res.data
      // localStorage.setItem("actor", this.state.target_name)
      // alert(localStorage.getItem("actor"))
    }) 
    .catch(e => {
      alert('실패')
    })
  }
  render() {
    console.log(localStorage.getItem("actor"))
    return (
      <div style={{ width: '100%' }}>
        <h3>{localStorage.getItem("actor")}</h3>
      </div>
    );
  }
} 
Answer.propTypes = {
  steps: PropTypes.object,
};
Answer.defaultProps = {
  steps: undefined,
  // userName :'test',
  // console.log('userName = ' + userName)
  
};
const config = {
  width: "600px",
  height: "700px"
};

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#ffb74d',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#ffb74d',
  botFontColor: '#black',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  width: "700",
  height: "900",
}

class MyChatbot extends Component {
  
  render() {
    return (
      <ThemeProvider theme={theme}>
      <ChatBot  
        floating = {true}
        headerTitle = {'서비스'}
        enableSmoothScroll = {true}
        steps={[
          { 
            id: 'start',
            message: "구매 전 본인확인을 위해 이름을 입력해주세요.",
            trigger: "username"
         },
          { 
            id: 'username',
            user: true,
            trigger: "0"
         },
          { 
            id: '0',
            message: "환영합니다. 충전하고 싶은 금액을 입력해주세요.",
            trigger: "money"
         },
         { 
          id: 'money',
          user: true,
          trigger: "1"
       },
          { 
            id: '1',
            message: "원하시는 서비스를 선택해주세요.",
            trigger: "menu"
         },
         {
            id: 'menu',
            options: [
                {value: '0', label: '주식 정보를 보고싶어요', trigger: '3' },
                {value: '1' , label: '주식 매매를 하고싶어요', trigger: '3'},
            ],
          },
          {
            id: '3',
            message: "구매할 종목명을 입력하세요.",
            trigger: "stockname"
         },
         {
            id: 'stockname',
            user: true,
            trigger: '4',
         },
         {
            id: '4',
            message: "매매할 날짜를 입력해주세요.",
            trigger: "date"
         },
         {
            id: 'date',
            user: true,
            trigger: "5"
         },
         {
            id: '5',
            message: "매매타입을 선택해주세요.",
            trigger: "type"
         },
         {
            id: 'type',
            options: [
                {value: 'buy', label: '매수하기', trigger: '6' },
                {value: 'sell', label: '매도하기', trigger: '3'},
            ],
         },
         {
            id: '6',
            message: "구매 가격을 선택해주세요.",
            trigger: "price"
         },
         {
            id: 'price',
            options: [
                {value: 'select', label: '지정가', trigger: '7' },
                {value: '453560', label: '시장가', trigger: '8'},
            ],
         },
         {
            id: '7',
            message: "얼마에 구매하시나요?",
            trigger: "selectPrice"
         },
         {
            id: 'selectPrice',
            user: true,
            trigger: "8"
         },
         {
            id: '8',
            message: "매수할 개수를 입력해주세요.",
            trigger: "cnt"
         },
         {
            id: 'cnt',
            user: true,
            trigger: "review"
         },
         {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
         },

        // ---------------------------------------------- 매매페이지 ----------------------------------------
        {
          id: 'update',
          message: '구매 하시겠습니까?',
          trigger: 'update-question',
        },
        {
          id: 'update-question',
          options: [
            { value: 'yes', label: '아니오', trigger: 'update-yes' },
            { value: 'no', label: '예', trigger: 'end-message' },
          ],
        },
        {
          id: 'update-yes',
          message: '어떤 정보를 수정 하시겠습니까?',
          trigger: 'update-fields',
        },
        {
          id: 'update-fields',
          options: [ // name, type, date, buyprice, count 
            { value: 'money', label: '충전 금액', trigger: 'update-money' },
            { value: 'stockName', label: '종목명', trigger: 'update-stockName' },
            { value: 'type', label: '매매타입', trigger: 'update-type' },
            { value: 'date', label: '날짜', trigger: 'update-date' },
            { value: 'price', label: '구매가격', trigger: 'update-price' },
            { value: 'count', label: '수량', trigger: 'update-count' },
          ],
        },
        {
          id: 'update-money',
          update: 'money',
          trigger: 'review',
        },
        {
          id: 'update-stockName',
          update: 'stockName',
          trigger: 'review',
        },
        {
          id: 'update-type',
          update: 'type',
          trigger: 'review',
        },
        {
          id: 'update-date',
          update: 'date',
          trigger: 'review',
        },
        {
          id: 'update-price',
          update: 'price',
          trigger: 'review',
        },
        {
          id: 'update-count',
          update: 'cnt',
          trigger: 'cnt',
        },
        {
          id: 'end-message',
          component: <Answer />,
          waitAction: true,
          asMessage: true,
          end: true,
        },
        ]}
      />
      </ThemeProvider>
    );
  }
}
export default MyChatbot;

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
class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        type: '',
        date: '',
        buyprice: '',
        count: '',
      
    };
  }
  componentWillMount() {
    const { steps } = this.props;
    const { name, type, date, buyprice, count } = steps;
    this.setState({ name, type, date, buyprice, count });
  }
  render() {
    const { name, type, date, buyprice, count } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>거래 내역</h3>
        <table>
          <tbody>
            <tr>
              <td>종목명</td>
              <td>{name.value}</td>
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
              <td>{buyprice.value}</td>
            </tr>
            <tr>
              <td>거래량</td>
              <td>{count.value}</td>
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
    this.state = {
      // target_name: ''
    };
  }
  componentWillMount() {
    const { steps } = this.props;
    const { name, type, date, buyprice, count } = steps;
    // ['age', 'real_name', 'religion', 'agency', 'spouse', 'children','debut_year', 'gender', 'state'])
    axios.post(`http://localhost:8080/api/chatbot`,
    // {"age":50, "real_name":1, "religion":1,"agency":1,"spouse":1,"children":1, "debut":1991,"gender":1})
    { "name":name, "type":type, "date":date, "buyprice":buyprice, "count":count, })
    .then(res=>{
      // alert("분석 성공")
      //this.setState(res.data)
    //   this.state.target_name = res.data
    //   localStorage.setItem("actor", this.state.target_name)
    //   alert(localStorage.getItem("actor"))
    }) 
    .catch(e => {
      alert('분석 실패')
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
};
const config = {
  width: "600px",
  height: "700px"
};
class MyChatbot extends Component {
  render() {
    return (
      <ChatBot {...config} style={{"border": "1px solid black"}}
        steps={[
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
            trigger: "name"
         },
         {
            id: 'name',
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
            trigger: "buyprice"
         },
         {
            id: 'buyprice',
            options: [
                {value: 'select', label: '지정가', trigger: '7' },
                {value: '453560원', label: '시장가', trigger: '8'},
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
            trigger: "count"
         },
         {
            id: 'count',
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
          message: '정보를 수정 하시겠습니까?',
          trigger: 'update-question',
        },
        {
          id: 'update-question',
          options: [
            { value: 'yes', label: '예, 수정 하겠습니다', trigger: 'update-yes' },
            { value: 'no', label: '아니요', trigger: 'end-message' },
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
            { value: 'name', label: '종목명', trigger: 'update-name' },
            { value: 'type', label: '매매타입', trigger: 'update-spouse' },
            { value: 'date', label: '날짜', trigger: 'update-gender' },
            { value: 'buyprice', label: '구매가격', trigger: 'update-age' },
            { value: 'count', label: '수량', trigger: 'update-religion' },
          ],
        },
        {
          id: 'update-name',
          update: 'name',
          trigger: 'review',
        },
        {
          id: 'update-spouse',
          update: 'type',
          trigger: 'review',
        },
        {
          id: 'update-gender',
          update: 'date',
          trigger: 'review',
        },
        {
          id: 'update-age',
          update: 'buyprice',
          trigger: 'review',
        },
        {
          id: 'update-religion',
          update: 'count',
          trigger: 'count',
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
    );
  }
}
export default MyChatbot;

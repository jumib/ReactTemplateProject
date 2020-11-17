import { makeStyles } from '@material-ui/core';
import React from 'react';
import ChatBot from 'react-simple-chatbot';



export const ItemSearch = () => {
        return (
                <p>삼성전자</p>

        )
    
}
export const ItemSearch2 = () => {
    return (
            <p>정보가 없습니다.</p>

    )

}
const useStyle = makeStyles({
    location: {
        padding: '100px'
    }
})

export default function ChatBotContainer(){

    const classes = useStyle()

    return (
    <div className={classes.location}>
    <ChatBot
        floating = {true}
        headerTitle = {'서비스'}
        enableSmoothScroll = {true}
        steps={[
            //서비스선택
            {
                id: '1',
                message: '원하시는 서비스를 선택해주세요.',
                trigger: '2',
            },
            {
                id: '2',
                options: [
                    { value: 1, label: '주식 정보', trigger: '3' },
                    { value: 2, label: '주식 매매', trigger: '6' },
                ],
            },
            {
                id: '3',
                message: '알아 볼 종목의 이름을 입력하세요',
                trigger: '4',
            },
            {
                id: '4',
                user: true,
                trigger: '5',
            },
            {
                id: '5',
                component: <ItemSearch/>,
                trigger: '1',
            },
            {
                id: '6',
                message: '구매 할 종목명을 입력하세요',
                trigger: '7',
            },
            {
                id: '7',
                user: true,
                trigger: '8',
            },
            {
                id: '8',
                message: '구매 할 가격을 지정해주세요',
                trigger: '9'
            },
            {
                id: '9',
                options: [
                    { value: 1, label: '지정가', trigger: '9-2' },
                    { value: 2, label: '시장가', trigger: '10' },
                ]
            },
            {
                id: '9-2',
                message: '가격을 지정하세요',
                trigger: '9-3'
            },
            {
                id: '9-3',
                user: true,
                trigger: '10'
            },
            // {
            //     id: '9-4',
            //     user: true,
            //     trigger: '11'
            // },
            {
                id: '10',
                message: '구매할 개수를 입력하세요',
                trigger: '11'
            },
            {
                id: '11',
                user: true,
                trigger: '12',
            },
            {
                id: '12',
                message: '구매가 완료되었습니다. 마이페이지를 확인하세요.',
                trigger: '1',
            },
        ]}
    />
    </div>
)}

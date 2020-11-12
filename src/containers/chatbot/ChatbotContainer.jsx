import React from 'react';
import ChatBot from 'react-simple-chatbot';



export const ItemSearch = () => {
        return (
                <p>삼성꺼 사라</p>

        )
    
}
export const ItemSearch2 = () => {
    return (
            <p>정보가 없습니다.</p>

    )

}

export default function ChatBotContainer(){
    return (<ChatBot
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
                    { value: 1, label: '주식 정보 보기', trigger: 'item' },
                    { value: 2, label: '매매하기', trigger: 'fare' },
                ],
            },
            {
                id: 'item',
                message: '종목명을 입력하세요',
                trigger: 'itemSearch',
            },
            {
                id: 'itemSearch',
                user: true,
                trigger: 'itemSearchResult',
            },
            {
                id: 'itemSearchResult',
                component: <ItemSearch/>,
                trigger: '1',
            },
            {
                id: 'fare',
                message: '종목명을 입력하세요',
                trigger: 'startName',
            },
            {
                id: 'startName',
                user: true,
                trigger: 'fare1',
            },
            {
                id: 'fare1',
                message: '구매할 개수를 입력하세요',
                trigger: 'startName2'
            },
            {
                id: 'startName2',
                user: true,
                trigger: 'fare2',
            },
            {
                id: 'fare2',
                message: '구매 할 가격을 지정해주세요',
                trigger: 'arriveName'
            },
            {
                id: 'arriveName',
                options: [
                    { value: 1, label: '지정가', trigger: 'fareResult' },
                    { value: 2, label: '시장가', trigger: 'fareResult' },
                ]
            },
            {
                id: 'fareResult',
                component: <ItemSearch2/>,
                trigger: '1',
            },
        ]}
    />
)}

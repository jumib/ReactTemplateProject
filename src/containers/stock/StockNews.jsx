import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';



const StockNews = () => {

    return (<>
        <React.Fragment>
        <h1>뉴스기사를 분석해 종목을 추천하는 시스템</h1>
        <Card>
            <CardContent>
            <input type="text" placeholder="종목을 검색해보세요 !"/> 
                    <button>검색</button>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
            <table>
                <h3>counting ...</h3>
                <tr>
                    <th>긍정</th>
                    <th>부정</th>
                </tr>
                <tr>
                    <th>N개</th>
                    <th>N개</th>
                </tr>
            </table>
            </CardContent>
        </Card>
        <Card>
            <h2>이 종목의 분석 결과는 <Avatar>5</Avatar>단계 입니다 !</h2>
            <div>
                <Avatar>5</Avatar>
                <Avatar>4</Avatar>
                <Avatar>3</Avatar>
                <Avatar>2</Avatar>
                <Avatar>1</Avatar>
            </div>
        </Card>
        </React.Fragment>
    </>           
    )}

export default StockNews
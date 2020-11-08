import React from 'react'

const CovidStatus = () => {

    return (
        <>
        <h2>코로나 현황판</h2>
        <table>
        <tr>
            <th>확진자</th>
            <th>사망자</th>
            <th>격리해제</th>
            <th>치명률</th>
            <th>총검사자</th>
            <th>검사중</th>
            <th>결과 음성</th>
        </tr>
        <tr>
            <th>26,732</th>
            <th>468</th>
            <th>24,395</th>
            <th>1.75%</th>
            <th>2,636,650</th>
            <th>25,524</th>
            <th>2,584,394</th>
        </tr>
        </table>           
        </>
    )
}

export default CovidStatus
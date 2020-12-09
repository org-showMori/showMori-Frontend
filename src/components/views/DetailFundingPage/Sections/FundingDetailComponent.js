import React from 'react'
function FundingDetailComponent() {
    return (
        <div>
            <p>현재 금액 <span>달성률 %</span> </p>
            <p>마감 날짜까지 <span>디데이</span></p>
            <p>후원 중인 사람<span>00명</span></p>
            
            <form>
                <select></select>
                <input type="submit" value="후원하기" />
            </form>
            <p>선택한 값에 따라 해당 리워드 보여주기</p>
        </div>
    )
}

export default FundingDetailComponent;
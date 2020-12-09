import React from 'react';
// import {useDispatch} from 'react-redux';
// import {infoFunding} from '../../../_actions/fundingAction';

const donationRate = (goalsum, currentDonation) => {
    return ((currentDonation/goalsum) * 100).toFixed(1) ;
}
const calculateDday = (dday) => {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();
    dday = dday.split('-');
    
    const cDday = new Date(dday[0], dday[1], dday[2]);
    const cToday = new Date(year, month, date);
    const cDay = 24 * 60 * 60 * 1000;
     
    if(((cDday-cToday)/cDay))

    return ;   
};


function PostCard(props) {

    console.log(props);

    // const dispatch = useDispatch();
    const currentTitle = props.title ;
    const currentPoster = props.posterImg ;
    const currentGoalSum = props.goalsum ;
    const currentTotalDonation = props.totalDonation ;
    const currentDeadLine = props.deadLine;
   
    const goFundingInfo = (e) => {
        console.log(e);
    }



    return (
        <div className="postCard" onClick={goFundingInfo}>
          <img src={currentPoster} alt="poster" className="cardImg"/>
            <p className="cardTitle cardTitle">{currentTitle}</p>
            <p className="cardLeftMoney cardContents">{currentGoalSum-currentTotalDonation}원 남음 <b className="cardBold">
            {donationRate(currentGoalSum, currentTotalDonation)}%</b></p>
            <p className="cardDday cardContents">마감까지 <b className="cardBold">D - {calculateDday(currentDeadLine)}일</b></p>
        </div>
    );
}
export default PostCard;
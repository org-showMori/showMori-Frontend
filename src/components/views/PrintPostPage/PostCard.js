import React from 'react';
// import {useDispatch} from 'react-redux';
// import {infoFunding} from '../../../_actions/fundingAction';

const donationRate = (goalsum, currentDonation) => {
    return ((currentDonation/goalsum) * 100).toFixed(1) ;
}
const calculatDday = (dday) => {
    const newDate = new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const date = newDate.getDate();
    dday = dday.split('-');
    
    const cDday = new Date(dday[0], dday[1], dday[2]);
    const cToday = new Date(year, month, date);
    const cDay = 24 * 60 * 60 * 1000;
    
    return ((cDday-cToday)/cDay);   
};


function PostCard(props) {
    // const dispatch = useDispatch();
    const currentTitle = props.title ;
    const currentPoster = props.posterImg ;
    const currentGoalSum = props.goalsum ;
    const currentTotalDonation = props.totalDonation ;
    const currentDeadLine = props.deadLine;
    // const currentPostId = props.postId ;
    // const [PostId, setPostId] = useState(currentPostId);
    //  const img = document.getElementById("imgid");

    // const onClickHandler = (e) => {
    //     let body = {};
    //     console.log("div클릭");
    //     // dispatch(infoFunding(body, PostId)).then((response) => {
    //     //     console.log(response);
    //     //     props.history.push(`/posts/${PostId}`);
    //     // })
    // }

    console.log(props);


    return (
        <div className="postCard" >
          <img src={currentPoster} alt="poster" id="cardImg"/>
            <p className="cardTitle" className="cardTitle">{currentTitle}</p>
            <p className="cardLeftMoney" className="cardContents">{currentGoalSum-currentTotalDonation}원 남음 <b className="cardBold">
            {donationRate(currentGoalSum, currentTotalDonation)}%</b></p>
            <p className="cardDday" className="cardContents">마감까지 <b className="cardBold">D-{calculatDday(currentDeadLine)}일</b></p>
        </div>
    );
}
export default PostCard;
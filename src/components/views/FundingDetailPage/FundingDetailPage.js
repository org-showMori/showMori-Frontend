import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import { infoFunding } from "../../../_actions/fundingAction";

function FundingDetailPage(props) {
  const IMG_SRC = "data:image/jpeg;base64,";
  const dispatch = useDispatch();
  const postId = props.match.params.post_id;
  const [PosterImg, setPosterImg] = useState("");
  const [Title, setTitle] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [LastDate, setLastDate] = useState("");
  const [GoalSum, setGoalSum] = useState(0);
  const [DeadLine, setDeadLine] = useState("");
  const [ContentsImg, setContentsImg] = useState("");
  const [arrReward, setarrReward] = useState([]);
 
  const [SelectedDate, setSelectedDate] = useState("");
  const [SelectedMoney, setSelectedMoney] = useState(0);

  const printReward = (rewards) => {
    const rewardContainer = document.querySelector("#rewardList");

    setarrReward(rewards.map((e) => {
      const option = document.createElement("option");

      option.setAttribute('value', `${e.reward_money}`);
      option.innerText = `후원금액: ${e.reward_money} 리워드 : ${e.reward}`;
      
      return rewardContainer.appendChild(option);
    }))
  }
  useEffect(() => {
    
    // dispatch(infoFunding(postId)).then((response) => {
     
    //     const data = response.payload;
    //      console.log(data);
       let data = window.localStorage.getItem("asdfad");
       data = JSON.parse(data);
        setPosterImg(`${IMG_SRC}${data.poster_image}`);
        setDeadLine(data.dead_line);
        setGoalSum(data.goal_sum);
        setLastDate(data.last_day);
        setStartDate(data.start_day);
        setContentsImg(`${IMG_SRC}${data.contents_image}`);
        setTitle(data.title);
        const rewards = data.reward_list;
        printReward(rewards);
  //   })

    
  }, []);

  const onSelectHandler = (e) => {
    setSelectedMoney(e.target.value);
    console.log(e.currentTarget.value);
  }
  
  const onDateHandler = (e) => {
    setSelectedDate(e.currentTarget.value);
  }
 
  return (
    <div>
      <img src={PosterImg} alt="poster_image" />
      <p>{Title}</p>
      <p >{DeadLine}</p>
      <p>{GoalSum}</p>
      
      {/* <img src={ContentsImg} alt="contents_image" /> */}
      <div> 
        <label >후원금액 및 리워드
        <select id="rewardList" onChange={onSelectHandler}>
          <option value="">후원금액을 선택하세요.</option>
        </select>
        </label>
        <label>공연 관람 날짜</label>
        <input type="date" required name="selectedDate" min={StartDate} max={LastDate} onChange={onDateHandler}/>
        <Link to={`/posts/donate/${postId}/${SelectedDate}/${SelectedMoney}`} >
        <input type="button" value="후원하기" />
        </Link>
      </div>
    </div>
  );
}

export default FundingDetailPage;

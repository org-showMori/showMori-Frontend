import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import { infoFunding } from "../../../_actions/fundingAction";
import DonationPage from "../DonationPage/DonationPage";

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
  const [arrReward, setarrReward] = useState([]);
  const [ContentsImg, setContentsImg] = useState("");

  const [selectedDate, setSelectedDate] = useState("");

  const printReward = (rewards) => {
    const rewardContainer = document.querySelector("#rewardList");

    setarrReward(rewards.map((e) => {
      console.log(e);
      const li = document.createElement("li");
      const input = document.createElement("input");
      const label = document.createElement("label");

      input.setAttribute('type', 'radio');
      input.setAttribute('name', 'select_donation');
      input.setAttribute('value', `${e.reward_money}`);
      input.setAttribute('required', '');
      label.innerText = `후원금액: ${e.reward_money} 리워드 : ${e.reward}`;

      li.appendChild(input);
      li.appendChild(label);
      
      return rewardContainer.appendChild(li);
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

 const onDateHandler = (e) => {
   setSelectedDate(e.currentTarget.value);
 }

 const onSubmitHandler = (e) => {
   e.preventDefault();
   console.log(e);
   
  //  return <DonationPage selected_date={selectedDate} selected_amount={5000} />
 }

  return (
    <div>
      <img src={PosterImg} alt="poster_image" />
      <p >{DeadLine}</p>
      <p>{GoalSum}</p>
      <p>{Title}</p>
      {/* <img src={ContentsImg} alt="contents_image" /> */}
      <form onSubmit={onSubmitHandler}> 
        <label >공연 관람 날짜</label>
        <ul id="rewardList">
          
        </ul>
        <input type="date" required name="selectedDate" min={StartDate} max={LastDate} onChange={onDateHandler}/>
      <Link to={`/posts/${postId}/donate/`}>
        <input type="submit" value="후원하기" />
      </Link>
      </form>
    </div>
  );
}

export default FundingDetailPage;

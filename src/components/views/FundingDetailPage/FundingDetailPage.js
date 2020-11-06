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
        setarrReward(data.reward_list);
  //   })

    
  }, []);

 const onDateHandler = (e) => {
   setSelectedDate(e.currentTarget.value);
 }

  return (
    <div>
      <img src={PosterImg} alt="poster_image" />
      <p >{DeadLine}</p>
      <p>{GoalSum}</p>
      <p>{Title}</p>
     
      <p>{JSON.stringify(arrReward)}</p>
      {/* <img src={ContentsImg} alt="contents_image" /> */}
      <form>
        <label >공연 관람 날짜</label>
        <input type="date" name="selectedDate" min={StartDate} max={LastDate} onChange={onDateHandler}/>
      <Link to={`/posts/${postId}/donate/`}>
        <input type="button" value="후원하기" />
        <DonationPage selected_date={selectedDate} selected_amount={5000} />
      </Link>
      </form>
    </div>
  );
}

export default FundingDetailPage;

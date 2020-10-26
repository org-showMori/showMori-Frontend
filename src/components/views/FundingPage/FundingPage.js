import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newFunding } from "../../../_actions/fundingAction";
import { SESSION_ID } from "../../utils/SessionTypes";

function FundingPage(props) {
  const dispatch = useDispatch();
  const userId = window.sessionStorage.getItem(SESSION_ID);
  // const userId = "apple";
  const [newPoster, setNewPoster] = useState("");
  const [newPosterImg, setNewPosterImg] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const [newStartDate, setNewStartDate] = useState("");
  const [newLastDate, setNewLastDate] = useState("");
  const [newGoalSum, setNewGoalSum] = useState(0);
  const [newDeadLine, setNewDeadLine] = useState("");
  const [arrReward, setarrReward] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      post: {
        user_info :{user_id: userId},
        poster: newPoster,
        title: newTitle,
        image: newPosterImg,
        contents: "contents",
        total_donation: 0,
        goal_sum: newGoalSum,
        dead_line: newDeadLine,
        start_day: newStartDate,
        last_day: newLastDate,
        reward_list: arrReward,
      },
    };
    console.log(body);

    dispatch(newFunding(body)).then((response) => {
      console.log(response);

      if(response.payload.validate && response.payload.success) {
        alert("펀딩게시에 성공하였습니다.");
        props.history.push('/');
      } else if(!response.payload.validate){
        alert("동일한 타이틀의 펀딩은 게시될 수 없습니다.");
        return false;
      } 
    });
  };

  const onTitleHandler = (e) => {
    setNewTitle(e.currentTarget.value);
  };

  const onPosterHandler = (e) => {
    let fileList = e.target.files;
    let file = fileList[0]; //무조건 하나의 파일만 업로드 가능
    if (!/^image\//.test(file.type)) {
      alert("이미지 파일만 등록 가능합니다.");
      return false;
    }
    setNewPoster(file.name);
    //인코딩 img to base64
    encodeImageToBase64(file);
  };

  const encodeImageToBase64 = (file) => {
    let reader = new FileReader();
    //convert the file to base64 text
    reader.readAsDataURL(file);
    reader.onload = () => {
      setNewPosterImg(reader.result);
    };
  };

  const onStartDayHandler = (e) => {
    setNewStartDate(e.currentTarget.value);
  };
  const onLastDayHandler = (e) => {
    setNewLastDate(e.currentTarget.value);
  };
  const onGoalSumHandler = (e) => {
   setNewGoalSum(e.currentTarget.value);
  };
  const onDeadLineHandler = (e) => {
    setNewDeadLine(e.currentTarget.value);
  };
  const onAddRewardHandler = (e) => {
    const rewardContainer = document.querySelector(".rewardContainer");
    const addDoMoney = rewardContainer.querySelector("#donaMoneyInput").value;
    const addReward = rewardContainer.querySelector("#rewardInput").value;
    const rewardObj = {
      reward_money: addDoMoney,
      reward: addReward,
    };
    setarrReward(arrReward.concat(rewardObj));
    console.log(arrReward);

    const rewardLi = document.createElement('p');
    const delBtn = document.createElement('input');
    delBtn.type = "button";
    delBtn.value = 'X';
    // delBtn.onClick = {};
    rewardLi.innerText = `${addDoMoney} | ${addReward}`;
    rewardLi.appendChild(delBtn);
    rewardContainer.appendChild(rewardLi);
  };

  return (
    <div className="fundingFormContainer">
      <p className="postFundingTitle">Show information</p>
      <form onSubmit={onSubmitHandler} className="fundingForm">
        
          <p className="formInputLine">
            <label className="fundingLabel">타이틀</label>
            <input
              type="text"
              name="title"
              className="fundingInput"
              onChange={onTitleHandler}
              required
            />
          </p>
          <p className="formInputLine">
            <label className="fundingLabel">포스터</label>
            <input type="file" name="poster" onChange={onPosterHandler} required/>
          </p>
          ``
          <p className="formInputLine">
            <label className="fundingLabel">첫 공연날짜</label>
            <input
              type="date"
              className="fundingInput"
              name="startDay"
              onChange={onStartDayHandler}
              required
            />
          </p>
          <p className="formInputLine">
            <label className="fundingLabel">마지막 공연날짜</label>
            <input
              type="date"
              className="fundingInput"
              name="lastDay"
              onChange={onLastDayHandler}
              required
            />
          </p>
          <p className="postFundingTitle">Donation information</p>
          <p className="formInputLine">
            <label className="fundingLabel">후원 마감일</label>
            <input
              type="date"
              className="fundingInput"
              name="deadLine"
              onChange={onDeadLineHandler}
              required
            />
          </p>
          <p className="formInputLine">
            <label className="fundingLabel">목표 후원금액</label>
            <input
              type="number"
              className="fundingInput"
              name="goalSum"
              onChange={onGoalSumHandler}
              required
            />
          </p>
          <div className="rewardContainer">
            <p className="postFundingTitle">
              Rewards <b>* 최소 3개 이상의 리워드가 등록되어야 합니다. *</b>
            </p>
            <p className="formInputLine">
            <label className="fundingLabel donationLabel">후원금액</label>
            <input className="fundingInput donationMoneyInput" type="number" placeholder="900000" id="donaMoneyInput" />
            <label className="fundingLabel donationLabel">리워드</label>
            <input
              type="text"
              placeholder="티켓 1장, 팜플렛, 포스터"
              id="rewardInput"
              className="fundingInput rewardInput"
              required
            />
      
            <input
              type="button"
              name="submit"
              value="+"
              className="addRewardBtn"
              onClick={onAddRewardHandler}
              required
            /></p>
          </div>
        <div className="fundingContentsContainer inputContainer">
          <p className="postFundingTitle">Contents</p>
          <input type="file" className="fundingInput" />
          {/* <input type="textarea" className="fundingInput" required/> */}
        </div>
        <input type="submit" value="submit" className="btnSubmit formBtns fundingBtn" name="submit" />
      </form>
    </div>
  );
}

export default FundingPage;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newFunding } from "../../../_actions/fundingAction";
import { SESSION_ID } from "../../utils/SessionTypes";

function FundingPage() {
  const dispatch = useDispatch();
  // const userId = window.sessionStorage.getItem(SESSION_ID);
  const userId = "banana";
  const [newPoster, setNewPoster] = useState("");
  const [newPosterImg, setNewPosterImg] = useState("");
  const [newTitle, setNewTitle] = useState("");
  let newStartDate = "";
  let newLastDate = "";
  let newGoalSum = 0;
  let newDeadLine = "";
  let arrReward = [];

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      post: {
        user_id: userId,
        poster: newPoster,
        title: newTitle,
        image: newPosterImg,
        contents: "contents",
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
    newStartDate = e.currentTarget.value;
  };
  const onLastDayHandler = (e) => {
    newLastDate = e.currentTarget.value;
  };
  const onGoalSumHandler = (e) => {
    newGoalSum = e.currentTarget.value;
  };
  const onDeadLineHandler = (e) => {
    newDeadLine = e.currentTarget.value;
  };
  const onAddRewardHandler = (e) => {
    const rewardContainer = document.querySelector(".rewardContainer");
    const addDoMoney = rewardContainer.querySelector("#donaMoneyInput").value;
    const addReward = rewardContainer.querySelector("#rewardInput").value;
    const rewardObj = {
      reward_money: addDoMoney,
      reward: addReward,
    };
    arrReward.push(rewardObj);
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
    <div>
      <p>공연 정보</p>
      <form onSubmit={onSubmitHandler} className="newFundingContainer">
        <div className="fundingInfoContainer">
          <p>
            <label className="formLabel">타이틀</label>
            <input
              type="text"
              name="title"
              className="formInput"
              onChange={onTitleHandler}
            />
          </p>
          <p>
            <label className="formLabel">포스터</label>
            <input type="file" name="poster" onChange={onPosterHandler} />
          </p>
          ``
          <p>
            <label className="formLabel">첫 공연날짜</label>
            <input
              type="date"
              className="formInput"
              name="startDay"
              onChange={onStartDayHandler}
            />
          </p>
          <p>
            <label className="formLabel">마지막 공연날짜</label>
            <input
              type="date"
              className="formInput"
              name="lastDay"
              onChange={onLastDayHandler}
            />
          </p>
          <p>후원 정보</p>
          <p>
            <label className="formLabel">후원 마감일</label>
            <input
              type="date"
              className="formInput"
              name="deadLine"
              onChange={onDeadLineHandler}
            />
          </p>
          <p>
            <label className="formLabel">목표 후원금액</label>
            <input
              type="number"
              className="formInput"
              name="goalSum"
              onChange={onGoalSumHandler}
            />
          </p>
          <div className="rewardContainer">
            <p>
              리워드 <b>* 최소 3개 이상의 리워드가 등록되어야 합니다. *</b>
            </p>
            <label>후원금액</label>
            <input type="number" placeholder="900000" id="donaMoneyInput" />
            <label>리워드</label>
            <input
              type="text"
              placeholder="티켓 1장, 팜플렛, 포스터"
              id="rewardInput"
            />
            <input
              type="button"
              name="submit"
              value="+"
              onClick={onAddRewardHandler}
            />
          </div>
        </div>
        <div className="fundingContentsContainer inputContainer">
          <label className="formLabel">펀딩 콘텐츠</label>
          <input type="textarea" className="formInput" />
        </div>
        <input type="submit" value="submit" name="submit" />
      </form>
    </div>
  );
}

export default FundingPage;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newFunding } from "../../../_actions/fundingAction";
import { SESSION_ID } from "../../utils/SessionTypes";

function FundingPage(props) {
  const dispatch = useDispatch();
  const userId = window.sessionStorage.getItem(SESSION_ID);
  const [newPoster, setNewPoster] = useState("");
  const [newPosterImg, setNewPosterImg] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContents, setNewContents] = useState("");
  const [newContentsImg, setNewContentsImg] = useState("");
  const [newStartDate, setNewStartDate] = useState("");
  const [newLastDate, setNewLastDate] = useState("");
  const [newGoalSum, setNewGoalSum] = useState(0);
  const [newDeadLine, setNewDeadLine] = useState("");
  const [arrReward, setarrReward] = useState([]);
  const [numReward, setNumReward] = useState(0);

  const chkFormValidate = () => {
  
    const stringToDate = (string) => { //string타입인 날짜형태를 date로 바꿔줌
      const date = new Date(string);
      return date;
    };
    const checkValidateDate = (start, last, deadline) => { //date타입이 된 공연시작일, 마지막공연일, 후원마감일 비교
      const datedStart = stringToDate(start);
      const datedLast = stringToDate(last);
      const datedDeadLine = stringToDate(deadline);

      if (datedDeadLine >= datedStart) {
        alert("후원마감일은 공연시작일과 같거나 빠를 수 없습니다.");
        return false;
      }
      if (datedStart > datedLast) {
        alert("공연시작일은 공연마감일보다 빠를 수 없습니다.");
        return false;
      }
      return true;
    };

    const checkNumReward = () => { //리워드 개수 = 최소 3개
      console.log(numReward);
      console.log(arrReward);
      console.log(arrReward.length);
      return (numReward < 3) ? true : false ;
    }
    const chkDate = checkValidateDate(newStartDate, newLastDate, newDeadLine);
    const chkReward = checkNumReward(); //리워드 개수 검사
    console.log(chkDate);
    console.log(chkReward);
    return (chkDate !== true || chkReward !== true) ? 
      false : true;
  };
 
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      user_info: { user_id: userId },
      poster: newPoster,
      title: newTitle,
      poster_image: newPosterImg,
      contents: newContents,
      total_donation: 0,
      goal_sum: newGoalSum,
      dead_line: newDeadLine,
      start_day: newStartDate,
      last_day: newLastDate,
      reward_list: arrReward,
      contents_image: newContentsImg,
    };
    console.log(body);

    chkFormValidate(); //폼 유효성 검사

    dispatch(newFunding(body)).then((response) => {
      console.log(response);

      if (response.payload.validate && response.payload.success) {
        alert("펀딩게시에 성공하였습니다.");
        // props.history.push('/');
      } else if (!response.payload.validate) {
        alert("동일한 타이틀의 펀딩은 게시될 수 없습니다.");
        return false;
      }
    });
  };

  const onTitleHandler = (e) => {
    setNewTitle(e.currentTarget.value);
  };

  const onImgHandler = (e) => {
    let fileList = e.target.files;
    let file = fileList[0]; //무조건 하나의 파일만 업로드 가능
    if (!/^image\//.test(file.type)) {
      alert("이미지 파일만 등록 가능합니다.");
      return false;
    }
    switch (e.currentTarget.name) {
      case "poster":
        setNewPoster(file.name);
        return encodeImageToBase64(file, "poster"); //인코딩 img to base64
      case "contents":
        setNewContents(file.name);
        return encodeImageToBase64(file, "contents"); //인코딩 img to base64
      default:
        return;
    }
  };

  const encodeImageToBase64 = (file, name) => {
    let reader = new FileReader();
    //convert the file to base64 text
    reader.readAsDataURL(file);
    reader.onload = () => {
      switch (name) {
        case "poster":
          return setNewPosterImg(reader.result);
        case "contents":
          return setNewContentsImg(reader.result);
        default:
          return;
      }
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
    const rewardContainer = document.querySelector("#rewardListContainer");
    const addDoMoney = document.querySelector("#donaMoneyInput").value;
    const addReward = document.querySelector("#rewardInput").value;
    const rewardObj = {
      reward_money: addDoMoney,
      reward: addReward,
    };
    setarrReward(arrReward.concat(rewardObj));
    const delRewardList = (e) => {
      //추가된 리워드 삭제
      e.path[1].parentNode.removeChild(e.path[1]);
     
    };

    const rewardLi = document.createElement("p");
    const delBtn = document.createElement("input");
    rewardLi.className = "rewardList";
    delBtn.type = "button";
    delBtn.value = "X";
    delBtn.addEventListener("click", delRewardList);
    rewardLi.rewardMoney = addDoMoney;
    rewardLi.innerText = `${addDoMoney} | ${addReward}`;
    rewardLi.appendChild(delBtn);
    rewardContainer.appendChild(rewardLi);
    setNumReward(numReward+1);
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
          />
        </p>
        <p className="formInputLine">
          <label className="fundingLabel">포스터</label>
          <input type="file" name="poster" onChange={onImgHandler} />
        </p>
        ``
        <p className="formInputLine">
          <label className="fundingLabel">첫 공연날짜</label>
          <input
            type="date"
            className="fundingInput"
            name="startDay"
            onChange={onStartDayHandler}
          />
        </p>
        <p className="formInputLine">
          <label className="fundingLabel">마지막 공연날짜</label>
          <input
            type="date"
            className="fundingInput"
            name="lastDay"
            onChange={onLastDayHandler}
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
          />
        </p>
        <p className="formInputLine">
          <label className="fundingLabel">목표 후원금액</label>
          <input
            type="number"
            className="fundingInput"
            name="goalSum"
            onChange={onGoalSumHandler}
          />
        </p>
        <div className="rewardContainer">
          <p className="postFundingTitle">
            Rewards <b>* 최소 3개 이상의 리워드가 등록되어야 합니다. *</b>
          </p>
          <p className="formInputLine">
            <label className="fundingLabel donationLabel">후원금액</label>
            <input
              className="fundingInput donationMoneyInput"
              type="number"
              placeholder="900000"
              id="donaMoneyInput"
            />
            <label className="fundingLabel donationLabel">리워드</label>
            <input
              type="text"
              placeholder="티켓 1장, 팜플렛, 포스터"
              id="rewardInput"
              className="fundingInput rewardInput"
            />
            <input
              type="button"
              name="submit"
              value="+"
              className="addRewardBtn"
              onClick={onAddRewardHandler}
            />
          </p>
          <div id="rewardListContainer"></div>
        </div>
        <p className="postFundingTitle">Contents</p>
        <input
          type="file"
          className="fundingInput"
          name="contents"
          onChange={onImgHandler}
        />
        <input
          type="submit"
          value="submit"
          className="btnSubmit formBtns fundingBtn"
          name="submit"
        />
      </form>
    </div>
  );
}

export default FundingPage;

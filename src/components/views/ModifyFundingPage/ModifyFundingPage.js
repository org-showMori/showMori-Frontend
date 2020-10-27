import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {SESSION_ID} from "../../utils/SessionTypes";
import {beforeModifyFunding, modifyFunding} from "../../../_actions/fundingAction";



function ModifyFundingPage() {
    const dispatch = useDispatch();
    const userId = window.sessionStorage.getItem(SESSION_ID);
    
    const [Title, setTitle] =useState("");
    const [Poster, setPoster] = useState("");
    const [PosterImg, setPosterImg] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [LastDate, setLastDate] = useState("");
    const [GoalSum, setGoalSum] = useState(0);
    const [DeadLine, setDeadLine] = useState("");
    const [arrReward, setarrReward] = useState([]);
    const [Contents, setContents] = useState("");

    useEffect(() => {
        console.log(userId);
        const postId= 1;
        dispatch(beforeModifyFunding(postId)).then((response) => {
            console.log(response);
            setTitle(response.payload.title);
            setPoster(response.payload.poster);
            setStartDate(response.payload.start_day);
            setLastDate(response.payload.last_day);
            setGoalSum(response.payload.goal_sum);
            setDeadLine(response.payload.dead_line);
            setarrReward(response.payload.reward_list);
            setContents(response.payload.contents);
        })
    }, []);

    const onSubmitHandler = () => {
        
    }
    const onPosterHandler = (e) => {
        let fileList = e.target.files;
        let file = fileList[0]; //무조건 하나의 파일만 업로드 가능
        if (!/^image\//.test(file.type)) {
          alert("이미지 파일만 등록 가능합니다.");
          return false;
        }
        setPoster(file.name);
        //인코딩 img to base64
        encodeImageToBase64(file);
      };
    
      const encodeImageToBase64 = (file) => {
        let reader = new FileReader();
        //convert the file to base64 text
        reader.readAsDataURL(file);
        reader.onload = () => {
          setPosterImg(reader.result);
        };
      };
    const onStartDayHandler = (e) => {
        setStartDate(e.currentTarget.value);
      };
      const onLastDayHandler = (e) => {
        setLastDate(e.currentTarget.value);
      };
      const onGoalSumHandler = (e) => {
       setGoalSum(e.currentTarget.value);
      };
      const onDeadLineHandler = (e) => {
        setDeadLine(e.currentTarget.value);
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
                value={Title}
                disabled
              />
            
            </p>
            <p className="formInputLine">
              <label className="fundingLabel">포스터</label>
              <input type="file" name="poster" onChange={onPosterHandler} value={Poster} required/>
            </p>
            
            <p className="formInputLine">
              <label className="fundingLabel">첫 공연날짜</label>
              <input
                type="date"
                className="fundingInput"
                name="startDay"
                value={StartDate}
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
                value={LastDate}
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
                value={DeadLine}
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
                value={GoalSum}
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
              />{arrReward}</p>
             
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

export default ModifyFundingPage;
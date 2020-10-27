import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {beforeModifyFunding, modifyFunding} from "../../../_actions/fundingAction";



function ModifyFundingPage(props) {
    const dispatch = useDispatch();
    const [Poster, setPoster] = useState("");
    const [PosterImg, setPosterImg] = useState("");
    const [Title, setTitle] =useState("");
    const [StartDate, setStartDate] = useState("");
    const [LastDate, setLastDate] = useState("");
    const [GoalSum, setGoalSum] = useState(0);
    const [DeadLine, setDeadLine] = useState("");
    const [arrReward, setarrReward] = useState([]);
    const [ContentsImg, setContentsImg] = useState("");
    const [Contents, setContents] = useState("");


    useEffect(() => {

        const postId= 1;
        dispatch(beforeModifyFunding(postId)).then((response) => {
            console.log(response);
            setTitle(response.payload.title);
            setStartDate(response.payload.start_day);
            setLastDate(response.payload.last_day);
            setGoalSum(response.payload.goal_sum);
            setDeadLine(response.payload.dead_line);
            response.payload.reward_list.map((e) => {
              printRewardList(e.reward_money, e.reward);
            })
            
        })
    }, []);

    const onSubmitHandler = (e) => {
      e.preventDefault();

      let body = {
          poster: Poster,
          title: Title,
          poster_image: PosterImg,
          contents: Contents,
          total_donation: 0,
          goal_sum: GoalSum,
          dead_line: DeadLine,
          start_day: StartDate,
          last_day: LastDate,
          reward_list: arrReward,
          contents_image: ContentsImg,
      };
      console.log(body);
  
      dispatch(modifyFunding(body)).then((response) => {
        console.log(response);
  
        if(response.payload.validate && response.payload.success) {
          alert("펀딩게시에 성공하였습니다.");
          props.history.push('/');
        } else if(!response.payload.validate){
          alert("동일한 타이틀의 펀딩은 게시될 수 없습니다.");
          return false;
        } 
      });
    }
    const onImgHandler = (e) => {
        let fileList = e.target.files;
        let file = fileList[0]; //무조건 하나의 파일만 업로드 가능
        if (!/^image\//.test(file.type)) {
          alert("이미지 파일만 등록 가능합니다.");
          return false;
        }
        switch(e.currentTarget.name) {
          case "poster":
            setPoster(file.name);
            return  encodeImageToBase64(file,"poster"); //인코딩 img to base64
          case "contents": 
            setContents(file.name);
            return encodeImageToBase64(file,"contents"); //인코딩 img to base64
          default:
            return;
        }
       
       
      };
    
      const encodeImageToBase64 = (file,name) => {
        let reader = new FileReader();
        //convert the file to base64 text
        reader.readAsDataURL(file);
        reader.onload = () => {
          switch(name) {
            case "poster":
              return setPosterImg(reader.result);
            case "contents":
              return setContentsImg(reader.result);
            default:
              return;
          }
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

      const onAddRewardHandler = () => {
        const addDoMoney = document.querySelector("#donaMoneyInput").value;
        const addReward = document.querySelector("#rewardInput").value;
        printRewardList(addDoMoney,addReward);
      };

      const printRewardList = (addDoMoney, addReward) => {
        const rewardContainer = document.querySelector("#rewardListContainer");
        const rewardObj = {
          reward_money: addDoMoney,
          reward: addReward,
        };
        setarrReward(arrReward.concat(rewardObj));
        const rewardLi = document.createElement('p');
        const delBtn = document.createElement('input');
        delBtn.type = "button";
        delBtn.value = 'X';
        // delBtn.onClick = {};
        rewardLi.innerText = `후원금액 : ${addDoMoney} 리워드 : ${addReward}`;
        rewardLi.appendChild(delBtn);
        rewardContainer.appendChild(rewardLi);
      }

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
              <input type="file" name="poster" onChange={onImgHandler} required/>
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
              /></p>
              <div id="rewardListContainer"></div>
            </div>
            <p className="postFundingTitle">Contents</p>
            <input type="file" name="contents" className="fundingInput" onChange={onImgHandler}/>
          <input type="submit" value="submit" className="btnSubmit formBtns fundingBtn" name="submit" />
        </form>
      </div>
    );

}

export default ModifyFundingPage;
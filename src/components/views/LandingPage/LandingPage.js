import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import Banner from "../Banner/Banner";
import {
  getAllFundingInfo,
  getAllPostId,
} from "../../../_actions/fundingAction";
import PostCard from "./PostCard";
import { LS_FUNDINGS } from "../../utils/SessionTypes";
import queryString from "query-string";

const IMG_SRC = "data:image/jpeg;base64,";

function LandingPage(props) {
  const dispatch = useDispatch();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    let clientFundingList = window.localStorage.getItem(LS_FUNDINGS);

    //no funding-info in client-side
    if (
      clientFundingList === null ||
      clientFundingList === undefined ||
      clientFundingList === ""
    ) {
      console.log("없음");
      lsClear();
    }
    //funding-info is in client-side
    else {
      console.log("있음");

      //검색여부 판별
      const Keyword = queryString.parse(props.location.search).search; //props.loaction.search를 이용해 검색단어를 찾음
     
      if (Keyword !== undefined) {//검색결과 있는 경우
        console.log(Keyword);
        const currentList = JSON.parse(window.localStorage.getItem(LS_FUNDINGS)); //ls에 저장된 리스트 불러옴
        const filteredList = currentList.filter((e) => {
          //filter를 이용해 검색단어를 포함한 펀딩만 필터링
          return e.title.includes(Keyword);
        });
        return PrintPostCard(filteredList); //필터된 리스트를 출력해줌
        
      }

      const parsedClientFundingList = JSON.parse(clientFundingList);
      
      dispatch(getAllPostId()).then((response) => {
        console.log(response);
        const tempArr = response.payload;
        console.log(tempArr);
        console.log(parsedClientFundingList);
        parsedClientFundingList.map((e) => {
          //브라우저 ls의 공연정보와 서버의 공연정보가 다른 경우 (개수고려x)
          if (!tempArr.includes(e.post_id)) {
            console.log("포함하지 않음");
            return lsClear();
          }
          //서버와 브라우저의 공연정보 비교(개수고려O)
          else if(tempArr.length !== parsedClientFundingList.length) {
            console.log("개수가 다름");
            return lsClear();
          }
          return;
        });
      });
     
      PrintPostCard(parsedClientFundingList);
    }
  }, []);

  const lsClear = () => {
    console.log("ls실행");
    props.location.replace = '/posts';
    dispatch(getAllFundingInfo()).then((response) => {
      console.log(response);
      window.localStorage.setItem(
        LS_FUNDINGS,
        JSON.stringify(response.payload)
      );
      //  const newclientFundingList = window.localStorage.getItem(LS_FUNDINGS);
      console.log("lsclear로 새로 get");
      PrintPostCard(response.payload);
    });
  };

  const onClickMovePage = (e) =>{
    const clickedPostId = e.currentTarget.post_id;
    console.log(clickedPostId);
    props.history.push(`/posts/${clickedPostId}`); 

  }
  const PrintPostCard = (fundings) => {
    if (fundings.length !== 0) {
      setPostList(
        fundings.map((e, i) => {
          return (
            <Link to = {`/posts/${e.post_id}/${e.title}/${e.goal_sum}/${e.total_donation}/${e.dead_line}`}>
              <PostCard
                title={e.title}
                posterImg={`${IMG_SRC}${e.poster_image}`}
                goalsum={e.goal_sum}
                totalDonation={e.total_donation}
                deadLine={e.dead_line}
                postId={e.post_id}
                onClick={onClickMovePage}
                key={i}
              />
            </Link>
          );
        }) //검색결과가 있는 경우
      );
    } else {
      return setPostList("검색결과가 없습니다.");
    } //검색결과 없는 경우
  };
  return (
    <div className="printPostsPageContainer">
      <Banner />
      <div className="postCardContainer">{postList}</div>
    </div>
  );
}

export default LandingPage;

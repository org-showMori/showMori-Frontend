import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../Banner/Banner";
import { getFunding, delFunding } from "../../../_actions/fundingAction";
import PostCard from "./PostCard";
// import { HEADER } from "../../../_actions/type";

const IMG_SRC = "data:image/jpeg;base64,";
const LS_FUNDINGS = "currentFundings";

const calculateDday = (dday) => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  dday = dday.split("-");

  const cDday = new Date(dday[0], dday[1], dday[2]);
  const cToday = new Date(year, month, date);
  const cDay = 24 * 60 * 60 * 1000;

  return (cDday - cToday) / cDay;
};

function PrintPostPage() {
  const dispatch = useDispatch();
  const [postList, setPostList] = useState([]);
  let currentFundingList = [];

  useEffect(() => {
    console.log("useEffect 시작");

    let lsFundings = window.localStorage.getItem(LS_FUNDINGS);
    if (lsFundings === null || lsFundings === undefined || lsFundings === []) {
      let body = {};
      dispatch(getFunding(body)).then((response) => {
        console.log(response);
        window.localStorage.setItem(
          LS_FUNDINGS,
          JSON.stringify(response.payload)
        );
        currentFundingList = window.localStorage.getItem(LS_FUNDINGS);
        currentFundingList = JSON.parse(currentFundingList);
        printPostCard(currentFundingList);
      });
    } else {
      currentFundingList = window.localStorage.getItem(LS_FUNDINGS);
      let finishedIndex = [];
      currentFundingList = JSON.parse(currentFundingList);

      currentFundingList.map((e) => {
        
        if (calculateDday(e.dead_line) < 0) {
          //  펀딩종료된 펀딩 삭제 - server side (request)
          let body = {
            post_id: e.post_id,
          };
          dispatch(delFunding(body, e.post_id)).then((response) => {
            console.log(response);
            const deletedFundingId = Number(response.payload.user_id);
            finishedIndex.push(deletedFundingId);
            //펀딩종료된 펀딩 삭제 - client side
            currentFundingList = currentFundingList.filter(
              (e) => !finishedIndex.includes(e.post_id)
            );
            console.log(currentFundingList);
            window.localStorage.setItem(
              LS_FUNDINGS,
              JSON.stringify(currentFundingList)
            );
            printPostCard(currentFundingList);
          });
        }

        return finishedIndex;
      });
      printPostCard(currentFundingList);
    }
  }, []);

  const printPostCard = (currentFundingList) => {
    setPostList(
      currentFundingList.map((e, i) => {
        return (
          <PostCard
            title={e.title}
            posterImg={`${IMG_SRC}${e.image}`}
            goalsum={e.goal_sum}
            totalDonation={e.total_donation}
            deadLine={e.dead_line}
            postId={e.post_id}
            key={i}
          />
        );
      })
    );
  };

  return (
    <div className="printPostsPageContainer">
      <Banner />
      {/* // <img src="" id="asd" /> */}
      <div className="postCardContainer">{postList}</div>
    </div>
  );
}

export default PrintPostPage;

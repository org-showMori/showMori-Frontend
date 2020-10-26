import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Banner from "../Banner/Banner";
import {
  getAllFundingInfo,
  delFunding,
  getAllPostId,
} from "../../../_actions/fundingAction";
import PostCard from "./PostCard";

const IMG_SRC = "data:image/jpeg;base64";
const LS_FUNDINGS = "currentFundings";

function PrintPostPage(props) {
  const dispatch = useDispatch();
  const [postList, setPostList] = useState([]);

  useEffect(() => {

    const comparePostId = (parsedClientList) => {
      dispatch(getAllPostId()).then((response) => {
        parsedClientList.map((e) => {
          if(!response.payload.include(e.post_id)) {
            lsClearandGetAll();
          } 
          console.log(typeof(parsedClientList));
          return printPostCard(parsedClientList);
        })
      })
    };

    const lsClearandGetAll = () => {
      console.log("lsClear 시작");
      // window.localStorage.clear();
      // dispatch(getAllFundingInfo()).then((response) => {
      //   window.localStorage.setItem(
      //     LS_FUNDINGS,
      //     JSON.stringify(response.payload)
      //   );
      //   const newClientFundingList = JSON.parse(
      window.localStorage.getItem(LS_FUNDINGS);
      //   );
      // printPostCard(newClientFundingList);
      // });
    };

    const checkDeadLine = () => {
      const calculateDday = (dday) => {
        const newDate = new Date();
        const year = newDate.getFullYear();
        const month = newDate.getMonth() + 1;
        const date = newDate.getDate();
        dday = dday.split("-");

        const cDday = new Date(dday[0], dday[1], dday[2]);
        const cToday = new Date(year, month, date);
        const cDay = 24 * 60 * 60 * 1000;
        const leftDay = (cDday - cToday) / cDay;

        if (leftDay < 0) {
          return false;
        } else {
          return true;
        }
      };
    };
    const printPostCard = (fundings) => {
      setPostList(
        fundings.map((e, i) => {
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

    if (clientFundingList === null || clientFundingList === undefined) {
      lsClearandGetAll();  
    }

    let clientFundingList = window.localStorage.getItem(LS_FUNDINGS);
    comparePostId(JSON.parse(clientFundingList)); 

  });

  return (
        <div className="printPostsPageContainer">
          <Banner />
          <div className="postCardContainer">{postList}</div>
        </div>
      );
}

export default PrintPostPage;



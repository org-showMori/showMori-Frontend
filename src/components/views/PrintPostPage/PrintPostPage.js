import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../Banner/Banner";
import { getAllFundingInfo, getAllPostId } from "../../../_actions/fundingAction";
import PostCard from "./PostCard";

const IMG_SRC = "data:image/jpeg;base64,";
const LS_FUNDINGS = "currentFundings";

function PrintPostPage(props) {
   const dispatch = useDispatch();
   const [postList, setPostList] = useState([]);

   useEffect(() => {
     console.log(props.location.search);
    let clientFundingList = window.localStorage.getItem(LS_FUNDINGS);

    //no funding-info in client-side
     if(clientFundingList === null || clientFundingList === undefined || clientFundingList === '') {
      console.log("없음");
      lsClear();
     } 
     //funding-info is in client-side
     else {
      console.log("있음");
       dispatch(getAllPostId()).then((response) => {
         console.log(response);
          const tempArr = response.payload;
          console.log(tempArr);
          JSON.parse(clientFundingList).map((e) => {
           if(!tempArr.includes(e.post_id)) {
             console.log("포함하지 않음");
            lsClear();
           } 
         })
       })
      const parsedClientFundingList = JSON.parse(clientFundingList);
      PrintPostCard(parsedClientFundingList);
     } 
   }, []);

   const lsClear = () => {
     console.log("ls실행");
    dispatch(getAllFundingInfo()).then((response) => {
      console.log(response);
      window.localStorage.setItem(LS_FUNDINGS, JSON.stringify(response.payload));
    //  const newclientFundingList = window.localStorage.getItem(LS_FUNDINGS);
      PrintPostCard(response.payload);
    })
   }
   const PrintPostCard = (fundings) => {
    
    setPostList(
      fundings.map((e, i) => {
        return (
          <PostCard
            title={e.title}
            posterImg={`${IMG_SRC}${e.poster_image}`}
            goalsum={e.goal_sum}
            totalDonation={e.total_donation}
            deadLine={e.dead_line}
            postId={e.post_id}
            key={i}
            
          />
        );
      })
    );
  }
    return (
    <div className="printPostsPageContainer">
      <Banner />
      <div className="postCardContainer">{postList}</div>
    </div>
  );
}

export default PrintPostPage;


// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import Banner from "../Banner/Banner";
// import { getFunding, delFunding, getAllPostId } from "../../../_actions/fundingAction";
// import PostCard from "./PostCard";

// const IMG_SRC = "data:image/jpeg;base64,";
// const LS_FUNDINGS = "currentFundings";

// const calculateDday = (dday) => {
//   const newDate = new Date();
//   const year = newDate.getFullYear();
//   const month = newDate.getMonth() + 1;
//   const date = newDate.getDate();
//   dday = dday.split("-");

//   const cDday = new Date(dday[0], dday[1], dday[2]);
//   const cToday = new Date(year, month, date);
//   const cDay = 24 * 60 * 60 * 1000;

//   return (cDday - cToday) / cDay;
// };

// function PrintPostPage(props) {
//    const dispatch = useDispatch();

//    useEffect(() => {
//     let clientFundingList = window.localStorage.getItem(LS_FUNDINGS);
    
//     //no funding-info in client-side
//      if(clientFundingList === null || clientFundingList === undefined || clientFundingList === '') {
     
//       dispatch(getFunding()).then((response) => {
//         console.log(response);
//         window.localStorage.setItem(LS_FUNDINGS, JSON.stringify(response.payload));
//         clientFundingList = window.localStorage.getItem(LS_FUNDINGS);
//         PrintPostPage(JSON.parse(clientFundingList));
//       })
//      } 
//      //funding-info is in client-side
//      else {
//        let serverDeletedFundingList = [];
//        //check if funding is ended (due to passed dead-line)
//       clientFundingList.map((e) => {
//         //there's funding those dead-line was passed
//         if(calculateDday(e.dead_line) < 0) {
//           let body = {
//             post_id: e.post_id
//           };
//           dispatch(delFunding(body)).then((response) => {
//             serverDeletedFundingList.push(response.payload.user_id);
//           })
//         } 
//         //every fundings is on-going
//         else {
//           dispatch(getAllPostId()).then((response) => {
            
//           })
//         }
//       })
//      } 
//    }, []);

//    const printPostCard = (fundings) => {
//     setPostList(
//       fundings.map((e, i) => {
//         return (
//           <PostCard
//             title={e.title}
//             posterImg={`${IMG_SRC}${e.image}`}
//             goalsum={e.goal_sum}
//             totalDonation={e.total_donation}
//             deadLine={e.dead_line}
//             postId={e.post_id}
//             key={i}
//           />
//         );
//       })
//     );
//   }
//     return (
//     <div className="printPostsPageContainer">
//       <Banner />
//       <div className="postCardContainer">{postList}</div>
//     </div>
//   );
// }

// export default PrintPostPage;
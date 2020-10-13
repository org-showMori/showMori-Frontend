import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Banner from "../Banner/Banner";
import { getFunding } from "../../../_actions/fundingAction";
import PostCard from "./PostCard";

function PrintPostPage() {
  const dispatch = useDispatch();
  const [postList, setPostList] = useState([]);

  const newDate = new Date();
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();

  useEffect(() => {
    console.log("useEffect 시작");
    let body = {
      today: `${year}-${month}-${date}`,
    };
    dispatch(getFunding(body)).then((response) => {
      console.log(response);

      // base64로 받아서 이미지 출력하는 코드.....
    //   let src = "data:image/jpeg;base64,";
    //   src += response.payload;
    //  const img = document.querySelector("#asd");
    // img.src = src;

      setPostList(
        response.payload.post.map((e, i) => {
          console.log(e);
          let src = "data:image/jpeg;base64,";
          src += e.poster;
          return (
            <PostCard
              title={e.title}
              poster={src}
              goalsum={e.goal_sum}
              totalDonation={e.total_donation}
              deadLine={e.dead_line}
              postId={e.post_id}
              key={i}
            />
          );
      })
      );
    });
  }, []);

  return (
    <div className="printPostsPageContainer">
      <Banner />
     {/* // <img src="" id="asd" /> */}
      <div className="postCardContainer">{postList}</div>
    </div>
  );
}

export default PrintPostPage;

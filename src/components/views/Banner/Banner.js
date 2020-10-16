import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div id="bannerContainer">
        <div id="bannerContents">
          <h2 className="bannerTitle">
            CROWD FUNDING SHOW-MORI
          </h2>
          <p>
            크라우드 펀딩을 통한 후원형 공연 온라인 플랫폼 SHOW-MORI입니다.</p>
            <p>
            후원이 필요한 공연을 직접 런칭하고 다양한 분야의 공연에 후원해
            보세요.
          </p>
        </div>
      </div>
    );
  }
}

export default Banner;

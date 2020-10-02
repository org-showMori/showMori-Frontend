import React from 'react';
import BannerImg from './mainpicture.jpg';

class Banner extends React.Component {
    render() {
        return (
            <div>
                <img src={BannerImg} alt="bannerImg" />
                <div class="banner">
                    <h2>CROWD FUNDING <b>SHOW-MORI</b></h2>
                    <div>
                        크라우드 펀딩을 통한 후원형 공연 온라인 플랫폼 SHOW-MORI입니다.
                        후원이 필요한 공연을 직접 런칭하고 다양한 분야의 공연에 후원해 보세요.
                    </div>
                </div>
            </div>
            
        );

    }
}

export default Banner;
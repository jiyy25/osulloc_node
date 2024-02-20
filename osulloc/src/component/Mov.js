import { Link } from 'react-router-dom';
import { MoreBtn, BmoreBtn } from '../styled/Btns';
import { BigTitle, SmallTitle } from '../styled/Title';
import "@fontsource/noto-sans-kr/200.css"
import "@fontsource/noto-sans-kr/300.css"

const Mov = () => {

    return (
        <div className='videoZone mbt-100'>
            <BigTitle>오설록 프리미엄 말차 즐기는 법</BigTitle>
            <SmallTitle className='smT'>차와 함께하는 삶, 각자의 취향이 묻어있는레시피와 인터뷰를 만나보세요.</SmallTitle>
            <div class="video-foreground pc-view position-relative">
                <iframe title='osulloc' className="main-player mb-1" allow="autoplay" src="https://player.vimeo.com/video/886319527?background=1&amp;api=1" width="1280" height="720" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-ready="true"></iframe>

                <div className='descBox'>
                    <BigTitle className='panna'>세상 모든 커플의 사랑을 응원하는<br />
                        말차 판나코타</BigTitle>
                    <Link to="/event"><MoreBtn className=' d-none d-lg-block'>자세히보기</MoreBtn></Link>
                    <Link to="/event"><BmoreBtn className='d-lg-none'>자세히보기</BmoreBtn></Link>
                </div>
            </div>
        </div>
    )
};

export default Mov;

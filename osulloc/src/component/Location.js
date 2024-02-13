import { BigTitle, SmallTitle } from '../styled/Title'
import { BmoreBtn } from '../styled/Btns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Location(props) {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class=" ${className} dot">${index + 1}</span>`;
        },
    };

    return (
        <div className='OsllcocLocation mb-100 container'>
            <BigTitle>매장소개</BigTitle>
            <SmallTitle>오프라인 매장에서 다채로운 오설록을 경험하세요.</SmallTitle>
            <div className='locationSwiper mb-5 position-relative'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={
                        pagination
                    }
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    navigation={
                        { nextEl: ".swiperNB", prevEl: ".swiperPB" }
                    }
                >
                    {props.datasrc.map((e, i) => {
                        return (
                            <SwiperSlide>
                                <Link to="/event" style={{ backgroundImage: `url(${e.imgsrc})` }}>
                                    <div className='textBox'>
                                        <strong>{e.location.split('|').map((ee, ii) => {
                                            return (
                                                <Fragment key={ii}>
                                                    {ee}
                                                    <br />
                                                </Fragment>)
                                        })

                                        }</strong>
                                        <p>{e.o_desc.split('|').map((ee, ii) => {
                                            return (
                                                <Fragment key={ii}>
                                                    {ee}
                                                    <br />
                                                </Fragment>
                                            )
                                        })}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )

                    })

                    }

                </Swiper>
                <div className='d-flex position-absolute start-0 end-0 top-50 btnBox justify-content-between mx-3'>
                    <button className='swiperPB' ></button>
                    <button className='swiperNB' ></button>
                </div>
            </div>
            <BmoreBtn>전체 매장 둘러보기</BmoreBtn>
        </div >
    )
}

export default Location

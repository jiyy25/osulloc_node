import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MoreBtn } from '../styled/Btns';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function App(props) {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class=" ${className} dot">${index + 1}</span>`;
        },
    };
    return (
        <div className='jyySwiper position-relative'>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                loop={true}
                navigation={
                    { nextEl: ".swiperNB", prevEl: ".swiperPB" }
                }
                pagination={pagination}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    props.datasrc.map((v, i) => {
                        return (
                            <SwiperSlide>
                                <div className='imgBox position-relative'>
                                    <div>
                                        <a href="none">
                                            <img src={v.imgsrc} alt={v.alt} className='d-none d-lg-block' />
                                            <img src={v.sm_imgsrc} alt={v.alt} className='d-lg-none' />
                                        </a>
                                        <div className='container d-none d-lg-block  position-absolute m-lg-auto start-0 end-0 top-50 translate-middle-y descBox mb-5'>
                                            <strong>
                                                {v.text.split('|').map((vv, ii) => {
                                                    return (
                                                        <Fragment key={ii}>
                                                            {vv}
                                                            < br />
                                                        </Fragment>
                                                    )
                                                })}
                                            </strong>
                                            <p className='mb-5'>
                                                {v.sm_text.split('|').map((vv, ii) => {
                                                    return (
                                                        <Fragment key={ii}>
                                                            {vv}
                                                            < br />
                                                        </Fragment>
                                                    )
                                                })}
                                            </p>
                                            <MoreBtn className='moreBtn'>자세히보기</MoreBtn>
                                        </div>
                                        <div className='d-lg-none position-absolute start-0 end-0 top-0 bottom-0 d-flex flex-column justify-content-end pb-5 px-5 align-items-center text-center descBox'>
                                            <strong>
                                                {v.text.split('|').map((vv, ii) => {
                                                    return (
                                                        <Fragment key={ii}>
                                                            {vv}
                                                            < br />
                                                        </Fragment>
                                                    )
                                                })}
                                            </strong>
                                            <p className='mb-3'>
                                                {v.sm_text.split('|').map((vv, ii) => {
                                                    return (
                                                        <Fragment key={ii}>
                                                            {vv}
                                                            < br />
                                                        </Fragment>
                                                    )
                                                })}
                                            </p>
                                            <MoreBtn className='moreBtn'>자세히보기</MoreBtn>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <div className='d-flex position-absolute start-0 end-0 top-50 btnBox justify-content-between mx-3'>
                    <button className='swiperPB' ></button>
                    <button className='swiperNB' ></button>
                </div>

            </Swiper >

        </div >
    );
}

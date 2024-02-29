import React from 'react'
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function BrandSwipe(props) {
    return (
        <div className='history pt-5 pb-5 mb-5'>
            <h3 className='text-center'>Since 1979</h3>
            <p className='text-center m-2'>차밭을 개간한 집념을 근간으로 차를 재배하고, 가공 발효하여 세계적으로 권위있는 명차 대회에서<br />꾸준히 수상을 이어가며 증명된 오설록의 차는 이제 전 세계의 사람들과 만나고 있습니다.</p>
            <div className='historySwipe m-5'>
                <Swiper
                    centeredSlides={true}
                    slidesPerView={4}
                    speed={6000}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        type: 'progressbar',
                    }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: true,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >

                    {
                        props.historyData.map((e, i) => {
                            return (
                                <SwiperSlide>
                                    <div>
                                        <img src={e.img} alt="" />
                                        <span>{e.year}</span>
                                        <p>{e.txt}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }


                </Swiper>
            </div>
        </div>

    )
}

export default BrandSwipe

import React, { Fragment } from 'react'
import { BigTitle, SmallTitle } from '../styled/Title'
import { GreenBtn } from '../styled/Btns';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Event(props) {
    return (
        <div className='o_event mt-150 mb-100'>
            <BigTitle>오설록 이달의 챌린지</BigTitle>
            <SmallTitle>오설록 프리미엄 말차 즐기는 법<br />
                오설록을 더 알차게 즐기는 방법을 소개해주세요.</SmallTitle>
            <div className='racipeArea container pt-5'>
                <h3 className='d-flex align-items-center mb-2'>이달의 레시피</h3>
                <p>세상 모든 커플의 사랑을 응원하는말차 판나코타</p>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <div className='ingredients mt-4'>
                            <div className='titleBox d-flex align-items-center'>
                                <img className='eventIcon' src="/img/ico/icon_ingredient.png" alt="재료아이콘" />
                                <span className='smT'>재료</span>
                                <span className='mx-2 smTen'>INGREDIENTS</span>
                            </div>
                            <ul>
                                <li>
                                    <span class="number">1)</span>
                                    <span>젤라틴</span>
                                </li>
                                <li>
                                    <span class="number">2)</span>
                                    <span>생크림</span>
                                </li>
                                <li>
                                    <span class="number">3)</span>
                                    <span>우유</span>
                                </li>
                                <li>
                                    <span class="number">4)</span>
                                    <span>바닐라 빈</span>
                                </li>
                                <li>
                                    <span class="number">5)</span>
                                    <span>설탕</span>
                                </li>
                                <li>
                                    <span class="number">6)</span>
                                    <span>오설록 프리미엄 말차</span>
                                </li>
                            </ul>
                        </div>
                        <div className='racipe mt-5'>
                            <div className='titleBox d-flex align-items-center'>
                                <img className='eventIcon' src="/img/ico/icon_recipe.png" alt="레시피아이콘" />
                                <span className='smT'>레시피</span>
                                <span className='mx-2 smTen'>RECIPE</span>
                            </div>
                            <ul>
                                <li>
                                    <span class="number">STEP 1</span>
                                    <p>젤라틴을 차가운 물에 10분간 불려줍니다.</p>
                                </li>
                                <li>
                                    <span class="number">STEP 2</span>
                                    <p>불린 젤라틴을 생크림 100ml, 우유 100ml, 바닐라 빈 1/2개, 설탕 1Tsp과 함께 가열해줍니다.<br />(가열 후에는 바닐라 향이 잘 스미도록 5분간 방치해 두세요.)</p>
                                </li>
                                <li>
                                    <span class="number">STEP 3</span>
                                    <p>컵에 붓고 냉장고에서 차갑게 식혀줍니다.</p>
                                </li>
                                <li>
                                    <span class="number">STEP 4</span>
                                    <p>말차파우더 7g, 설탕 25g, 생크림 100ml를 휘핑해 올려줍니다.</p>
                                </li>
                                <li>
                                    <span class="number">STEP 5</span>
                                    <p>톡톡 상큼, 제주영귤 콤부차와 곁들여 맛있게 드세요.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='imgur'>
                        <img src="https://i.ibb.co/qJsr8XL/CK-pc0031078294.jpg" alt="" />
                        <a className='d-block border text-center p-3 mt-1 abtn' href="https://www.youtube.com/watch?v=QDiZUF4HE3A" target="_blank" rel="noopener noreferrer">유튜브에서 보기</a>
                    </div>
                </div>

            </div>
            <div className='togetherPd container mt-5'>
                <div className='titleBox d-flex align-items-center pt-5'>
                    <img className='eventIcon' src="/img/ico/icon_related_product.png" alt="티백아이콘" />
                    <span className='smT'>함께한 제품</span>
                    <span className='mx-2 smTen'>RELATED PRODUCT</span>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <img src="/img/sub/recipe_11_related_prd.png" alt="" />
                    <div className='gotoPd text-center'>
                        <span>프리미엄 말차</span>
                        <p className='mb-4'>23,000원</p>
                        <a className='d-block border text-center p-3 mt-1 abtn' href="https://www.youtube.com/watch?v=QDiZUF4HE3A" target="_blank" rel="noopener noreferrer">상품보기</a>
                    </div>
                </div>
            </div>

            <div className='review container mt-5'>
                <div className='titleBox d-flex align-items-center pt-5'>
                    <img className='reveiwIcon mx-3' src="/img/ico/ic_write_black_pc.svg" alt="참여 아이콘" />
                    <span className='smT'>챌린지 참여하기</span>
                </div>
            </div>

            <div className="reviewSwiper mt-5">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    navigation={
                        { nextEl: ".swiperNB", prevEl: ".swiperPB" }
                    }
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 10
                        },

                        625: {
                            slidesPerView: 2.2,
                            spaceBetween: 20
                        },


                        992: {
                            slidesPerView: 2.8,
                            spaceBetween: 30

                        },
                        1500: {
                            slidesPerView: 3.8,
                            spaceBetween: 30
                        },
                        1900: {
                            slidesPerView: 4.5,
                            spaceBetween: 30
                        }

                    }}

                >
                    {props.datasrc.map((e, i) => {
                        return (
                            <SwiperSlide key={i} className='d-flex justify-content-center mb-4'>
                                <div className='imgBox'>
                                    <img src={e.imgsrc} alt="" />
                                    <div className='textBox pt-4 pb-5'>
                                        <strong className='d-block mx-3'>{e.re_text}</strong>
                                        <span className='mx-3'>{e.userid}</span>
                                        <span>{e.date}</span>
                                    </div>

                                </div>

                            </SwiperSlide>
                        )

                    })

                    }
                </Swiper>
                <GreenBtn className='mx-auto mt-5 mb-5 d-block'>챌린지 참여하기</GreenBtn>
            </div>
        </div >
    )
}

export default Event

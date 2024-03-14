import React, { useState, useEffect } from 'react'
import { BigTitle, SmallTitle } from '../styled/Title'
import { GreenBtn } from '../styled/Btns'
import ProductBox from '../component/ProductBox'
import { Link, useLocation } from 'react-router-dom'
import Form from './Form'



function Subscribepage(props) {
    //상품필터링
    const pickpro = props.datasrc && props.datasrc.filter((items) => items.taplist_id === 9)
    // console.log(pickpro)

    return (
        <div className='o_dada mt-150 mb-100'>
            <BigTitle>이달의 다다일상</BigTitle>
            <SmallTitle className='dada_p'>오설록 티 소믈리에가 그달의 테마와 어울리는 <br className='d-sm-none'/>  차들을 선정하여 보내드립니다.<br />매월 향기로운 선물같은 일상을 선사합니다.</SmallTitle>
            <div className='bestProduct row justify-content-between align-items-center mt-5 mx-auto'>
                <ProductBox datasrc={pickpro && pickpro} bestPage={'shop'} priceNone={'none'} cardnum={4}></ProductBox>
            </div>
            <SmallTitle className='dada_p'>취향을 듬뿍담아 즐기기 좋은 <br className='d-sm-none' /> 티모음으로 구성되었습니다.<br />이달의 찻자리에 함께할 <br className='d-sm-none' /> 다다일상 구성을 만나보세요.</SmallTitle>

            <div className='dada container pb-5'>
                <h3 className='pt-5'>다다일상 구독혜택</h3>
                <div className='dadaBox border mt-4'>
                    <span className='border-bottom width-100 d-block p-3 text-center won'>매월 결제 24900원</span>
                    <div className='dada_icos d-flex justify-content-evenly p-5'>
                        <div className='dada_ico flex-column align-items-center'>
                            <img src="/img/ico/icon1_ben.png" alt="" className='dadaicon' />
                            <span className='d-block text-center mt-2'>무료배송</span>
                        </div>
                        <div className='dada_ico d-flex flex-column align-items-center'>
                            <img src="/img/ico/icon2_ben.png" alt="" className='dadaicon'/>
                            <span className='d-block text-center mt-2'>랜덤으로 제공되는<br />
                                다양한 티 제품  </span>
                        </div>
                        <div className='dada_ico d-flex flex-column align-items-center'>
                            <img src="/img/ico/icon3_ben.png" alt="" className='dadaicon'/>
                            <span className='d-block text-center mt-2'>흥미로운 티 이야기를 <br />
                                담은 이 달의 티 레터</span>
                        </div>
                        <div className='dada_ico d-flex flex-column align-items-center'>
                            <img src="/img/ico/icon4_ben.png" alt="" className='dadaicon'/>
                            <span className='d-block text-center mt-2'>나만의 티 라이프를 <br />
                                소개하는 챌린지</span>
                        </div>
                    </div>
                    <Form></Form>
                </div>
            </div>
            <div className='subscribe_dada container text-center mt-5'>
                <img src="https://i.ibb.co/VSKFcMX/osulloc19.jpg" alt="" />
                <span className='d-block p-2'>챌린지 리워드</span>
                <p>총 10분께
                    오설록 제품을 선물로 드립니다.
                </p>
                <Link to="/event"><GreenBtn className='mt-4 mb-5'>이달의 챌린지 가기</GreenBtn></Link>
            </div>
        </div>
    )
}

export default Subscribepage

import React from 'react'
import { BigTitle, SmallTitle } from '../styled/Title'
import { BmoreBtn } from '../styled/Btns'




function Subscribe() {
    return (
        <div className='subscriptZone mb-100'>
            <BigTitle>다다일상 기록</BigTitle>
            <SmallTitle className='smT'>오설록 티 소믈리에가 그달의 테마와 어울리는 차들을 선정하여 보내드립니다.</SmallTitle>
            <div className='subscriptBnr d-none d-none d-lg-block'>
                <div className='subText containerjy lg-mx-5'>
                    <div className='subLogo'></div>
                    <div className='title'>다다일상은 다채롭고 다양한 일상을 위한<br />
                        오설록만의 특별한 차 구독 서비스입니다.</div>
                    <p className='descP'>매일 똑같은 하루가 지겹다면 티 한잔으로 당신의 일상에 색깔을 불어넣으세요.<br />
                        다채로운 차 향기로 더욱 풍요로워지는 티 라이프를 만나보세요.</p>
                </div>
            </div>
            <div className='subscriptBnrsm d-lg-none position-relative'>
                <div className='subText containerjy lg-mx-5 d-flex align-items-center justify-content-center'>
                    <div className='subLogo position-absolute'></div>
                    <div className='textbox position-absolute bottom-0 start-0 end-0 text-center'>
                        <div className='title'>다다일상은 다채롭고 다양한 일상을 위한<br />
                            오설록만의 특별한 차 구독 서비스입니다.</div>
                        <p className='descP'>매일 똑같은 하루가 지겹다면 티 한잔으로 <br className='d-sm-none' />  당신의 일상에 색깔을 불어넣으세요.<br />
                            다채로운 차 향기로 더욱 풍요로워지는 티 라이프를 만나보세요.</p>
                    </div>
                </div>
            </div>
            <BmoreBtn className='mt-5'>자세히보기</BmoreBtn>
        </div>
    )
}

export default Subscribe

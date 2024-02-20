import React, { useEffect } from 'react'
import { BigTitle, SmallTitle } from '../styled/Title'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

function BestCategory() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in',
            once: true,
        })
    }, []);
    return (
        <div className='BestCategory container mb-100'>
            <BigTitle>베스트 카테고리</BigTitle>
            <SmallTitle className='smT'>다채로운 차 향기로 더욱 풍요로워지는 티 라이프를 만나보세요.</SmallTitle>
            <div className='categoryBoxZone row'>
                <div className='cateBox1 cateBox col-lg-6 col-12' data-aos="flip-left">
                    <div className='mt-5 mx-4'>
                        <strong>티제품</strong>
                        <p>취향과 기분에 따라 다채로운<br />맛과 향을 즐기기 좋은, <br />알찬 구성의 베스트셀러 티 세트</p>
                        <Link to="/event">더보기</Link>
                    </div>
                </div>
                <div className='cateBox2 cateBox col-lg-6 col-12' data-aos="flip-right">
                    <div className='mt-5 mx-4'>
                        <strong>티푸드</strong>
                        <p>오설록 제주 차밭에서 자란<br />
                            초록빛 말차의 깊은 풍미를 담다</p>
                        <Link to="/event">더보기</Link>
                    </div>

                </div>
                <div className='cateBox3 cateBox col-12' data-aos="flip-up">
                    <div className='mt-5 mx-4'>
                        <strong>설 리미티드 에디션 <br className='d-lg-none' />보자기 포장 선물 세트</strong>
                        <p>마스터의 블렌딩으로 탄생한 오설록만의 <br />제주의 향기를 담은 대표 블렌디드 티 모음 세트<br />
                            설 리미티드 티 세트로따뜻한 마음을 전해보세요.</p>
                        <Link to="/event">더보기</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BestCategory

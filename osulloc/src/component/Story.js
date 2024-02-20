import React from 'react'
import { BigTitle, SmallTitle, DescP } from '../styled/Title'
import { MoreBtn } from '../styled/Btns'

function Story() {
    return (
        <div className='osullocStory mb-100'>
            <div className='storyImg'>
                <div className='bgblack position-relative'>
                    <div className='storyTextBox position-absolute'>
                        <BigTitle>오설록 이야기</BigTitle>
                        <DescP className='descP mb-3'>약 100만 평에 달하는 3개의 오설록 유기농 차밭은<br className='d-sm-none' /> 화산섬의 지역적 기후 환경에 따라<br className='d-sm-none' />  각각의 색과 향, <br className='d-sm-none' /> 그리고 맛이 특별한 차를 생산하고 있습니다.</DescP>
                        <MoreBtn>자세히보기</MoreBtn>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Story

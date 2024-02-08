import React from 'react'
import { BigTitle, SmallTitle } from '../styled/Title'
import { BmoreBtn } from '../styled/Btns'
import ProductBox from './ProductBox'

function Bestseller(props) {
    return (
        <div className='BestSeller container mb-100'>
            <BigTitle>베스트 셀러</BigTitle>
            <SmallTitle>오늘은 어떤 차를 마셔볼까요?</SmallTitle>
            <div className='bestProduct row justify-content-between align-items-center'>
                <ProductBox datasrc={props.datasrc}></ProductBox>
            </div>
            <BmoreBtn>더보기</BmoreBtn>
        </div>

    )
}

export default Bestseller

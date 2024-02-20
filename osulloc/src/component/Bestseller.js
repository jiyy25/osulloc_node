import React from 'react'
import { BigTitle, SmallTitle } from '../styled/Title'
import { BmoreBtn } from '../styled/Btns'
import ProductBox from './ProductBox'
import { Link } from 'react-router-dom'

function Bestseller(props) {
    return (
        <div className='BestSeller container mb-100'>
            <BigTitle>베스트 셀러</BigTitle>
            <SmallTitle className='smT'>오늘은 어떤 차를 마셔볼까요?</SmallTitle>
            <div className='bestProduct row justify-content-between align-items-center'>
                <ProductBox datasrc={props.datasrc} cardnum={4} bestPage={'Seller'}></ProductBox>
            </div>
            <Link to='/shop/best'><BmoreBtn>더보기</BmoreBtn></Link>
        </div>

    )
}

export default Bestseller

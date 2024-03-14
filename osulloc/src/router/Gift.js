import React, { useRef } from 'react'
import { H3Title, SmallTitle } from '../styled/Title'
import ProductBox from '../component/ProductBox'

function Gift(props) {
    const cardnum = useRef(8);

    //선물세트 상품 필터링
    const pickgift = props.datasrc && props.datasrc.filter((items) => { return (items.taplist_id === 10) })
    console.log(pickgift)
    return (
        <div className='shopGift mb-100'>
            <div className='back_img position-relative' style={{ backgroundImage: "url('/img/banner/best_banner.jpg')" }}>
                <h2 className='position-absolute top-50 start-50 translate-middle'>선물추천</h2>
            </div>
            <div className='shop_productList mt-5 pt-5 container'>
                <H3Title>선물이 고민될 때</H3Title>
                <SmallTitle className='smT'>예쁜 패키지의 오설록 선물 세트 <br className='d-sm-none'/>어때요?</SmallTitle>
                <div className='bestProduct row justify-content-between align-items-center'>
                    <ProductBox datasrc={pickgift && pickgift} cardnum={cardnum.current} bestPage={'gift'}></ProductBox>
                </div>
            </div>
        </div >
    )
}

export default Gift

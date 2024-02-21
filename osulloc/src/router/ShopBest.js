import React, { useRef } from 'react'
import { H3Title, SmallTitle } from '../styled/Title'
import ProductBox from '../component/ProductBox'


function ShopBest(props) {

    const cardnum = useRef(12);


    return (
        <div className='shopBest mb-100'>
            <div className='back_img position-relative' style={{ backgroundImage: "url('/img/banner/best_banner.jpg')" }}>
                <h2 className='position-absolute top-50 start-50 translate-middle'>베스트</h2>
            </div>
            <div className='shop_productList mt-5 pt-5 container'>
                <H3Title>베스트셀러</H3Title>
                <SmallTitle>이달의 베스트 오설록 {cardnum.current}위</SmallTitle>
                <div className='bestProduct row justify-content-between align-items-center'>
                    <ProductBox datasrc={props.datasrc} cardnum={cardnum.current} bestPage={'best'}></ProductBox>
                </div>
            </div>
        </div >
    )
}

export default ShopBest

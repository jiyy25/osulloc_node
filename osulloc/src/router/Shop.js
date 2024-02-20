import React, { useState } from 'react'
import { H3Title, SmallTitle } from '../styled/Title'
import ProductBox from '../component/ProductBox'

function Shop(props) {
    const [tap, setTap] = useState(0)
    const handleCategoryClick = (idx) => {
        setTap(idx)
    }
    const filterProducts = props.datasrc.product.filter((product) => {
        if (tap === 0) {
            return true;
        } else {
            return product.category === props.datasrc
        }
    })
    return (
        <div className='shop mb-100'>
            <div className='back_img position-relative' style={{ backgroundImage: "url('/img/banner/best_banner.jpg')" }}>
                <h2 className='position-absolute top-50 start-50 translate-middle'>타이틀</h2>
            </div>
            {/* 맵용 */}
            {/* {
                props.datasrc.shop && props.datasrc.shop.map((e, i) => {
                    return (
                        <div className='back_img position-relative' style={{ backgroundImage: "url('/img/banner/best_banner.jpg')" }}>
                            <h2 className='position-absolute top-50 start-50 translate-middle'>{e.cate_title}</h2>
                        </div>
                    )
                })
            } */}

            <div className='shop_productList mt-5 pt-5 container'>
                <H3Title>타이틀</H3Title>
                <SmallTitle className='mb-2'>총 ?개의 상품이 있습니다.</SmallTitle>
                {/* {
                    props.datasrc.shop && props.datasrc.shop.map((e, i) => {
                        return (
                            <>
                                <H3Title>{e.cate_title}</H3Title>
                                <SmallTitle>총 0개의 상품이 있습니다.</SmallTitle>
                            </>
                        )
                    })
                } */}
                <div className='category mb-4'>
                    <ul className='d-flex align-items-center justify-content-center'>
                        {
                            props.datasrc.category.map((e, idx) => {
                                return <li onClick={() => { handleCategoryClick(idx) }}>{e.cate_title}</li>
                            })
                        }

                    </ul>
                </div>
                <div className='bestProduct row align-items-center'>
                    <ProductBox datasrc={props.datasrc.product} bestPage={'shop'}></ProductBox>
                </div>
            </div>
        </div >
    )
}

export default Shop

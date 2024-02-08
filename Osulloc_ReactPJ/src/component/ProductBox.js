import React from 'react'

function ProductBox({ datasrc }) {
    return (
        <>
            {
                datasrc.slice(0, 4).map((v, i) => {
                    return (
                        <div className='productBox col-lg-3 col-6 mb-5'>
                            <a href="">
                                <img src={v.imgsrc} alt={v.alt} />
                            </a>
                            <div className='textBox mt-2'>
                                <div className='title'><a href="">{v.title}</a></div>
                                <div className='desc'>{v.text}</div>
                                <div className='price'>{v.price}원</div>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default ProductBox

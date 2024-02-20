import React from 'react'
import { Link } from 'react-router-dom'

function ProductBox({ datasrc, cardnum, bestPage }) {
    return (
        <>
            {
                //cardnum으로 slice할 숫자를 받아올 수 있다.
                //특정 페이지에서는 특정스타일을 추가함
                datasrc.slice(0, cardnum).map((v, i) => {
                    return (
                        <div className='productBox col-lg-3 col-6 mx-auto mb-4 mb-sm-5 text-center position-relative' key={i}>
                            <span className={`position-absolute top-0
                            ${bestPage === "best" ? 'bestnum' :
                                    (bestPage === "Seller" ? 'bestnum2' : 'd-none')}
                            `}>{i + 1}</span>
                            <Link to="">
                                <img src={v.imgsrc} alt={v.alt} />
                            </Link>
                            <div className='textBox mt-2'>
                                <div className='title'><Link to="">{v.title}</Link></div>
                                <div className='desc'>{v.text}</div>
                                <div className='price'>{v.price}원</div>
                            </div>
                        </div >
                    )
                })
            }
        </>

    )
}

export default ProductBox

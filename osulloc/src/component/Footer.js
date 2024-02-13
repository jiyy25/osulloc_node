import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-dark pt-5 pb-4 px-5 '>
            <div className='container d-lg-flex align-items-start justify-content-between'>
                <div className='f_logo d-none d-lg-block col-1'>
                    <Link to='/'></Link>
                    <img src="/img/logo/osulloc23.png" alt="" />
                </div>
                <div className='d-flex order-lg-2 mb-3 mb-lg-0 qnafooter'>
                    <div className='help me-3'>
                        <span>
                            고객상담센터 · 주문/배송문의
                        </span>
                        <strong>help@osulloc.com</strong>
                        <strong className='largeF'>080-805-5555</strong>
                        <p>평일 09:30 - 17:00
                            <br className='d-md-none d-block' /> (점심 11:30 - 13:00)
                        </p>
                    </div>
                    <div className='mail text-end text-sm-start'>
                        <span>
                            특판, 대량구매 문의
                        </span>
                        <strong>mall@osulloc.com</strong>
                        <p className='largeF'>카카오톡ID : osullocmall</p>
                        <p>평일 09:30 - 17:00 <br className='d-md-none d-block' />(점심 11:30 - 13:00)</p>
                    </div>
                </div>

                <div className='leftDesc order-lg-1'>
                    <ul className='d-flex mb-3 flex-wrap'>
                        <li className='ms-0'><Link to=''>회사소개</Link></li>
                        <li><Link to=''>서비스 이용약관</Link></li>
                        <li><Link to=''>개인정보 처리방침</Link></li>
                        <li className='d-sm-none'><br /></li>
                        <li><Link to='' className=''><strong className='d-block'>영상정보 처리방침</strong></Link></li>
                        <li><Link to=''>뷰티포인트</Link></li>
                        <li><Link to=''>임직원할인</Link></li>
                    </ul>
                    <div className='text-center text-lg-start adressdsec'>
                        <span>㈜ 오설록</span>
                        <p>대표이사:서혁제 주소:서울특별시 용산구 한강대로 100 (한강로2가) <br className='d-md-none d-block' /> 사업자등록번호: 390-87-01499</p>
                        <p>통신판매업신고번호:2019-서울용산-1173호 호스팅제공자: ㈜오설록</p>
                        <p>(주)오설록은 오설록 브랜드를 제외한 입점 브랜드에 대해서는 통신판매중개자 이며 통신판매의 당사자가 아닙니다.<br />
                            따라서 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer

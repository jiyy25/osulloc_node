import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.min.css';
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { RiUserHeartLine } from "react-icons/ri";
import "@fontsource/noto-sans-kr/300.css"
import "@fontsource/noto-sans-kr/400.css"
import { Link } from 'react-router-dom';


function Header() {
    const [toggleOpen, setToggleOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const hamClick = () => {
        setToggleOpen(!toggleOpen)
    }

    const toggleMenu = (menu) => {
        // 현재 활성화된 메뉴가 다시 클릭되면, 클래스를 제거하기 위해 상태를 빈 문자열로 설정
        // 그렇지 않다면, 클릭된 메뉴를 활성화 상태로 설정
        setActiveMenu(activeMenu === menu ? '' : menu);
    };

    React.useEffect(() => {
        const hdobj = document.querySelector("header");
        const scrollhead = () => {
            if (window.scrollY > 80) {
                hdobj.classList.add("bg-white")
            } else {
                hdobj.classList.remove("bg-white")
            }

        }
        window.addEventListener('scroll', scrollhead)

        return () => {
            window.removeEventListener('scroll', scrollhead)

        }

    }, [])

    return (
        <header className='fixed-top border-bottom zup'>
            <div className='containerjy d-flex justify-content-between align-items-center '>
                <button className={`navBtn d-lg-none mx-2 ${toggleOpen ? 'act' : ''}`} onClick={hamClick}>
                    <i></i>
                    <i></i>
                    <i></i>
                </button>
                <h1 className='logo'>
                    <Link to='/'>
                        <img src="/img/logo/logo_black.png" alt="로고" />
                    </Link>

                </h1>
                <div className='d-lg-flex '>
                    <ul className={`navmn d-lg-flex justify-content-between ${toggleOpen ? 'Bclick' : ''}`}>
                        <li className='before '>
                            <span href="" className='d1a' onClick={
                                () => { toggleMenu("제품") }
                            }>제품</span>
                            <img src="./img/banner/dadaLightPc_1.jpg" alt="" className='bnimg' />
                            <ul className={`d2ul position-absolute d-lg-flex ${activeMenu === "제품" ? 'click' : ''}`}>
                                <li className='d2li'><Link to='/Shop/best' className='d2a '>베스트</Link></li>
                                <li><Link to="/shop/tea" className='d2a'>티 제품</Link></li>
                                <li><Link to="/shop" className='d2a'>티푸드</Link></li>
                                <li><Link to="" className='d2a'>티웨어</Link></li>
                                <li><Link to="" className='d2a'>라이프 스타일</Link></li>
                            </ul>
                        </li>
                        <li><span href="" className='d1a'>선물추천</span></li>
                        <li className='before'>
                            <span href="" className='d1a' onClick={() => { toggleMenu("다다일상") }}>다다일상</span>
                            <img src="./img/banner/dadaLightPc_1.jpg" alt="" className='bnimg' />
                            <ul className={`d2ul position-absolute d-lg-flex ${activeMenu === "다다일상" ? 'click' : ''}`}>
                                <li><Link to="" className='d2a '>다다일상 구독</Link></li>
                                <li><Link to="" className='d2a'>정기배송 신청</Link></li>
                            </ul>
                        </li>
                        <li className='before'>
                            <span href="" className='d1a' onClick={() => { toggleMenu("브랜드") }}>브랜드</span>
                            <img src="./img/banner/dadaLightPc_1.jpg" alt="" className='bnimg' />
                            <ul className={`d2ul position-absolute d-lg-flex ${activeMenu === "브랜드" ? 'click' : ''}`}>
                                <li><Link to="" className='d2a '>오설록 스토리</Link></li>
                                <li><Link to="" className='d2a'>제주 티뮤지엄</Link></li>
                                <li><Link to="" className='d2a'>매장 소개</Link></li>
                            </ul>
                        </li>
                        <li className='before'>
                            <span className='d1a' onClick={() => { toggleMenu("이벤트") }}>이벤트</span>
                            <img src="./img/banner/dadaLightPc_1.jpg" alt="" className='bnimg' />
                            <ul className={`d2ul position-absolute d-lg-flex ${activeMenu === "이벤트" ? 'click' : ''}`}>
                                <li><Link to="/event" className='d2a '>이달의 이벤트</Link></li>
                                <li><Link to="#none" className='d2a'>이벤트 공지</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='icoBox d-flex ms-lg-5'>
                        <li><Link to=""><IoBagOutline size={25} /></Link></li>
                        <li className='userIco'><Link to=""><RiUserHeartLine size={25} /></Link></li>
                        <li className='d-none d-lg-block me-lg-0'><Link to=""><IoSearch size={25} /></Link></li>
                    </ul>
                </div>
            </div >
        </header >
    )
}

export default Header

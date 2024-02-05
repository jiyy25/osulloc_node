import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.min.css'
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { RiUserHeartLine } from "react-icons/ri";
import "@fontsource/noto-sans-kr/300.css"
import "@fontsource/noto-sans-kr/400.css"
import { Link } from 'react-router-dom';


function Header() {
    const [toggleOpen, setToggleOpen] = useState(false);
    const hamClick = () => {
        setToggleOpen(!toggleOpen)
    }

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
        <header className='fixed-top border-bottom'>
            <div className='container-fluid d-flex justify-content-between align-items-center px-lg-5'>
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
                        <li><a href="">제품</a></li>
                        <li><a href="">보자기포장</a></li>
                        <li><a href="">다다일상</a></li>
                        <li><a href="">브랜드</a></li>
                        <li><Link to="/event">이벤트</Link></li>
                    </ul>
                    <ul className='icoBox d-flex ms-lg-5'>
                        <li><a href=""><IoBagOutline size={25} /></a></li>
                        <li className='userIco'><a href=""><RiUserHeartLine size={25} /></a></li>
                        <li className='d-none d-lg-block me-lg-0'><a href=""><IoSearch size={25} /></a></li>
                    </ul>
                </div>
            </div>
        </header >
    )
}

export default Header

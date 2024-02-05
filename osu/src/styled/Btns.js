import styled from "styled-components"
import "@fontsource/noto-sans-kr/300.css"

export const MoreBtn = styled.button`
    width: 320px;
    height: 50px;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 14px;
    border: 1px solid white;
    background-color: transparent;
    color: white;
    margin: 0 auto;
    display: block;
    transition: .3s;
    &:hover{
        background-color: #d9d9d975;
    }
`
export const BmoreBtn = styled(MoreBtn)`
    color: black;
    border: 1px solid black;
`

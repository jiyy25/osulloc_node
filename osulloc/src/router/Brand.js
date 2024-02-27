import React, { useRef, useState } from 'react'

function Brand() {
    const imgRefs = useRef([]); //이미지 요소의 참조 저장

    //마우스의 이동 이벤트처리
    //clientX,clientY: 마우스 이벤트 객체속성
    const handleMouseMove = (e) => {
        const { clientX: x, clientY: y } = e;
        imgRefs.current.forEach(v => {
            v.style.transform = `translate(${x}px, ${y}px)`;
        });
    };

    const handleMouseOver = (index) => {
        imgRefs.current[index].style.visibility = 'visible';
    };

    const handleMouseLeave = (index) => {
        imgRefs.current[index].style.visibility = 'hidden';
    };

    return (
        <div className='brand container mt-150 text' onMouseMove={handleMouseMove}>
            <h2 className='text-center mb-1'>TEA FROM JEJU</h2>
            <p className='text-center mb-3'>대한민국이 가진 천혜의 자연 유산 제주,<br />
                화산섬 제주가 가진 경이로운 생명력으로<br />
                오설록의 차는 탄생합니다.</p>
            <span className='text-center d-block mb-5'>오설록의 제주 차밭</span>
            <img src="https://i.ibb.co/8xJLzcV/tea-field.png" alt="제주지도" className='jejumap mb-5' />
            <ul className='jejuul position-relative mt-5 mb-5'>
                <li className='jejuli' onMouseOver={() => handleMouseOver(0)} onMouseLeave={() => handleMouseLeave(0)}>
                    <p>색이 좋은 서광 차밭</p>
                    <span>산방산 근처의 서광 차밭은 대기가 한라산을 지나며 많은 구름과 안개를형성하고, 이는 자연 차광 효과를 내 찻잎의 색을 좋게 만듭니다. 온화한기후와 자연 차광 효과는 고급 품질의 차를 만들 때 더없이 좋은 생육조건이 됩니다.</span>
                    <div className='imgWrap' ref={(v) => (imgRefs.current[0] = v)} ><img src="https://i.ibb.co/Xxcrd1D/tea-field-item-1.jpg" alt="" className='positon-absolute' /></div>
                </li>
                <li className='jejuli ' onMouseOver={() => handleMouseOver(1)} onMouseLeave={() => handleMouseLeave(1)}>
                    <p>향이 좋은 돌송이 차밭</p>
                    <span>돌송이 차밭 지역은 예로부터 화산재가 굳어서 돌멩이같이 잘게 부서진화산송이가 많아 ‘돌송이’라고 불리어 왔습니다. 이곳은 산과 바다를동시에 접하고 있어 매년 4월 한라산의 잔설을 품은 산바람과 바다의수분을 머금은 바닷바람이 밤낮으로 불어와 돌송이 차밭에서 채엽한차는 향이 매우 좋습니다.</span>
                    <div className='imgWrap' ref={(v) => (imgRefs.current[1] = v)}><img src="https://i.ibb.co/kh1Whwv/tea-field-item-2.jpg" alt="" /></div>
                </li>
                <li className='jejuli' onMouseOver={() => handleMouseOver(2)} onMouseLeave={() => handleMouseLeave(2)}>
                    <p>맛이 좋은 한남 차밭</p>
                    <span>과거 ‘해들이밭’이라 하여 마을에서 가장 먼저 해가 드는 곳이라 불렸던한남 차밭은 온화한 기후에서 성장해 차나무가 어리고 아미노산 함량이높아 뛰어난 맛을 선사합니다.</span>
                    <div className='imgWrap' ref={(v) => (imgRefs.current[2] = v)}><img src="https://i.ibb.co/Mhf06fg/tea-field-item-3.jpg" alt="" /></div>
                </li>
            </ul>
        </div>
    );
}

export default Brand

import React, { useState, useEffect } from 'react'
import { BigTitle, SmallTitle } from '../styled/Title'
import { GreenBtn } from '../styled/Btns'
import ProductBox from '../component/ProductBox'
import { Link, useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'


function Subscribepage(props) {
    //상품필터링
    const pickpro = props.datasrc && props.datasrc.filter((items) => items.taplist_id === 9)
    console.log(pickpro)

    const [content, setContent] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    //register 각각의 입력 필드를 폼과 연결하는 역할.



    const axiosfun = async (conecttypeinfo, data = null) => {
        //post전송방식, get전송방식 모두 허용하는 비동기함수
        const crudinfoarr = conecttypeinfo.split('/');
        const tablenm = crudinfoarr[0];
        console.log(tablenm, conecttypeinfo)

        try {
            if (data) {
                await axios.post(`/${conecttypeinfo}`, data);
            } else {
                const selecttable = await axios.get(`/${conecttypeinfo}`);
                setContent((prevContent) => ({
                    ...prevContent,
                    [tablenm]: [...selecttable.data],
                }))
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        // console.log(props.datasrc)
        // axiosfun('practice'); //글목록
        window.scrollTo(0, 0); // 페이지 이동 시 스크롤 위치를 맨 위로 이동

    }, [])


    const onSubmit = async (data) => {
        console.log(data)
        await axiosfun('/dada', data);
        // axiosfun('practice')
    }

    return (
        <div className='o_dada mt-150 mb-100'>
            <BigTitle>이달의 다다일상</BigTitle>
            <SmallTitle>오설록 티 소믈리에가 그달의 테마와 어울리는 차들을 선정하여 보내드립니다.<br />매월 향기로운 선물같은 일상을 선사합니다.</SmallTitle>
            <div className='row align-items-center container mx-auto'>
                <ProductBox datasrc={pickpro && pickpro} bestPage={'shop'} priceNone={'none'} cardnum={4}></ProductBox>
            </div>
            <SmallTitle>취향을 듬뿍담아 즐기기 좋은 티모음으로  구성되었습니다.<br />이달의 찻자리에 함께할 다다일상 구성을 만나보세요.</SmallTitle>

            <div className='dada container pb-5'>
                <h3 className='pt-5'>다다일상 구독혜택</h3>
                <div className='dadaBox border mt-4'>
                    <span className='border-bottom width-100 d-block p-3 text-center won'>매월 결제 24900원</span>
                    <div className='dada_icos d-flex justify-content-evenly p-5'>
                        <div className='dada_ico flex-column align-items-center'>
                            <img src="/img/ico/icon1_ben.png" alt="" />
                            <span className='d-block text-center mt-2'>무료배송</span>
                        </div>
                        <div className='dada_ico d-flex flex-column align-items-center'>
                            <img src="/img/ico/icon2_ben.png" alt="" />
                            <span className='d-block text-center mt-2'>랜덤으로 제공되는<br />
                                다양한 티 제품  </span>
                        </div>
                        <div className='dada_ico d-flex flex-column align-items-center'>
                            <img src="/img/ico/icon3_ben.png" alt="" />
                            <span className='d-block text-center mt-2'>흥미로운 티 이야기를 <br />
                                담은 이 달의 티 레터</span>
                        </div>
                        <div className='dada_ico d-flex flex-column align-items-center'>
                            <img src="/img/ico/icon4_ben.png" alt="" />
                            <span className='d-block text-center mt-2'>나만의 티 라이프를 <br />
                                소개하는 챌린지</span>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='dadaform mx-auto'>
                        <div className='m-2'>
                            <input type="text" {...register("userName", { required: true })} placeholder='이름' className='border w-100 p-2' />
                            {errors.userName && <p>이름을 입력하세요</p>}
                        </div>
                        <div className='m-2'>
                            <input type="text" {...register("phone", { required: true })} placeholder='전화번호' className='border w-100 p-2' />
                            {errors.phone && <p>전화번호를 입력하세요</p>}
                        </div>
                        <div className='m-2'>
                            <input type="email" {...register("userEmail", { required: true })} placeholder='메일주소' className='border w-100 p-2' />
                            {errors.userEmail && <p>메일주소를 입력하세요</p>}
                        </div>
                        <div className='m-2'>
                            <textarea type="text"{...register("board", { required: false })} placeholder='문의사항' className='border w-100 p-2' />
                        </div>
                        <GreenBtn type='submit' className='mx-auto d-block mt-4 mb-5'>구독 신청하기</GreenBtn>
                    </form>

                </div>
            </div>
            <div className='subscribe_dada container text-center mt-5'>
                <img src="https://i.ibb.co/VSKFcMX/osulloc19.jpg" alt="" />
                <span className='d-block p-2'>챌린지 리워드</span>
                <p>총 10분께
                    오설록 제품을 선물로 드립니다.
                </p>
                <Link to="/event"><GreenBtn className='mt-4 mb-5'>이달의 챌린지 가기</GreenBtn></Link>
            </div>
        </div>
    )
}

export default Subscribepage

import React, { useState } from 'react'
import { GreenBtn } from '../styled/Btns'
import { useForm } from "react-hook-form"
import axios from 'axios';

function Form() {

    const [content, setContent] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    //register 각각의 입력 필드를 폼과 연결하는 역할.

    // const axiosfun = async (conecttypeinfo, data = null) => {
    //     //post전송방식, get전송방식 모두 허용하는 비동기함수
    //     const crudinfoarr = conecttypeinfo.split('/');
    //     const tablenm = crudinfoarr[0];
    //     console.log(tablenm, conecttypeinfo)

    //     try {
    //         if (data) {
    //             await axios.post(`/${conecttypeinfo}`, data);
    //         } else {
    //             const selecttable = await axios.get(`/${conecttypeinfo}`);
    //             setContent((prevContent) => ({
    //                 ...prevContent,
    //                 [tablenm]: [...selecttable.data],
    //             }))
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // const onSubmit = async (data) => {

    //     const FormPost = await mysqlapi("o_form", data)
    //     console.log(FormPost)

    //     setContent(!content)
    // }

    const onSubmit = async (data) => {
        console.log(data)
        alert('신청되었습니다!')
        try {
            await axios.post('o_form', data); // 실제 API 엔드포인트로 변경
            setContent(!content)
            console.log('폼 데이터가 성공적으로 제출되었습니다:', data);
        } catch (error) {
            console.error('폼 데이터 제출 오류:', error);
        }


    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='dadaform mx-auto'>
            <div className='m-2'>
                <input type="text" {...register("u_name", { required: true })} placeholder='이름' className='border w-100 p-2' />
                {errors.userName && <p>이름을 입력하세요</p>}
            </div>
            <div className='m-2'>
                <input type="text" {...register("u_phone", { required: true })} placeholder='전화번호' className='border w-100 p-2' />
                {errors.phone && <p>전화번호를 입력하세요</p>}
            </div>
            <div className='m-2'>
                <input type="email" {...register("u_email", { required: true })} placeholder='메일주소' className='border w-100 p-2' />
                {errors.userEmail && <p>메일주소를 입력하세요</p>}
            </div>
            <div className='m-2'>
                <textarea type="text"{...register("board", { required: false })} placeholder='문의사항' className='border w-100 p-2' />
            </div>
            <GreenBtn type='submit' className='mx-auto d-block mt-4 mb-5'>구독 신청하기</GreenBtn>
        </form>

    )
}

export default Form

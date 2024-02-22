import React, { useEffect, useState } from 'react'
import { H3Title, SmallTitle } from '../styled/Title'
import ProductBox from '../component/ProductBox'
import { useParams } from 'react-router-dom'


function Shop({ datasrc }) {

    //대분류카테고리 
    const { category_id } = useParams()
    const { prd, navi } = datasrc;
    const [opensub, setopensub] = useState(false);
    const [prdlist, setPrdlist] = useState([]); // 소메뉴가 필터링 된 state

    const [submenuli, setSubmenuli] = useState(false);

    const submenu = navi && navi.filter((items) => items.category_id !== items.parent_id && items.parent_id === Number(category_id)); //소메뉴의 정보 필터링 출력,category_id와 parent_id가 다른것-> 소메뉴
    const cate_title = navi && navi.find((items) => items.category_id === Number(category_id)).cate_title;
    const prolist = prd && prd.filter((items) => items.category_id === Number(category_id)); //상품을 카테고리별로 필터링
    const backImg = navi && navi.find((items) => items.category_id === Number(category_id)).banner_img; //메뉴별 카테고리 이미지 필터링

    console.log(`prd확인 대메뉴 클릭시 :${prd}`)

    const handleCategoryClick = (category_id) => {
        //클릭하면 소메뉴 필터링
        const filterPrd = prd && prd.filter((items) => items.taplist_id === category_id);
        setPrdlist(filterPrd);

        // console.log('prd확인 소메뉴 클릭시'+ prd)
        setSubmenuli(true)
    }

    useEffect(() => {
        //하위 메뉴가 존재할 경우 opensub 상태를 true로 설정하여 하위 메뉴를 보여줌
        if (submenu) {
            setopensub(true);
        } else {
            setopensub(false)
        }
        console.log( navi, prd, typeof category_id, typeof navi[0].category_id)
        console.log(submenu)
        setPrdlist(prolist); //useeffect 실행시 prolist로 다시 변경하여 초기화!
    }, [datasrc, category_id])
    

    return (
        <div className='shop mb-100'>
            <div className='back_img position-relative' style={{ backgroundImage: `url(${backImg})` }}>
                <h2 className='position-absolute top-50 start-50 translate-middle'>
                    {cate_title}
                </h2>
            </div>

            <div className='shop_productList mt-5 pt-5 container'>
                <H3Title> {cate_title} </H3Title>
                <SmallTitle className='mb-2'>총 {prdlist.length}개의 상품이 있습니다.</SmallTitle>


                {/* 하위메뉴탭 */}
                {opensub && <div className='category mb-4'>
                    <ul className='d-flex align-items-center justify-content-center'>
                        {
                            submenu && submenu.map((e, idx) => {
                                return <li key={e.category_id} onClick={() => { handleCategoryClick(e.category_id) }}>{e.cate_title}</li>
                            })
                        }

                    </ul>

                </div>
                }
                <div className='bestProduct row align-items-center'>
                    {/* <ProductBox datasrc={prolist} bestPage={'shop'}></ProductBox> */}
                    {submenuli ? <ProductBox datasrc={prdlist} bestPage={'shop'} /> : <ProductBox datasrc={prolist} bestPage={'shop'} />}


                    {/* 소메뉴를 클릭하기 전엔 false이므로 prolist가 나오지만, 소메뉴를 클릭하면 true가 되서 prdlist가 출력됨.
                        true상태에서 대메뉴를 클릭해도 prdlist가 나와서 문제임...
                    */}

                </div>
            </div>
        </div >
    )
}

export default Shop

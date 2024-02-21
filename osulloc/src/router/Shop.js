import React, { useEffect, useState } from 'react'
import { H3Title, SmallTitle } from '../styled/Title'
import ProductBox from '../component/ProductBox'
import { useParams } from 'react-router-dom'

function Shop({ datasrc }) {

    //대분류카테고리 
    const { category_id } = useParams()
    const { prd, navi } = datasrc;
    const [opensub, setopensub] = useState(false);
    const [prdlist, setPrdlist] = useState([]);

    const submenu = navi && navi.filter((items) => items.category_id !== items.parent_id && items.parent_id === Number(category_id)); //서브메뉴의 리스트 출력
    const cate_title = navi && navi.find((items) => items.category_id === Number(category_id)).cate_title;
    const prolist = prd && prd.filter((items) => items.category_id === Number(category_id));

    const [tap, setTap] = useState(null)
    const handleCategoryClick = (category_id) => {
        // setTap(id)
        const filterPrd = prd && prd.filter((items) => items.category_id === category_id);
        setPrdlist(filterPrd)
    }

    useEffect(() => {
        if (submenu) {
            setopensub(true); // sql pk 0번이 없으므로 전체 해당 데이터는 0으로 처리
        } else {
            setopensub(false)
        }
        console.log(tap, navi, prd, typeof category_id, typeof navi[0].category_id)
        console.log(submenu)
    }, [])


    return (
        <div className='shop mb-100'>
            <div className='back_img position-relative' style={{ backgroundImage: "url('/img/banner/best_banner.jpg')" }}>
                <h2 className='position-absolute top-50 start-50 translate-middle'>
                    {cate_title}
                </h2>
            </div>

            <div className='shop_productList mt-5 pt-5 container'>
                <H3Title> {cate_title} </H3Title>
                <SmallTitle className='mb-2'>총 {prolist.length}개의 상품이 있습니다.</SmallTitle>


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
                    <ProductBox datasrc={prolist} bestPage={'shop'}></ProductBox>
                </div>
            </div>
        </div >
    )
}

export default Shop

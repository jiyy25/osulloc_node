export interface ApiSwiper {
    pk: number
    ming: string
    simg: string
    mtext: string
    stext: string
    alt: string
}
//nm?: 있을수도 있고 없을 수도 있을때

export interface ApiForm<T extends string | number> {
    idx: number
    u_name: string
    u_phon: number
    u_email: T
    marketing: number
    todate: T
}

//제네릭은 타입변수 설정 : 키의 성격이 string이거나 number
export interface ApiProduct<T extends string | number> {
    product_num: number
    imgsrc: T
    title: T
    text: T
    price: number
    alt: T
    category: T
}

export interface ApiStore {
    idx: number
    imgsrc: string
    location: string
    o_desc: string
}
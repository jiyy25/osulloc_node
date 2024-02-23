const express = require("express");
const mysql = require("mysql");
const mydbinfo = require("./dbconfig.json")

const mysqlapi = express.Router();

mysqlapi.use(express.json())
mysqlapi.use(express.urlencoded({ extended: true }))

const myconnection = mysql.createPool(mydbinfo)

mysqlapi.get('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`select * from ${tablenm}`, (error, result) => {
            if (error) throw console.log("쿼리문 오류")
            res.send(result)
        })
    })
})

mysqlapi.get('/:tablenm/:id', (req, res) => {
    const tablenm = req.params.tablenm
    const pk = req.params.id
    const wheretable = ` where id = ${pk}`
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`select * from ${tablenm} ${wheretable}`, (error, result) => {
            if (error) throw console.log("쿼리문 오류")
            res.send(result)
        })
    })
})

// mysqlapi.post('/:tablenm/dada'), (req, res) => {
//     const { tablenm } = req.params.tablenm;
//     const { u_name, u_phone, u_email } = req.body;

//     myconnection.getConnection((err, connect) => {
//         if (err) throw console.log("DB접속정보확인" + err)
//         connect.query(`INSERT INTO ${tablenm} (u_name, u_phone, u_email) VALUES(?,?,?)`, [u_name, u_phone, u_email], (error, result) => {
//             if (error) throw console.log("쿼리문 오류")
//             res.send(result)
//             connect.release();
//         })
//     })
// }


// pk글 삭제
mysqlapi.post('/:tablenm/:id/d', (req, res) => {
    const tablenm = req.params.tablenm
    const pk = req.params.id;
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`DELETE FROM ${tablenm} WHERE id = ${pk}`, (error, result) => {
            if (error) throw console.log("쿼리문 오류")
            res.send(result)
        })
    })
})

// 글 삽입
mysqlapi.post('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm;



    //모든 폼태그의 필드와 값을 정리
    const columns = Object.keys(req.body.body).join(', ');
    const values = Object.values(req.body.body).map(value => `'${value}'`).join(', ');

    // console.log(tablenm, req.body, req.params)
    // products {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //     body: { cate_id: '11' }
    //   } { tablenm: 'products' }



    myconnection.getConnection((err, connect) => {

        if (err) throw console.log("Post DB접속정보확인 " + err)

        if (columns == "cate_id") { //카테고리별 상품선택쿼리
            connect.query(`select * from ${tablenm}  where cate_id = ${values}`, (error, result) => {
                if (error) throw console.log("글수정 혹은 글삽입 쿼리문 오류")
                res.send(result)
            })
        } else {
            connect.query(`INSERT INTO ${tablenm}  (${columns})
            VALUES (${values})`, (error, result) => {
                if (error) throw console.log("글수정 혹은 글삽입 쿼리문 오류")
                res.send(result)
            })
        }
    })
})
// 글 수정
mysqlapi.post('/:tablenm/:id/m', (req, res) => {
    const tablenm = req.params.tablenm;
    const pk = req.params.id;

    const bodyData = req.body.body;

    //모든 폼태그의 필드와 값을 정리
    const setClause = Object.keys(bodyData).map(key => `${key} = '${bodyData[key]}'`).join(', ');


    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("Post DB접속정보확인 " + err)
        connect.query(`UPDATE ${tablenm} SET  ${setClause} WHERE id = ${pk}`, (error, result) => {
            if (error) throw console.log("글수정 혹은 글삽입 쿼리문 오류")
            res.send(result)
        })
    })
})


module.exports = mysqlapi;
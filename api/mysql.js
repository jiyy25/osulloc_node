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
            connect.release(); //서버요청 성공하면 요청을 종료한다. 이렇게해야 서버가 죽지않음
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
            connect.release();
        })
    })
})

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
    const tablenm = req.params.tablenm; // URL의 파라미터로부터 테이블명을 가져옴.

    //모든 폼태그의 필드와 값을 정리
    const columns = Object.keys(req.body.body).join(', ');
    const values = Object.values(req.body.body).map(value => `'${value}'`).join(', ');

    console.log("테이블", tablenm, "필드명", columns, "해당값", values)

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
                res.send({ msg: "감사합니다." })
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
            res.send({ msg: "수정이 완료되었습니다." })
        })
    })
})


module.exports = mysqlapi;
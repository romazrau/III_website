const express = require('express');
const moment = require('moment-timezone');
const router = express.Router();
const email_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

const db = require(__dirname + '/../tedious_connect');
const {Connection, Request, TYPES} = require("tedious");

router.get('/', (req, res)=>{
    res.redirect('/address-book-tedious/list');
});

router.get('/edit/:sid', async (req, res)=>{
    const sql = "SELECT * FROM address_book WHERE sid=@sid";
    const result = await db.myExecSql(sql, [[TYPES.Int, req.params.sid]]);

    if(result.rows.length){
        result.rows[0].birthday = moment(result.rows[0].birthday).format('YYYY-MM-DD');
        res.render('address-book-tedious/edit', {row: result.rows[0]});
    } else {
        res.redirect('/address-book-tedious/list');
    }
});

router.post('/edit', async (req, res)=>{
    const output = {
        success: false,
        body: req.body
    };
    // TODO: 檢查欄位的格式
    if(! email_pattern.test(req.body.email)){
        output.error = 'Email 格式不符';
        return res.json(output);
    }

    const sql = `UPDATE address_book SET name=@name, email=@email, mobile=@mobile, birthday=@birthday, address=@address WHERE sid=@sid`;
    const result = await db.myExecSql(sql, [
        [TYPES.NVarChar, req.body.name],
        [TYPES.NVarChar, req.body.email],
        [TYPES.NVarChar, req.body.mobile],
        [TYPES.Date, req.body.birthday],
        [TYPES.NVarChar, req.body.address],
        [TYPES.Int, req.body.sid],
    ]);
    if(result.rowCount===1){
        output.success = true;
    }
    output.result = result;
    res.json(output);
});

router.get('/del/:sid', async (req, res)=>{
    const sql = "DELETE FROM address_book WHERE sid=@sid";
    const result = await db.myExecSql(sql, [[TYPES.Int, req.params.sid]]);
    if(req.get('Referer')){
        res.redirect( req.get('Referer') );
    } else {
        res.redirect('/address-book-tedious/list');
    }

});

router.get('/add', (req, res)=>{
    res.locals.pageName = 'address-book-tedious-add';
    res.render('address-book-tedious/add');
});

router.post('/add', async (req, res)=>{
    const output = {
        success: false,
        body: req.body
    };
    // TODO: 檢查欄位的格式
    if(! email_pattern.test(req.body.email)){
        output.error = 'Email 格式不符';
        return res.json(output);
    }

    const sql = `INSERT INTO address_book (name, email, mobile, birthday, address, created_at) 
VALUES(@name, @email, @mobile, @birthday, @address, GETDATE())`;
    const result = await db.myExecSql(sql, [
        [TYPES.NVarChar, req.body.name],
        [TYPES.NVarChar, req.body.email],
        [TYPES.NVarChar, req.body.mobile],
        [TYPES.Date, req.body.birthday],
        [TYPES.NVarChar, req.body.address],
    ]);
    if(result.rowCount===1){
        output.success = true;
    }
    output.result = result;
    res.json(output);
});

router.get('/list/:page?', async (req, res)=>{
    res.locals.pageName = 'address-book-tedious-list';
    const perPage = 5; // 每一頁要顯示幾筆
    let page = parseInt(req.params.page) || 1;
    const output = {
        perPage,
        page,
        totalRows: 0,
        totalPages: 0,
        rows: []
    };

    const t_sql = "SELECT COUNT(1) num FROM address_book"; // 取得總筆數
    const t_r = await db.myExecSql(t_sql);

    output.totalRows = t_r.rows[0].num; // 總筆數
    output.totalPages = Math.ceil(output.totalRows/perPage); // 總頁數

    // 如果沒有資料
    if(! output.totalRows){
        return res.render('address-book-tedious/list', output);
    }

    if(page<1){
        return res.redirect('/address-book-tedious/list/1');
    }
    if(page>output.totalPages){
        return res.redirect('/address-book-tedious/list/' + output.totalPages);
    }

    const sql = `SELECT * FROM address_book ORDER BY sid DESC OFFSET ${(page-1)*perPage} ROWS FETCH NEXT ${perPage} ROWS ONLY`;
    const r = await db.myExecSql(sql);

    r.rows.forEach((el)=>{
        el.birthday = moment(el.birthday).format('YYYY-MM-DD');
    });
    output.rows = r.rows;

    res.render('address-book-tedious/list', output);
});

module.exports = router;
const express = require("express");
const moment = require("moment");
const router = express.Router();

const { tbl_bbs } = require("../models/index");

// 설정된 /write get는 URL에서 localhost:3000/bbs/요청할때
// 응답할 함수
router.get("/write", (req,res) => {
    const BBS = {
        b_date : moment().format("YYYY[-]MM[-]DD"),
        b_time : moment().format("HH:mm:SS"),
    };
    res.render("write", {BBS});
});

router.post("/write", (req,res)=> {
    // form을 통해서 POST로 전송 되어온 데이터는 req.body에 담겨서 온다
    tbl_bbs.create(req.body).then( (result) => res.redirect("/"));
})

module.exports = router;
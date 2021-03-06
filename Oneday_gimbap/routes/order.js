const express = require("express");
const router = express.Router();

// models 폴더에서 정보를 읽어서
// tbl_bbs 객체를 사용할수 있도록 선언, 초기화
// models/index.js 는 models 폴더에 있는
// table 설정과 관련된 파일들을 읽어서
// 객체로 return을 한다
// return 된 객체서 table 객체 요소만 추출하여
// 사용하도록 전개연산을 수행한다.
const { tbl_orders } = require("../models/index");

/* GET home page. */
router.get("/", function (req, res) {
  let o_table = req.query.o_table
  console.log(o_table)
  const orders = tbl_orders.findOne({
    where : { o_table }
  }).then(result =>{
    if(result == null) {
      result = orders
      result.o_table = o_table
    }
    // console.table(orders)
    res.render("order", { ORDER:result});
  })
  
});

module.exports = router;

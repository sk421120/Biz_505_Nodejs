const express = require("express");
const { render } = require("pug");
const router = express.Router();

const { tbl_products } = require("../models/index");

router.get("/", function (req, res) {
  res.render("admin", { MSG:"비밀번호를 입력하세요"});
});

router.post("/", function (req, res) {
  let ppw = "admingimbab!"
  let pw = req.body.pw
  let msg = "비밀번호가 틀렸습니다."
  if(pw !== "h") {
    res.render("admin", {MSG:msg})  
  }
  msg = "OK"

  res.render("product", {PRODUCTS : tbl_products})
});



module.exports = router;

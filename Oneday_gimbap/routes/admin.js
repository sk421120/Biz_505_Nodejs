const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("admin", { MSG:"비밀번호를 입력하세요"});
});

router.post("/", function (req, res) {
  let pw = req.body.pw
  let msg = "비밀번호가 틀렸습니다."
  if(pw !== "admingimbab!") {
    res.render("admin", {MSG:msg})  
  }
  msg = "OK"
  res.render("/admin/product")
});

module.exports = router;

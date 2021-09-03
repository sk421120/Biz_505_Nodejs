const express = require("express");
const router = express.Router();

const bbs = require("../models/tbl_bbs");

router.get("/push", (req, res) => {
  const bbsVO = new bbs({
    b_date: "2021-09-03",
    b_time: "11:28:27",
    b_writer: "corgi",
    b_subject: "hello",
    b_text: "mongoDB connect data",
  });

  bbsVO.save((err) => {
    if (err) console.log(err);
    else res.send("OK");
  });
});

router.get("/push_find", async (req, res) => {
  const bbsVO = {
    b_date: "2021-09-03",
    b_time: "11:43:15",
    b_writer: "corgi!!",
    b_subject: "hungry",
    b_text: "hungryververy",
  };

  //   await bbs.insertMany(bbsVO);
  await bbs.create(bbsVO);
  const result = await bbs.find({});
  await res.json(result);
});

module.exports = router;

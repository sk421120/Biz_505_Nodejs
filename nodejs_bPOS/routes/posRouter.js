const express = require("express");
const router = express.Router();

// localhost:3000/pos/order/3 이라고 URL이 전송되어 오면 숫자 3이 table_id에 담겨 온다
// 이 table_id 는 req.params.table_id 를 getter 하여 값을 확인할 수 있다
router.get("/order/:table_id", (req, res) => {
  const table_id = req.params.table_id;
  //   console.log("table_id", table_id);
  //   res.send(table_id);
  //   res.render("order_view", { table_id: table_id }); ===
  res.render("order_view", { table_id });
});

router.get("/order/:table_id/input/:menu_id", (req, res) => {
  const menu_id = req.params.menu_id;
  const table_id = req.params.table_id;
  const menu = {
    table_id,
    menu_id,
    menu_name: "로제 떡볶이",
    menu_price: "2500",
  };
  res.json(menu);
  //   res.send("menu " + menu_id);
});

module.exports = router;

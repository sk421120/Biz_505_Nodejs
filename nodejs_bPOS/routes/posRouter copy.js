const express = require("express");
const router = express.Router();

const moment = require("moment");
const { tbl_product, tbl_table_orders } = require("../models/index");

// localhost:3000/pos/order/3 이라고 URL이 전송되어 오면 숫자 3이 table_id에 담겨 온다
// 이 table_id 는 req.params.table_id 를 getter 하여 값을 확인할 수 있다
router.get("/order/:table_id", async (req, res) => {
  const table_id = req.params.table_id;
  //   console.log("table_id", table_id);
  //order:["p_name", "ASC"]
  const MENU = await tbl_product.findAll().then({ order: ["p_code", "ASC"] });
  // .then((result) => {
  //   res.render("order_view", { table_id, MENU: result });
  // });

  const order_list = await tbl_table_orders.findAll({
    where: { to_table_id: table_id },
  });

  res.render("order_view", { table_id, MENU, order_list });
  //   res.send(table_id);
  //   res.render("order_view", { table_id: table_id }); ===
  //   res.render("order_view", { table_id });
});

// table id와 menu id가 Web으로부터 전달되어 왔다
// 현재 table에 손님이 있고 메뉴를 주문하기 시작했다
let menu_list = [];
router.get("/order/:table_id/input/:menu_id", (req, res) => {
  const menu_id = req.params.menu_id;
  const table_id = req.params.table_id;

  // 선택된 메뉴를 menu_list에 추가
  tbl_product.findByPk(menu_id).then((product) => {
    // menu_list.push(result);

    // tbl_table_orders에 insert할 데이터 준비
    const table_orders = {
      to_table_id: table_id,
      to_pcode: menu_id,
      to_qty: 1,
      to_price: product.p_price,
      to_date: moment().format("YYYY[-]MM[-]DD"),
      to_time: moment().format("HH:mm:ss"),
    };

    tbl_table_orders.create(table_orders).then((result) => {
      tbl_table_orders
        .findAll({ where: { to_table_id: table_id } })
        .then((order_list) => {
          res.json({ table_id, order_list });
        });
    });
  });
  //   const menu = {
  //     table_id,
  //     menu_id,
  //     menu_name: "로제 떡볶이",
  //     menu_price: "2500",
  //   };
  //   res.json(menu);
  //   res.send("menu " + menu_id);
});

// 주문서 화면이 열릴때 서버로부터 table에 주문내용이 있으면 가져와서 보여라
router.get("/pos/getorder/:table_id", (req, res) => {
  const table_id = req.params.table_id;

  tbl_table_order
    .findAll({ where: { to_table_id: table_id } })
    .then((result) => res.json(result));
});
module.exports = router;

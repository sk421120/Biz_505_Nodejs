// DOMContentLoaded event를 설정하면
// JS 코드가 HTML의 어떤 부분에 있어도 상관 없이 작동이 된다
// fetch를 사용하여 서버에 데이터를 요청하기 위해 별도의 함수를 선언하기
const order_input = (table_id, menu_id) => {
  // path Variable 방식으로 menu_id 값을 URL에 포함하여 getter 요청하기

  /*
  만약 3번 테이블에 5번 메뉴를 추가하려고 Request를 한다면 localhost:3000/order/3/input/5 같은
  URL을 만들어 서버로 Request 한다
  이런식으로 만드는 URL방식을 RESTfull 요청이라고 한다
  */
  fetch(`/pos/order/${table_id}/input/${menu_id}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const order_list = document.querySelector("article.order_list");
  const table_id = order_list.dataset.table_id;

  const product_list = document.querySelector("article.product_list");

  if (product_list) {
    product_list.addEventListener("click", (e) => {
      const target = e.target;

      // index.pug의 table layout click 설정
      if (target.tagName === "DIV" && target.className.includes("menu")) {
        const menu_id = target.dataset.menu_id;
        // alert(menu_id);
        // document.location.href = `/pos/order/input/${menu_id}`;
        order_input(table_id, menu_id);
      }
    });
  }
});

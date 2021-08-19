// JS에서 (JSON)type 객체 만들기

// blank 객체에 변수와 값을 동시에 추가하기
// Name, Tel 라는 변수를 객체1에 새로 생성하고 각각에 값을 저장한다
let 객체1 = {};
객체1.Name = "myamya"
객체1.Tel = "010-4567-1345"

// 초기값이 있는 객체 만들기
let 객체2 = {
    Name:"mya",
    Tel:"010-1234-5678"
}

console.log(객체1);
console.log(객체2);

console.table(객체1);
console.table(객체2);

// console.table()은 1개의 객체만 console에 출력하는 함수
// console.table(객체1, 객체2)

const 콘솔 = (m) => console.log(m);

콘솔(300 * 100);
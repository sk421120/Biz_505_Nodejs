for(let i = 0; i <100 ;i++) {
    console.log(i);
}

let 합계 = 0;
for(let i = 0; i <101 ;i++) {
    합계 += i;
}

console.log("합계", 합계);

합계 = 0;
for(let i = 0; i <101 ;i++) {
    if(i%2 == 0){
    합계 += i;
    }
}

console.log("짝수 합",합계)

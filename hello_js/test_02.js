let 배열1 = ["aaa", "bbb", "ccc"]

let 새로운배열 = 
배열1.filter( (요소)=> {
    let ret = 요소.search(/[ab]+/);
    console.log(요소, "결과",ret);
    return ret > -1;
})

console.log(새로운배열);
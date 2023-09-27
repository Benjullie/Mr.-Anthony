console.log(addNumbers(5,6))
addNumbers=(a,b)=>{
    return a+b;
}
let sum = addNumbers(2,5);
console.log(addNum(4,6));

function addNum(a,b){
    return a+b;
}
getData =async ()=>{
    const response = await Axios.get("url")
    return response.body;
}
let rs = null;
getData = ()=>{
     Axios.get("url").then(response=>{
         rs = response.body;
     })
}

addEventListener('click'(){

})
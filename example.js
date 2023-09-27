


// console.log(addNumbers(5,6))
// addNumbers=(a,b)=>{
//     return a+b;
// }
// let sum = addNumbers(2,5);
// console.log(addNum(4,6));
//
// function addNum(a,b){
//     return a+b;
// }
// getData =async ()=>{
//     const response = await Axios.get("url")
//     return response.body;
// }
// let rs = null;
// getData = ()=>{
//      Axios.get("url").then(response=>{
//          rs = response.body;
//      })
// }
//
//alert("hellow world")
function  getUsersAge(date){
    let currentDate = new Date();
    return  currentDate.getFullYear()-date.getFullYear();
}

let name = prompt("Please enter your name");

let dob = prompt("Please enter your DOB");

let age = getUsersAge(new Date(dob));

if(age <18){
    alert("you are underAge")
}
console.log(age)

alert(name+'your age is '+age);



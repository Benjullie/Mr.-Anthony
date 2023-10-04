//
// let button = document.querySelector(".submit-button");
// let input = document.querySelector("#number");
// let p1 = document.querySelector('.p1');
// button.addEventListener('click',game);
//
//
// function game(){
//     let value = input.value;
//     if(value.length<=0 || value ===""){
//         return;
//     }
//     let rand = Math.floor(Math.random() *3);
//     let difference = Math.abs(value-rand);
//     if(parseInt(value)=== rand){
//         console.log(rand)
//         p1.textContent = 'you are correct';
//     }else if(difference <=2){
//         console.log(rand)
//         p1.textContent = 'you are almost there';
//     }else {
//         p1.textContent =`you are wrong, the correct number is ${rand}`;
//     }
// }
//
const  height = document.querySelector(".height");
const  weight = document.querySelector(".weight");
const  p1 = document.querySelector(".p1");
const calculateBmiButton = document.querySelector(".submit-button");

// calculateBmiButton.addEventListener('click',(event)=>{
//     event.preventDefault();
//     console.log(event.type)
//
//     const newHeight = Number(height.value);
//     const newWeight = Number(weight.value);
//
//
//     const  heightSquare = Math.pow(newHeight ,2);
//
//     const  bmi = Number(newWeight/heightSquare);
//     if(bmi >=25){
//         p1.textContent =`Your BMI is ${bmi} and you are over weight`;
//     }else if(bmi > 29.9){
//         p1.textContent =`Your BMI is ${bmi} and you are obese`;
//     }else if(bmi <18.5){
//         p1.textContent = `Your BMI is ${bmi}, you are underweight`;
//
//     }else {
//         p1.textContent =`Your BMI is ${bmi}, you have a normal BMI`;
//     }
// });
//
// ///Todo: Optional parameter and required parameters
//
// function  addNumbers(num1, num2,age = 0){
//     const add = num1+num2;
//     console.log(`The sum is ${add} And you are ${age} years old`);
// }
// addNumbers(1,2);



const  username = document.querySelector(".username");
const  password = document.querySelector(".password");

const submitButton = document.querySelector(".submit-button");

const database = {
    "username":"Giovanni",
    "password":"12345"
}

submitButton.addEventListener("click",()=>{

    let userNameValue = username.value;
    let passwordValue = password.value;

    if(database.username ===userNameValue && database.password ===passwordValue){
        window.location.href = 'ehuntober.html'
    }else {
        alert("username or password incorrect");
    }
});


































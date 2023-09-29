
let button = document.querySelector(".submit-button");
let input = document.querySelector("#number");
let p1 = document.querySelector('.p1');
button.addEventListener('click',game);


function game(){
    let value = input.value;
    if(value.length<=0 || value ===""){
        return;
    }
    let rand = Math.floor(Math.random() *3);
    let difference = Math.abs(value-rand);
    if(parseInt(value)=== rand){
        console.log(rand)
        p1.innerHTML = 'you are correct';
    }else if(difference <=2){
        console.log(rand)
        p1.innerHTML = 'you are almost there';
    }else {
        p1.innerHTML =`you are wrong, the correct number is ${rand}`;
    }
}








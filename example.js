
let button = document.querySelector(".submit-button");
let input = document.querySelector("#number");
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
        alert("You are correct");
    }else if(difference <=2){
        console.log(rand)
        alert("you are almost there")
    }else {
        alert(`you are wrong, the correct number is ${rand}`)
    }
}
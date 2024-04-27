//Guessing Game
const max = prompt("Enter a max number");
const random = Math.floor(Math.random()*max) + 1;
let guess = prompt("Guess a Number");
while(true){
    if(guess == "quit"){
        console.log("User Quit");
        break;
    }

    if(guess == random ){
        console.log("Congrats !! You are right Number is ",random);
    }else if(guess > random){
       guess = prompt("Number is too large please enter small number");
    }else{
        guess = prompt("Number is too small please enter large number");
    }
}







// //Generate a number between 1 to 100?
// let num = Math.floor(Math.random()*100) +1 ;
// console.log(num);


// //Generate a numbetr between 1 to 5?
// let num2 = Math.floor(Math.random()*5) +1 ;
// console.log(num2);
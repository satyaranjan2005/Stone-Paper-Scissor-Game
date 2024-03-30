// selection of rock, paper & scissor
const choices = document.querySelectorAll(".game");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");
const display = document.querySelector(".display");
const reset = document.querySelector("#reset");

let userScore = 0;
let compScore = 0;

const checkWinner = (userWin) => {
    if(userWin === true){
        userScore++;
        user.innerText = userScore;
        display.innerText = "You Win";
        display.style.backgroundColor = "green"
    } else {
        compScore++;
        comp.innerText = compScore;
        display.innerText = "Comp Win";
        display.style.backgroundColor = "red"
    }
    console.log("user score =",userScore);
    console.log("comp score =",compScore);
}

const comChoice = () => {
    const option = ["rock","paper","scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const playGame = (userChoice) =>{
    let compChoice = comChoice();
    if(userChoice === compChoice){
        console.log("Draw");
        display.innerText = "Draw";
        display.style.backgroundColor = "#C2948A"
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false: true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false: true;
        } else if(userChoice  === "scissor"){
            userWin = compChoice === "rock"? false: true;
        }
        checkWinner(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

reset.addEventListener("click", () =>{
    userScore = 0;
    user.innerText = 0;
    compScore = 0;
    comp.innerText = 0;
    display.innerText = "Play Your Move";
    display.style.backgroundColor = "#7EA8BE"
})



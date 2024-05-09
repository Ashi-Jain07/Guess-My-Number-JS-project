//math.random() is a function to generate a random number, but it will always generate a number between 0 & 1
//so this we multiply it by 20 and we do plus 1 because it will also give 0 and 0 * 20 will give 0
//and we want number between 1 & 20 sowe do + 1
//it will also generate float number for this we use math.trunc
//here math.trunc method convert any float number into whole number

const randomnumber = Math.trunc (Math.random() * 20) + 1;

const input = document.querySelector(".guess");
const button = document.querySelector("#check-btn");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const again = document.querySelector(".again");

button.addEventListener("click", checkvalue);

let scores = 20;

function checkvalue() {
    const inputvalue = input.value;
    console.log(inputvalue);

    if(inputvalue == randomnumber) {
        message.innerHTML = "Correct Guess";
        body.style.backgroundColor = "green";
        number.innerHTML = randomnumber;
        highscore.innerHTML = scores;
    } 
    else if(inputvalue != randomnumber) {
        scores--;
        score.innerHTML = scores;
        highscore.innerHTML = scores;
        body.style.backgroundColor = " rgb(204, 23, 23)";
        inputvalue < randomnumber ? message.innerHTML = "too low!" : message.innerHTML = "too high";
    }
};

again.addEventListener("click", resetgame);

function resetgame() {
    location.reload();
};
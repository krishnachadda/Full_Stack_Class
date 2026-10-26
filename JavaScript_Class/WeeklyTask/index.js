const questions = [
    {
        question:"What is the color of sky",
        options:["blue" , "green" , "yellow" , "red"],
        correct_opt:"blue"
    },
    {
        question:"What is the value of 6 + 7",
        options:["10" , "18" , "13" , "24"],
        correct_opt:"13"
    },
    {
        question:"What is the value of 6 * 3",
        options:["10" , "18" , "13" , "24"],
        correct_opt:"18"
    }
]

let currentQuestion = 0;

const questionData = questions[currentQuestion];

document.querySelector(".q").textContent = questionData.question;

document.querySelector(".option-1").textContent = questionData.options[0];

document.querySelector(".option-2").textContent = questionData.options[1];

document.querySelector(".option-3").textContent = questionData.options[2];

document.querySelector(".option-4").textContent = questionData.options[3];

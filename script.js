const questions = [
    {
        que: 'what is my name?',
        options: [
            'amir', 
            'muhammad', 
            'muhammadamir', 
            'lalkhan'
        ],
        correctAnswer: ['muhammadamir']
    },
    {
        que: 'when add two number ans 30',
        options: [
            '15', 
            '10', 
            '15', 
            'None of the above'
        ],
        correctAnswer: ['15','15']
    },
    {
        que: 'what is my favourite color?',
        options: [
            'red',
            'green',
            'yalloa',
            'white'
        ],
        correctAnswer: ['red', 'green','yalloa']
    },
    {
        que: 'what is my favourite color box? 4',
        options: [
            'red',
            'green',
            'yalloa',
            'white'
        ],
        correctAnswer: ['red', 'green', 'yalloa','white']
    },
    {
        que: 'what is my favourite color? 1',
        options: [
            'red',
            'green',
            'yalloa',
            'white'
        ],
        correctAnswer: ['red',]
    }
];
let currentQuestion = 0;
let score = 0;

const quesBox = document.getElementById('quesBox');
const submitButton = document.querySelector('.btn');


function loadQuestion() {
    reset()
    if (currentQuestion < questions.length) {
        const currentQuiz = questions[currentQuestion];
        quesBox.textContent = `${currentQuestion + 1}) ${currentQuiz.que}`;
        for (let i = 0; i < 4; i++) {
            optionInputs[i].value = currentQuiz.options[i];
            optionInputs[i].nextElementSibling.textContent = `${String.fromCharCode(97 + i)}) ${currentQuiz.options[i]}`;
        }
    } else {
        endQuiz();
      
    }

}
function checkIfOptionSelected() {
    const selectedOptions = Array.from(optionInputs).filter((input) => input.checked);
    if (selectedOptions.length === 0) {
        document.getElementById('box').innerHTML = '<p>Please select one option.</p>';
    } else {
        checkAnswer();
    
    }
}

const optionInputs = document.querySelectorAll('.options');
function checkAnswer() {
    const selectedOptions = [];
    for (let i = 0; i < optionInputs.length; i++) {
        if (optionInputs[i].checked) {
            selectedOptions.push(optionInputs[i].value);
        }
    }
    
    const currentQuiz = questions[currentQuestion];//quns

    const correctAnswers = currentQuiz.correctAnswer; //ans

    let isCorrect = true;

    for (let i = 0; i < selectedOptions.length; i++) {
        if (!correctAnswers.includes(selectedOptions[i])) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect && selectedOptions.length === correctAnswers.length) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}



function reset() {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
   
}

function endQuiz() {
    document.getElementById('box').innerHTML = `
        <div style="text-align: center;">
            <h3>Thank you for playing the quiz!</h3>
            <h2>Your Score: ${score} out of ${questions.length}</h2>
        </div>`;
    submitButton.disabled = true;
}

submitButton.addEventListener('click', checkAnswer ,checkIfOptionSelected);

loadQuestion();


// function checkAnswer() {
//     const selectedOptions = Array.from(optionInputs)
//         .filter((input) => input.checked)
//         .map((input) => input.value);
    
//     const currentQuiz = questions[currentQuestion];
//     const correctAnswers = currentQuiz.correctAnswer;

//     // Check if selected options are equal to correct answers
//     const isCorrect = selectedOptions.length === correctAnswers.length &&
//         selectedOptions.every((option) => correctAnswers.includes(option));

//     if (isCorrect) {
//         score++;
//     }

//     currentQuestion++;
//     if (currentQuestion < questions.length) {
//         loadQuestion();
//     } else {
//         endQuiz();
//     }
// }



const quizData = [

    {
        "question number" : "1",
        "quizname" : "GK",
        "quizID" : "1",
        "question" : "Which one of the following river flows between Vindhyan and Satpura ranges?",
        "a" : "Narmada",
        "b":"Mahanadi",
        "c":"Son",
        "d":"Netravati",
        "correct":"a"
    },


    {
        "question number" : "2",
        "quizname" : "GK",
        "quizID" : "1",
        "question" : "The Central Rice Research Station is situated in?",
        "a" : "Chennai",
        "b":"Cuttack",
        "c":"Bangalore",
        "d":"Quilon",
        "correct":"b"
    },

    {
        "question number" : "3",
        "quizname" : "GK",
        "quizID" : "1",
        "question" : "Who among the following wrote Sanskrit grammar?",
        "a" : "Kalidasa",
        "b":"Charak",
        "c":"Panini",
        "d":"Aryabhatt",
        "correct":"c"
    },

    {
        "question number" : "4",
        "quizname" : "GK",
        "quizID" : "1",
        "question" : "Which among the following headstreams meets the Ganges in last?",
        "a" : "Alaknanda",
        "b":"Pindar",
        "c":"Mandakini",
        "d":"Bhagirathi",
        "correct":"d"
    },


    {
        "question number" : "5",
        "quizname" : "GK",
        "quizID" : "1",
        "question" : "The metal whose salts are sensitive to light is?",
        "a" : "Zinc",
        "b":"Silver",
        "c":"Copper",
        "d":"Aluminium",
        "correct":"b"
    },


];


const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const quizID = document.getElementById('quizID')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           <button><a href="../quiz3/dashboard/DASHBOARD.HTML">Back to DASHBOARD</a></button>
           <h2>Referrals</h2>
           <script>
            if((marks < 3) && (quizname == "gk")) { 
            </script>
            <h2>Your Score is less . Please refer to link given below. </h2>
            <a href="https://www.britannica.com/">Britannica</a>
            <a href="https://www.tutorialspoint.com/general_knowledge/index.htm">Tutorialspoint</a>
            <script>
        }
        </script>

           `
       }
    }
})
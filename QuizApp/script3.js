const quizData = [
    {
        "question number" : "1",
        "quizname" : "Sports",
        "quizID" : "3",
        "question" : "Former Australian captain Mark Taylor has had several nicknames over his playing career. Which of the following was NOT one of them?",
        "a" : "Tubby",
        "b":"Stodge",
        "c":"Helium Bat",
        "d":"Stumpy",
        "correct":"d"
    },

    {
        "question number" : "2",
        "quizname" : "Sports",
        "quizID" : "3",
        "question" : "Which was the 1st non Test playing country to beat India in an international match?",
        "a" : "Canada",
        "b":"Sri Lanka",
        "c":"Zimbabwe",
        "d":"East Africa",
        "correct":"b"
    },

    {
        "question number" : "3",
        "quizname" : "Sports",
        "quizID" : "3",
        "question" : "Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?",
        "a" : "Two",
        "b":"Three",
        "c":"Four",
        "d":"Eight",
        "correct":"c"
    },

    {
        "question number" : "4",
        "quizname" : "Sports",
        "quizID" : "3",
        "question" : "Who was the first Indian to win the World Amateur Billiards title?",
        "a" : "Geet Sethi",
        "b":"Wilson Jones",
        "c":"Michael Ferreira",
        "d":"Manoj Kothari",
        "correct":"b"
    },

    {
        "question number" : "5",
        "quizname" : "Sports",
        "quizID" : "3",
        "question" : "Who is the first Indian woman to win an Asian Games gold in 400m run?",
        "a" : "M.L.Valsamma",
        "b":"P.T.Usha",
        "c":"Kamaljit Sandhu",
        "d":"K.Malleshwari",
        "correct":"c"
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
           <h3>Referrals</h3>

        <script>
        if ((marks < 3) && (quizname == "Sports")) {
        </script>
            <h2>Your Score is less . Please refer to link given below. </h2>
            <a href="https://www.tutorialspoint.com/sports_tutorials.htm">Tutorialspoint</a>
            <a href="https://study.com/academy/lesson/individual-sports-definition-examples-skill-development.html">study.com Free Course</a>
            <a href="https://indianathletics.in/medal-awards/">AFI Athletes Awards List</a>
        <script>
         } 
        </script>
        
           <ul>
           <li><a href="https://www.facebook.com/sharer.php?..." target="blank" rel="noopener noreferrer"><img src="facebook-icon.png" size="8px" alt="Share Page on Facebook" /></a></li>
           <li><a href="https://twitter.com/intent/tweet?..." target="blank" rel="noopener noreferrer"><img src="twitter-icon.png" size="8px" alt="Share Page on Twitter" /></a></li>
           <li><a href="https://www.linkedin.com/sharing/share-offsite/?..." target="blank" rel="noopener noreferrer"><img src="linkedin-icon.png" size="8px" alt="Share Page on LinkedIn" /></a></li>
           <li><a href="https://www.whatsapp.com/intent/sharer.php?..." target="blank" rel="noopener noreferrer"><img src="whatsapp-icon.png" size="8px" alt="Share Page on Whatsapp" /></a></li>
            </ul>
           `
       }
    }
})
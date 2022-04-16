const quizData = [

    {
        "question number" : "1",
        "quizname" : "Science",
        "quizID" : "5",
        "question" : "Brass gets discoloured in air because of the presence of which of the following gases in air?",
        "a" : "Oxygen",
        "b":"Hydrogen sulphide",
        "c":"Carbon dioxide",
        "d":"Nitrogen",
        "correct":"b"
    },

    {
        "question number" : "2",
        "quizname" : "Science",
        "quizID" : "5",
        "question" : "Which of the following is a non metal that remains liquid at room temperature?",
        "a" : "Phosphorus",
        "b":"Bromine",
        "c":"Chlorine",
        "d":"Helium",
        "correct":"b"
    },

    {
        "question number" : "3",
        "quizname" : "Science",
        "quizID" : "5",
        "question" : "Chlorophyll is a naturally occurring chelate compound in which central metal is ",
        "a" : "copper",
        "b":"magnesium",
        "c":"iron",
        "d":"calcium",
        "correct":"b"
    },

    {
        "question number" : "4",
        "quizname" : "Science",
        "quizID" : "5",
        "question" : "Which of the following is used in pencils?",
        "a" : "Graphite",
        "b":"Silicon",
        "c":"Charcoal",
        "d":"Phosphorous",
        "correct":"a"
    },

    {
        "question number" : "5",
        "quizname" : "Science",
        "quizID" : "5",
        "question" : "Which of the following metals forms an amalgam with other metals?",
        "a" : "Tin",
        "b":"Mercury",
        "c":"Lead",
        "d":"Zinc",
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
           <h3>Referrals</h3>

        <% if ((marks < 3) && (quizname == "Science")) { %>
            <h2>Your Score is less . Please refer to link given below. </h2>
            <a href="https://www.sciencedaily.com/">ScienceDaily.com</a>
            <a href="https://www.sciencenews.org/">ScienceNews.com</a>
            <a href="https://science.howstuffworks.com/">HowStuffWorks.com</a>
        <% } %>
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
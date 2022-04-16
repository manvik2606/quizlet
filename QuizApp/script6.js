const quizData = [

    {
        "question number" : "1",
        "quizname" : "Aptitude",
        "quizID" : "6",
        "question" : "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "a" : "120 metres",
        "b":"180 metres",
        "c":"324 metres",
        "d":"150 metres",
        "correct":"d"
    },

    {
        "question number" : "2",
        "quizname" : "Aptitude",
        "quizID" : "6",
        "question" : "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
        "a" : "45 km/hr",
        "b":"50 km/hr",
        "c":"54 km/hr",
        "d":"55 km/hr",
        "correct":"b"
    },

    {
        "question number" : "3",
        "quizname" : "Aptitude",
        "quizID" : "6",
        "question" : "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
        "a" : "200 m",
        "b":"225 m",
        "c":"245 m",
        "d":"250 m",
        "correct":"c"
    },

    {
        "question number" : "4",
        "quizname" : "Aptitude",
        "quizID" : "6",
        "question" : "Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
        "a" : "1:3",
        "b":"3:2",
        "c":"3:4",
        "d":"None of these",
        "correct":"b"
    },


    {
        "question number" : "5",
        "quizname" : "Aptitude",
        "quizID" : "6",
        "question" : "A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform?",
        "a" : "120 m",
        "b":"240 m",
        "c":"300 m",
        "d":"None of these",
        "correct":"b"
    }

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
           <h3>Referrals</h3>`
           const require = require('../quiz3/reference.ejs');
           console.log(require);
           quiz.innerHTML = 
           `<ul>
           <li><a href="https://www.facebook.com/sharer.php?..." target="blank" rel="noopener noreferrer"><img src="facebook-icon.png" size="8px" alt="Share Page on Facebook" /></a></li>
           <li><a href="https://twitter.com/intent/tweet?..." target="blank" rel="noopener noreferrer"><img src="twitter-icon.png" size="8px" alt="Share Page on Twitter" /></a></li>
           <li><a href="https://www.linkedin.com/sharing/share-offsite/?..." target="blank" rel="noopener noreferrer"><img src="linkedin-icon.png" size="8px" alt="Share Page on LinkedIn" /></a></li>
           <li><a href="https://www.whatsapp.com/intent/sharer.php?..." target="blank" rel="noopener noreferrer"><img src="whatsapp-icon.png" size="8px" alt="Share Page on Whatsapp" /></a></li>
            </ul>
           `
       }
    }
})
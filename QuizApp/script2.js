const quizData = [

    {
        "question number" : "1",
        "quizname" : "History",
        "quizID" : "2",
        "question" : "The territory of Porus who offered strong resistance to Alexander was situated between the rivers of ",
        "a" : "Sutlej and Beas",
        "b":"Jhelum and Chenab",
        "c":"Ravi and Chenab",
        "d":"Ganga and Yamuna",
        "correct":"b"
    },

    {
        "question number" : "2",
        "quizname" : "History",
        "quizID" : "2",
        "question" : "Under Akbar, the Mir Bakshi was required to look after ",
        "a" : "military affairs",
        "b":"the state treasury",
        "c":"the royal household",
        "d":"the land revenue system",
        "correct":"a"
    },

    {
        "question number" : "3",
        "quizname" : "History",
        "quizID" : "2",
        "question" : "The trident-shaped symbol of Buddhism does not represent ",
        "a" : "Nirvana ",
        "b":"Sangha",
        "c":"Buddha",
        "d":"Dhamma",
        "correct":"a"
    },

    {
        "question number" : "4",
        "quizname" : "History",
        "quizID" : "2",
        "question" : "The theory of economic drain of India during British imperialism was propounded by ",
        "a" : "Jawaharlal Nehru",
        "b":"Dadabhai Naoroji",
        "c":"R.C. Dutt",
        "d":"M.K. Gandhi",
        "correct":"b"
    },


    {
        "question number" : "5",
        "quizname" : "History",
        "quizID" : "2",
        "question" : "The treaty of Srirangapatna was signed between Tipu Sultan and ",
        "a" : "Robert Clive ",
        "b":"Cornwallis ",
        "c":"Dalhousie ",
        "d":"Warren Hastings",
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
           <ul>

        
        <script> 
        if ((marks < 3) && (quizname == "History")) {
        </script>
            <h2>Your Score is less . Please refer to link given below. </h2>
            <a href="https://www.tutorialspoint.com/ancient_indian_history/index.htm">Tutorialspoint</a>
            <a href="https://www.udemy.com/course/indian-history-chronology/">Udemy Course</a>
        <script>
        }
        </script>
           <li><a href="https://www.facebook.com/sharer.php?..." target="blank" rel="noopener noreferrer"><img src="facebook-icon.png" size="8px" alt="Share Page on Facebook" /></a></li>
           <li><a href="https://twitter.com/intent/tweet?..." target="blank" rel="noopener noreferrer"><img src="twitter-icon.png" size="8px" alt="Share Page on Twitter" /></a></li>
           <li><a href="https://www.linkedin.com/sharing/share-offsite/?..." target="blank" rel="noopener noreferrer"><img src="linkedin-icon.png" size="8px" alt="Share Page on LinkedIn" /></a></li>
           <li><a href="https://www.whatsapp.com/intent/sharer.php?..." target="blank" rel="noopener noreferrer"><img src="whatsapp-icon.png" size="8px" alt="Share Page on Whatsapp" /></a></li>
            </ul>`
       }
    }
})
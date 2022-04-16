const quizData = [

    {
        "question number" : "1",
        "quizname" : "Politics",
        "quizID" : "4",
        "question" : "The Parliament of India cannot be regarded as a sovereign body because",
        "a" : "it can legislate only on subjects entrusted to the Centre by the Constitution",
        "b":"it has to operate within the limits prescribed by the Constitution",
        "c":"the Supreme Court can declare laws passed by parliament as unconstitutional if they contravene the provisions of the Constitution",
        "d":"All of the above",
        "answer":"d"
    },

    {
        "question number" : "2",
        "quizname" : "Politics",
        "quizID" : "4",
        "question" : "The members of the Rajya Sabha are elected by",
        "a" : "the people",
        "b":"Lok Sabha",
        "c":"elected members of the legislative assembly",
        "d":"elected members of the legislative council",
        "correct":"c"
    },

    {
        "question number" : "3",
        "quizname" : "Politics",
        "quizID" : "4",
        "question" : "The members of the panchayat are",
        "a" : "nominated by the district officer",
        "b":"the electorates of the respective territorial constituencies",
        "c":"nominated by local self-government minister of the state",
        "d":"nominated by the block development organization",
        "correct":"b"
    },

    {
        "question number" : "4",
        "quizname" : "Politics",
        "quizID" : "4",
        "question" : "The power to decide an election petition is vested in the",
        "a" : "Parliament",
        "b":"Supreme Court",
        "c":"High courts",
        "d":"Election Commission",
        "correct":"c"
    },

    {
        "question number" : "5",
        "quizname" : "Politics",
        "quizID" : "4",
        "question" : "The Parliament of India can make use of the residuary powers",
        "a" : "at all times",
        "b":"only during national emergency",
        "c":"during national emergency as well as constitutional emergency as well in a state",
        "d":"None of the above",
        "correct":"a"
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
           <button><a href="../quiz3/dashboard/DASHBOARD.HTML">Back to DASHBOARD</a></button>'
           <h3>Referrals</h3>
           <ul>

        
        <script>
        if ((marks < 3) && (quizname == "Politics")) { 
        </script>
            <h2>Your Score is less . Please refer to link given below. </h2>
            <a href="https://www.tutorialspoint.com/indian_polity/index.htm">Tutorialspoint</a>
            <a href="https://study.com/academy/subj/social-science/political-science.html">study.com Free Courses</a>
            <a href="http://www.opensecrets.org/">Open Secrets</a>
        <script>
         } 
        </script>
        
           <li><a href="https://www.facebook.com/sharer.php?..." target="blank" rel="noopener noreferrer"><img src="facebook-icon.png" size="8px" alt="Share Page on Facebook" /></a></li>
           <li><a href="https://twitter.com/intent/tweet?..." target="blank" rel="noopener noreferrer"><img src="twitter-icon.png" size="8px" alt="Share Page on Twitter" /></a></li>
           <li><a href="https://www.linkedin.com/sharing/share-offsite/?..." target="blank" rel="noopener noreferrer"><img src="linkedin-icon.png" size="8px" alt="Share Page on LinkedIn" /></a></li>
           <li><a href="https://www.whatsapp.com/intent/sharer.php?..." target="blank" rel="noopener noreferrer"><img src="whatsapp-icon.png" size="8px" alt="Share Page on Whatsapp" /></a></li>
            </ul>
           `
       }
    }
})
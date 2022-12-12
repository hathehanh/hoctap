const quizData = [{
        question: "Câu 1: Căn bậc hai số học của 121 là:",
        a: "14",
        b: "13",
        c: "12",
        d: "11",
        correct: "d",
    },
    {
        question: "Câu 2: Căn bậc hai của 36 là:",
        a: "6",
        b: "-6",
        c: "±6",
        d: "Không có",
        correct: "c",
    },
    {
        question: "Câu 3: Cho các số √5, 2, √18, 5, 3. Câu trả lời nào sau đây là đúng",
        a: "2<√5<√18<3<5",
        b: "2<√5<3<√18<5",
        c: "2<3<√5<√18<5",
        d: "√5<2<3<√18<5",
        correct: "b",
    },
    {
        question: "Câu 4: Rút gọn √(x^2-6x+9) với x>=3 ta có √(x^2-6x+9)=. . . ",
        a: "x+3",
        b: "x±3",
        c: "x-3",
        d: "Không có",
        correct: "c",
    },
    {
        question: "Câu 5: Bạn Tùng nói ‘√(a^2 )=a với mọi a€R’ bạn Tùng nói như vậy đúng chưa? ",
        a: "Đúng",
        b: "Sai",
        correct: "b",
    },
    {
        question: "Câu 6: Tính biểu thức sau : -√(12-8√2) +2√2=. . . ",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b",
    },
    {
        question: "Câu 7: Cho phương trình √(〖9x〗^2-18x+17)=1 Câu trả lời nào sau đây là đúng:",
        a: "x=0",
        b: "x=1",
        c: "x=-2",
        d: "Phương trình trên vô nghiệm",
        correct: "d",
    },
    {
        question: "Câu 8: Với giá trị nào của a thì biểu thức √(-√a) có nghĩa a..0",
        a: "=",
        b: "≥",
        c: "≤",
        d: "≠",
        correct: "a",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
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
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>Bạn Trả Lời ${score}/${quizData.length} Câu Hỏi Chính Xác!</h2>

           <button onclick="location.reload()">Làm Lại</button>
           `
        }
    }
})
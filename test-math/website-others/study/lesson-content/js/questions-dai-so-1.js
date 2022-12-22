// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Căn bậc hai số học của 121 là:",
        answer: "11",
        options: [
            "14",
            "13",
            "12",
            "11"
        ]
    },
    {
        numb: 2,
        question: "Căn bậc hai của 36 là",
        answer: "±6",
        options: [
            "6",
            "-6",
            "±6",
            "Không Có"
        ]
    },
    {
        numb: 3,
        question: "Cho các số √5, 2, √18, 5, 3. Câu trả lời nào sau đây là đúng",
        answer: "2 < √5 < 3 < √18 < 5",
        options: [
            "2 < √5 < √18 <3 <5",
            "2 < √5 < 3 < √18 < 5",
            "2 < 3 < √5 < √18 < 5",
            "√5 < 2 < 3 < √18 <5"
        ]
    },
    {
        numb: 4,
        question: "Rút gọn √(x^2-6x+9) với x>=3 ta có √(x^2-6x+9)=. . . .",
        answer: "x-3",
        options: [
            "x+3",
            "x±3",
            "x-3",
            "Kết Quả Khác"
        ]
    },
    {
        numb: 5,
        question: "Bạn Tùng nói ‘√(a^2)=a với mọi a€R’ bạn Tùng nói như vậy đúng chưa?",
        answer: "Sai",
        options: [
            "Đúng",
            "Sai",
            "Không Biết",
            "Chưa Nghĩ Ra"
        ]
    },
    {
        numb: 6,
        question: "Tính biểu thức sau : -√(12-8√2) + 2√2=. . . .",
        answer: "2",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        numb: 7,
        question: "Cho phương trình √(9x^2-18x+17)=1 Câu trả lời nào sau đây là đúng: ",
        answer: "Phương trình trên vô nghiệm",
        options: [
            "x=0",
            "x=1",
            "x=-2",
            "Phương trình trên vô nghiệm"
        ]
    },
    {
        numb: 8,
        question: "Với giá trị nào của a thì biểu thức √(-√a) có nghĩa a…0",
        answer: "=",
        options: [
            ">",
            "<",
            "=",
            ">="
        ]
    },
    {
        numb: 9,
        question: "Cho x=√(67+16√3), y=√(67-16√3)  khi đó x+y=. . . .",
        answer: "16",
        options: [
            "24",
            "15",
            "16",
            "18"
        ]
    },
    {
        numb: 10,
        question: "Điều kiện xác định của√((x-1)/(x-3))  là",
        answer: "x ≤ 1 hoặc x > 3",
        options: [
            "1 ≤ x ≤ 3",
            "x ≤ 1 hoặc x > 3",
            "x ≤ 1 hoặc x ≥ 3",
            "1 ≤ x < 3"
        ]
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
];
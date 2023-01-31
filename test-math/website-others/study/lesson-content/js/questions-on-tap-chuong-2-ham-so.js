// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Chọn đáp án đúng nhất. Với a ≠ 0 hàm số y = ax + b là hàm số:",
        answer: "Bậc nhất",
        options: [
            "Bậc nhất",
            "Hàm hằng ",
            "Đồng biến",
            "Nghịch biến"
        ]
    },
    {
        numb: 2,
        question: "Cho hàm số f(x) = 3 - x^2. Tính f(-1)",
        answer: "2",
        options: [
            "-2",
            "2",
            "1",
            "0"
        ]
    },
    {
        numb: 3,
        question: "Chọn đáp án đúng nhất. Hàm số y = ax + b là hàm số đồng biến khi:",
        answer: "a > 0",
        options: [
            "a = 0",
            "a < 0",
            "a > 0",
            "a ≠ 0"
        ]
    },
    {
        numb: 4,
        question: "Hai đường thẳng d: y = ax + b(a ≠ 0) và d': y = a'x + b'(a' ≠ 0) có a = a' và b ≠ b'. Khi đó:",
        answer: "d // d’",
        options: [
            "d // d’",
            "d ≡ d’",
            "d cắt d’",
            "d ⊥ d’"
        ]
    },
    {
        numb: 5,
        question: "Cho hàm số bậc nhất y = (2m – 3) x + 7 có đồ thị là đường thẳng d. Tìm m để d // d’: y = 3x + 2",
        answer: "m = 2",
        options: [
            "m = 2",
            "m = −4",
            "m = 2",
            "m = −3"
        ]
    },
    {
        numb: 6,
        question: "Cho đường thẳng d: y = (m + 2)x - 5 đi qua điểm có A(-1; 2). Hệ số góc của đường thẳng d là:",
        answer: "-7",
        options: [
            "1",
            "11",
            "-7",
            "7"
        ]
    },
    {
        numb: 7,
        question: "Viết phương trình đường thẳng d biết d cắt trục tung tại điểm có tung độ bằng −2 và cắt trục hoành tại điểm có hoành độ 1",
        answer: "y = 2x – 2",
        options: [
            "y = 2x + 2",
            "y = −2x – 2",
            "y = 3x – 2",
            "y = 2x – 2"
        ]
    },
    {
        numb: 8,
        question: "Cho đường thẳng y = (m - 2)x + 3 với m là tham số. Hỏi (d) luôn đi qua điểm nào với mọi giá trị của m?",
        answer: "C(0; 3)",
        options: [
            "A(3; 0)",
            "B(3; 1)",
            "C(0; 3)",
            "D(1; 2)"
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
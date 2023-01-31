// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Hai đường thẳng d: y = ax + b (a ≠ 0) và d’: y = a’x + b’ (a’ ≠ 0) có a ≠ a’. Khi đó:",
        answer: "d cắt d’",
        options: [
            "d // d’",
            "d ≡ d’",
            "d cắt d’",
            "d ⊥ d’"
        ]
    },
    {
        numb: 2,
        question: "Cho hai đường thẳng d: y = x + 3 và d’: y = −2x. Khi đó:",
        answer: "d cắt d’",
        options: [
            "d // d’",
            "d ≡ d’",
            "d cắt d’",
            "d ⊥ d’"
        ]
    },
    {
        numb: 3,
        question: "Cho hai đồ thị của hàm số bậc nhất là hai đường thẳng d: y = (m + 2)x – m và d’: y = −2x − 2m + 1. Với giá trị nào của m thì d cắt d’?",
        answer: "m ≠ {−2; −4}",
        options: [
            "m ≠ −2",
            "m ≠ −4",
            "m ≠ {−2; −4}",
            "m ≠ {2; −4}"
        ]
    },
    {
        numb: 4,
        question: "Cho hai đường thẳng d: y = (m + 2)x – m và d’: y = −2x − 2m + 1 là đồ thị của hai hàm số bậc nhất. Với giá trị nào của m thì d // d’?",
        answer: "m = −4",
        options: [
            "m = −2",
            "m = −4",
            "m = 2",
            "m ≠ {2; −4}"
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
        question: "Cho hàm số y = (m – 5) x – 4. Tìm m để hàm số nhận giá trị là 5 khi x = 3",
        answer: "m = 8",
        options: [
            "m = 6",
            "m = 7",
            "m = 8",
            "m = −3"
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
        question: "Viết phương trình đường thẳng d biết d song song với đường thẳng d’: y = 3x + 1 và đi qua điểm M (−2; 2)",
        answer: "y = 3x + 8",
        options: [
            "y = 2x + 8",
            "y = 3x + 8",
            "y = 3x – 8",
            "y = 3x"
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
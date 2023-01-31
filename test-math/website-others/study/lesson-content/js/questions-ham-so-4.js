// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Cho đường thẳng d: y = ax + b (a ≠ 0). Hệ số góc của đường thẳng d là:",
        answer: "a",
        options: [
            "-a",
            "a",
            "1/a",
            "b"
        ]
    },
    {
        numb: 2,
        question: "Cho đường thẳng d: y = −kx + b (k ≠ 0). Hệ số góc của đường thẳng d là:",
        answer: "-k",
        options: [
            "-k",
            "k",
            "1/k",
            "b"
        ]
    },
    {
        numb: 3,
        question: "Cho đường thẳng d: y = ax + b (a > 0). Gọi  là góc tạo bởi tia Ox và d. Khẳng định nào dưới đây là đúng?",
        answer: "a = tanα",
        options: [
            "a = − tanα",
            "a = tan(180 − α)",
            "a = tanα",
            "a = − tan(180 − α)"
        ]
    },
    {
        numb: 4,
        question: "Cho đường thẳng d: y = ax + b (a < 0). Gọi  là góc tạo bởi tia Ox và d. Khẳng định nào dưới đây là đúng?",
        answer: "tanα  < 0",
        options: [
            "tanα  < 0",
            "tanα  > 0",
            "tanα  = 0",
            "tanα  = 1"
        ]
    },
    {
        numb: 5,
        question: "Cho đường thẳng d: y = (m + 2) x – 5 đi qua điểm A (−1; 2). Hệ số góc của đường thẳng d là?",
        answer: "−7",
        options: [
            "1",
            "11",
            "−7",
            "7"
        ]
    },
    {
        numb: 6,
        question: "Tính hệ số góc của đường thẳng d: y = (2m – 4)x + 5 biết nó song song với đường thẳng d’: 2x – y – 3 = 0",
        answer: "2",
        options: [
            "1",
            "−2",
            "3",
            "2"
        ]
    },
    {
        numb: 7,
        question: "Tìm hệ số góc của đường thẳng d biết d đi qua gốc tọa độ O và điểm M(1;3)",
        answer: "3",
        options: [
            "−2",
            "3",
            "1",
            "2"
        ]
    },
    {
        numb: 8,
        question: "Tìm hệ số góc của đường thẳng d: y = (3 – m)x + 2 biết nó vuông góc với đường thẳng d’: x – 2y – 6 = 0",
        answer: "−2",
        options: [
            "−2",
            "3",
            "1",
            "2"
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
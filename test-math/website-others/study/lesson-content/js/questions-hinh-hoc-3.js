// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Cho tam giác MNP vuông tại N. Hệ thức nào sau đây là đúng?",
        answer: "MN = MP. sin P",
        options: [
            "MN = MP. sin P",
            "MN = MP. cos P",
            "MN = MP. tan P",
            "MN = MP. cot P"
        ]
    },
    {
        numb: 2,
        question: "Cho tam giác MNP vuông tại N. Hệ thức nào sau đây là đúng?",
        answer: "NP = MN. cot P",
        options: [
            "NP = MP. sin P",
            "NP = MN. cot P",
            "NP = MN. tan P",
            "NP = MP. cot P"
        ]
    },
    {
        numb: 3,
        question: "Cho tam giác ABC vuông tại A có BC = a, AC = b, AB = c. Chọn khẳng định sai?",
        answer: "a = c. tan B = c. cot C",
        options: [
            "b = a. sin B = a. cos C",
            "a = c. tan B = c. cot C",
            "a^2 = b^2 + c^2",
            "c = a. sin C = a. cos B"
        ]
    },
    {
        numb: 4,
        question: "Cho tam giác ABC vuông tại A có BC = a, AC = b, góc ABC = 50 độ. Chọn khẳng định đúng.",
        answer: "c = b. cot 50 độ",
        options: [
            "b = c. sin 50 độ",
            "b = a. tan 50 độ",
            "b = c. cot 50 độ",
            "c = b. cot 50 độ"
        ]
    },
    {
        numb: 5,
        question: "Cho tam giác ABC có AB = 16, AC = 14 và góc B=60 độ. Tính BC",
        answer: "BC = 10",
        options: [
            "BC = 10",
            "BC = 11",
            "BC = 9",
            "BC = 12"
        ]
    },
    {
        numb: 6,
        question: "Cho tam giác ABC có góc B = 60 độ, góc C = 55 độ, AC = 3,5 cm Diện tích tam giác ABC gần nhất với giá trị nào dưới đây?",
        answer: "5",
        options: [
            "4",
            "5",
            "7",
            "8"
        ]
    },
    {
        numb: 7,
        question: "Cho tam giác ABC có góc B = 70 độ, góc C = 35 độ, AC = 4,5 cm. Diện tích tam giác ABC gần nhất với giá trị nào dưới đây? (làm tròn đến chữ số thập phân thứ hai)",
        answer: "6",
        options: [
            "4",
            "5",
            "6",
            "8"
        ]
    },
    {
        numb: 8,
        question: "Cho tam giác ABC vuông tại A, đường cao AH, biết HB = 9; HC = 16. Tính góc B và góc C.",
        answer: "∠B = 53 độ 8’; ∠C = 36 độ 52’",
        options: [
            "∠B = 53 độ 8’; ∠C = 36 độ 52’",
            "∠B = 36 độ 52’; ∠C = 53 độ 8’",
            "∠B = 48 độ 35’; ∠C = 41 độ 25’",
            "∠B = 41 độ 25’; ∠C = 48 độ 35’"
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
// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Chọn khẳng định đúng về đồ thị hàm số y = ax + b (a ≠ 0)",
        answer: "Là đường thẳng đi qua hai điểm A(0; b), B(-b/a; 0) với b ≠ 0",
        options: [
            "Là đường thẳng đi qua gốc tọa độ",
            "Là đường thẳng song song với trục hoành",
            "Là đường thẳng đi qua hai điểm A(0; b), B(-b/a; 0) với b ≠ 0",
            "a ≠ 0"
        ]
    },
    {
        numb: 2,
        question: "Chọn khẳng định đúng về đồ thị hàm số y = ax + b (a ≠ 0) với b = 0",
        answer: "Là đường thẳng đi qua gốc tọa độ",
        options: [
            "Là đường thẳng đi qua gốc tọa độ",
            "Là đường thẳng song song với trục hoành",
            "Là đường thẳng đi qua hai điểm A(1; b), B(-b/a; 0)",
            "Là đường cong đi qua gốc tọa độ"
        ]
    },
    {
        numb: 3,
        question: "Cho hai đường thẳng d1: y = x – 1 và d2: y = 2 – 3x. Tung độ giao điểm của d1; d2 có tọa độ là:",
        answer: "y = -1/4",
        options: [
            "y = -4",
            "y = 7/4",
            "y = 1/4",
            "y = -1/4"
        ]
    },
    {
        numb: 4,
        question: "Cho hàm số y = (1 – m) x + m. Xác định m để đồ thị hàm số cắt trục hoành tại điểm có hoành độ x = −3",
        answer: "m = 3/4",
        options: [
            "m = 1/2",
            "m = 3/4",
            "m = -3/4",
            "m = 4/5"
        ]
    },
    {
        numb: 5,
        question: "Cho hàm số y = (m + 1) x – 1 có đồ thị là đường thẳng d1 và hàm số y = x + 1 có đồ thị là đường thẳng d2. Xác định m để hai đường thẳng d1 và d2 cắt nhau tại một điểm có tung độ y = 4",
        answer: "m = 2/3",
        options: [
            "m = 3/2",
            "m = -3/2",
            "m = 2/3",
            "m = -2/3"
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
// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Cho tam giác ABC vuông tại A , đường cao AH. Hệ thức nào sau đây là đúng?",
        answer: "AH^2 = BH.CH",
        options: [
            "AH^2 = AB.AC",
            "AH^2 = BH.CH",
            "AH^2 = AB.BH",
            "AH^2 = CH.BC"
        ]
    },
    {
        numb: 2,
        question: "Cho tam giác ABC vuông tại A , đường cao AH, AB = 12 cm, BC = 20 cm. Đặt BH = x, HC = y. Tính x, y",
        answer: "x = 7,2 cm; y = 12,8 cm",
        options: [
            "x = 7,2 cm; y = 11,8 cm",
            "x = 7 cm; y = 12 cm",
            "x = 7,2 cm; y = 12,8 cm",
            "x = 7,2cm; y = 12 cm"
        ]
    },
    {
        numb: 3,
        question: "Cho tam giác ABC vuông tại A , đường cao AH . Cho biết AB:AC = 3:4 và AH = 6 cm. Tính độ dài đoạn thẳng CH",
        answer: "CH = 8",
        options: [
            "CH = 8",
            "CH = 6",
            "CH = 10",
            "CH = 12"
        ]
    },
    {
        numb: 4,
        question: "Cho α và β là góc nhọn bất kỳ thỏa mãn α + β = 90° . Chọn khẳng định đúng.",
        answer: "tanα = cotβ",
        options: [
            "α + β = 90°",
            "tanα = cotβ",
            "tanα = cosα",
            "tanα = tanβ"
        ]
    },
    {
        numb: 5,
        question: "Cho tam giác ABC vuông tại A có BC = a, AC = b, AB = c. Chọn khẳng định sai?",
        answer: "a = c.tanB = c.cotC",
        options: [
            "b = a.sinB = a.cosC",
            "a = c.tanB = c.cotC",
            "a^2 = b^2 + c^2",
            "c = a.sinC = a.cosB"
        ]
    },
    {
        numb: 6,
        question: "Một cột đèn có bóng trên mặt đất dài 7,5 m. Các tia nắng mặt trời tạo với mặt đất một góc xấp xỉ bằng 42°. Tính chiều cao của cột đèn (làm tròn đến chữ số thập phân thứ ba)",
        answer: "6,753 m",
        options: [
            "6,753 m",
            "6,75 m",
            "6,751 m",
            "6,755 m"
        ]
    },
    {
        numb: 7,
        question: "Một cầu trượt trong công viên có độ dốc là 28° và có độ cao là 2,1 m. Tính độ dài của mặt cầu trượt (làm tròn đến chữ số thập phân thứ hai)",
        answer: "4,47 m",
        options: [
            "3,95 m",
            "3,8 m",
            "4,5 m",
            "4,47 m"
        ]
    },
    {
        numb: 8,
        question: "Một cột đèn điện AB cao 6m có bóng in trên mặt đất là AC dài 3,5m. Hãy tính góc (làm tròn đến phút) mà tia sáng mặt trời tạo với mặt đất",
        answer: "59°45'",
        options: [
            "58°45'",
            "59°50'",
            "59°45'",
            "58°4'"
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
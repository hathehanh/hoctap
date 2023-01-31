// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Mỗi một tam giác có bao nhiêu đường tròn bàng tiếp tam giác?",
        answer: "3",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        numb: 2,
        question: "Cho hai tiếp tuyến của một đường tròn cắt nhau tại một điểm. Chọn khẳng định sai?",
        answer: "Tia nối từ điểm đó tới tâm là tia phân giác của góc tạo bởi hai bán kính",
        options: [
            "Khoảng cách từ điểm đó đến hai tiếp điểm là bằng nhau.",
            "Tia nối từ điểm đó tới tâm là tia phân giác của góc tạo bởi hai bán kính",
            "Tia nối từ tâm tới điểm đó là tia phân giác của góc tạo bởi hai bán kính",
            "Tia nối từ điểm đó tới tâm là tia phân giác của góc tạo bởi tiếp tuyến"
        ]
    },
    {
        numb: 3,
        question: "Tâm đường tròn nội tiếp tam giác là?",
        answer: "giao của ba đường phân giác góc trong tam giác",
        options: [
            "giao của ba đường phân giác góc trong tam giác",
            "giao ba đường trung trực của tam giác",
            "trọng tâm tam giác",
            "trực tâm tam giác"
        ]
    },
    {
        numb: 4,
        question: "Cho nửa đường tròn tâm O, đường kính AB. Vẽ các tiếp tuyến Ax, By với nửa đường tròn cùng phía đối với AB. Từ diểm M trên nửa đường tròn (M khác A, B) vẽ tiếp tuyến với nửa đường tròn, cắt Ax, By lần lượt tại C và D. Khi đó MC.MD bằng?",
        answer: "OM^2",
        options: [
            "OC^2",
            "OM^2",
            "OD^2",
            "OM"
        ]
    },
    {
        numb: 5,
        question: "Cho đường tròn (O). Từ một điểm M ở ngoài (O), vẽ hai tiếp tuyến MA và MB sao cho góc AMB bằng 120o. Biết chu vi tam giác MAB là 6 (3 + 2√3)cm, tính độ dài dây AB.",
        answer: "18 cm",
        options: [
            "18 cm",
            "6√3 cm ",
            "12√3 cm",
            "15 cm"
        ]
    },
    {
        numb: 6,
        question: "“Cho hai tiếp tuyến của một đường tròn cắt nhau tại một điểm. Tia nối từ điểm đó tới tâm là tia phân giác của góc tạo bởi… Tia nối từ tâm tới điểm đó là tia phân giác của góc tạo bởi…”. Hai cụm từ thích hợp vào chỗ trống lần lượt là:",
        answer: "hai tiếp tuyến, hai bán kính đi qua tiếp điểm",
        options: [
            "hai tiếp tuyến, hai bán kính đi qua tiếp điểm",
            "hai bán kính đi qua tiếp điểm, hai tiếp tuyến",
            "hai tiếp tuyến, hai dây cung",
            "hai dây cung, hai bán kính"
        ]
    },
    {
        numb: 7,
        question: "Hai tiếp tuyến tại A và B của đường tròn (O) cắt nhau tại I. Đường thẳng qua I và vuông góc với IA cắt OB tại K. Chọn khẳng định đúng.",
        answer: "KI = KO",
        options: [
            "OI = OK = KI",
            "KI = KO",
            "OI = OK",
            "IO = IK"
        ]
    },
    {
        numb: 8,
        question: "Cho tam giác ABC cân tại A, I là tâm đường tròn nội tiếp, K là tâm đường tròn bàng tiếp trong góc A. Gọi O là trung điểm của IK. Tâm của đường tròn đi qua bốn điểm B, I, C, K là:",
        answer: "Điểm O",
        options: [
            "Điểm O",
            "Điểm H",
            "Trung điểm AK",
            "Trung điểm BK"
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
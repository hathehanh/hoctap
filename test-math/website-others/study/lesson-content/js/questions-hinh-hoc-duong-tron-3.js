// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Cho (O; 5cm). Đường thẳng d là tiếp tuyến của đường tròn (O; 5cm), khi đó:",
        answer: "Khoảng cách từ O đến đường thẳng d bằng 5cm",
        options: [
            "Khoảng cách từ O đến đường thẳng d nhỏ hơn 5cm",
            "Khoảng cách từ O đến đường thẳng d lớn hơn 5cm",
            "Khoảng cách từ O đến đường thẳng d bằng 5cm",
            "Khoảng cách từ O đến đường thẳng d bằng 6cm"
        ]
    },
    {
        numb: 2,
        question: "Cho góc xOy, trên Ox lấy P, trên Oy lấy Q sao cho chu vi ΔPOQ bằng 2a không đổi. Chọn câu đúng.",
        answer: "PQ luôn tiếp xúc với một đường tròn cố định",
        options: [
            "PQ luôn tiếp xúc với một đường tròn cố định",
            "PQ không tiếp xúc với một đường tròn cố định nào",
            "PQ = a",
            "PQ = OP"
        ]
    },
    {
        numb: 3,
        question: "Cho (O; R). Đường thẳng d là tiếp tuyến của đường tròn (O; R) tại tiếp điểm A khi:",
        answer: "d ⊥ OA tại A và A ∈ (O)",
        options: [
            "d ⊥ OA tại A và A ∈ (O)",
            "d ⊥ OA",
            "A ∈ (O)",
            "d // OA"
        ]
    },
    {
        numb: 4,
        question: "“Nếu một đường thẳng đi qua một điểm của đường tròn và… thì đường thẳng ấy là một tiếp tuyến của đường tròn”. Cụm từ thích hợp điền vào chỗ trống là:",
        answer: "vuông góc với bán kính đi qua điểm đó",
        options: [
            "song song với bán kính đi qua điểm đó",
            "vuông góc với bán kính đi qua điểm đó",
            "song song với bán kính đường tròn",
            "vuông góc với bán kính bất kì"
        ]
    },
    {
        numb: 5,
        question: "Cho tam giác MNP có MN = 5cm; NP = 12cm; MP = 13cm. Vẽ đường tròn (M; NM). Khẳng định nào sau đây là đúng?",
        answer: "NP là tiếp tuyến của (M; MN)",
        options: [
            "NP là tiếp tuyến của (M; MN)",
            "MP là tiếp tuyến của (M; MN)",
            "∆MNP vuông tại M",
            "∆MNP vuông tại P"
        ]
    },
    {
        numb: 6,
        question: "Cho tam giác ABC vuông tại A, đường cao AH. Đường tròn đường kính BH cắt AB tại D, đường tròn đường kính CH cắt AC tại E. Chọn khẳng định sai trong các khẳng định sau:",
        answer: "DE là cát tuyến của đường tròn đường kính BH",
        options: [
            "DE là cát tuyến của đường tròn đường kính BH",
            "DE là tiếp tuyến của đường tròn đường kính BH",
            "Tứ giác AEHD là hình chữ nhật",
            "DE ⊥ DI (với I là trung điểm BH)"
        ]
    },
    {
        numb: 7,
        question: "Cho đường tròn (O), dây AB khác đường kính. Qua O kẻ đường vuông góc với AB, cắt tiếp tuyến tại A của đường tròn ở điểm C. Chọn khẳng định đúng:",
        answer: "BC là tiếp tuyến của (O)",
        options: [
            "BC là cát tuyến của (O)",
            "BC là tiếp tuyến của (O)",
            "BC ⊥ AB",
            "BC // AB"
        ]
    },
    {
        numb: 8,
        question: "Cho nửa đường tròn đường kính AB, C là một điểm thuộc nửa đường tròn. Vẽ dây BD là phân giác góc ABC. BD cắt AC tại E, AD cắt BC tại G. H là điểm đối xứng với E qua D. Chọn câu đúng:",
        answer: "Cả A và C đều đúng",
        options: [
            "AH là tiếp tuyến của đường tròn đường kính AB",
            "HG là tiếp tuyến của đường tròn đường kính AB",
            "Góc ADB = 90⁰",
            "Cả A và C đều đúng"
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
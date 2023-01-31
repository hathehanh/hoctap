// creating an array and passing the number, questions, options, and answers
let questions = [{
        numb: 1,
        question: "Cho hai đường tròn (O; R) và (O’; r) với R > r cắt nhau tại hai điểm phân biệt và OO’ = d. Chọn khẳng định đúng.",
        answer: "R – r < d < R + r",
        options: [
            "d = R – r",
            "d > R + r",
            "R – r < d < R + r",
            "d < R + r"
        ]
    },
    {
        numb: 2,
        question: "Nếu hai đường tròn tiếp xúc nhau thì số điểm chung của hai đường tròn là:",
        answer: "1",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        numb: 3,
        question: "Cho đoạn OO’ và điểm A nằm trên đoạn OO’ sao cho OA = 2O’A. Đường tròn (O) bán kính OA và đường tròn (O’) bán kính O’A. Vị trí tương đối của hai đường tròn là:",
        answer: "Tiếp xúc ngoài",
        options: [
            "Nằm ngoài nhau",
            "Cắt nhau",
            "Tiếp xúc ngoài",
            "Tiếp xúc trong"
        ]
    },
    {
        numb: 4,
        question: "Cho (O; 3cm) tiếp xúc ngoài với (O’; 1cm). Vẽ bán kính O1B và O’C song song với nhau cùng thuộc một nửa mặt phẳng bờ OO’. Tính độ dài OD.",
        answer: "OD = 6 cm",
        options: [
            "OD = 4,5 cm",
            "OD = 5 cm",
            "OD = 8 cm",
            "OD = 6 cm"
        ]
    },
    {
        numb: 5,
        question: "Cho hai đường tròn (O; 6cm) và (O’; 2cm) cắt nhau tại A, B sao cho OA là tiếp tuyến của (O’). Độ dài dây AB là:. . .(cm) (chỉ lấy phần nguyên)",
        answer: "3",
        options: [
            "1",
            "2",
            "3",
            "4"
        ]
    },
    {
        numb: 6,
        question: "Cho hai đường tròn (O1) và (O2) tiếp xúc ngoài tại A và một đường thẳng d tiếp xúc với (O1); (O2) lần lượt tại B, C. Tam giác ABC là:ừ tâm tới điểm đó là tia phân giác của góc tạo bởi…”. Hai cụm từ thích hợp vào chỗ trống lần lượt là:",
        answer: "Tam giác vuông",
        options: [
            "Tam giác cân",
            "Tam giác đều",
            "Tam giác vuông",
            "Tam giác vuông cân"
        ]
    },
    {
        numb: 7,
        question: "Hai tiếp tuyến tại A và B của đường tròn (O) cắt nhau tại I. Đường thẳng qua I và vuông góc với IA cắt OB tại K. Chọn khẳng định đúng.",
        answer: "KI = KO",
        options: [
            "90°",
            "60°",
            "100°",
            "80°"
        ]
    },
    {
        numb: 8,
        question: "Cho hai đường tròn (O; 20cm) và (O’; 15cm) cắt nhau tại A và B. Tính đoạn nối tâm OO’. Biết rằng AB = 24cm và O, O’ nằm cùng phía đối với AB",
        answer: "OO’ = 7 cm",
        options: [
            "OO’ = 7 cm",
            "OO’ = 8 cm",
            "OO’ = 9 cm",
            "OO’ = 25 cm"
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
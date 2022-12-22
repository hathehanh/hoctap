// Let's code our chatbot's logic!
function IsEnter() {
    var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.

    // If enter key is pressed then only respond.
    if (TextBox_val != "") {
        if (event.keyCode == 13)
            main();
    }
}

function main() {
    // the main logic will be coded here.
    var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
    var ResponseText_val = document.getElementById("ResponseText"); // Get all the data from the response text.

    var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.
    // For example "Apple" -> "apple".

    // Let's code the Logic for chatting...
    // and like this you can add several more features to it make it really advance.
    // As i said, i will be uploading it's source code it github so just check the link in description!
    if (FormatInput.includes("chào mafox") || FormatInput.includes("chào"))
        ResponseText_val.innerHTML = "Fox chào bạn nha!";

    else if (FormatInput.includes("bạn có khỏe không?"))
        ResponseText_val.innerHTML = "Tôi Khỏe Lắm! Cảm Ơn Bạn";

    else if (FormatInput.includes("Bác Hồ sinh năm mấy") || FormatInput.includes("Chủ tịch Hồ Chí Minh sinh năm nào"))
        ResponseText_val.innerHTML = "Chủ Tịch: Hồ Chí Minh sinh ngày 19 tháng 5, 1890";

    else if (FormatInput.includes("đường phân giác là gì") || FormatInput.includes("đường phân giác là gì?") || FormatInput.includes("bạn cho mình hỏi đường phân giác là gì") || FormatInput.includes("thế nào là đường phân giác"))
        ResponseText_val.innerHTML = "Tia phân giác của một góc là tia nằm giữa hai cạnh của góc và tạo với hai cạnh đó 2 góc băng nhau";

    else if (FormatInput.includes("đường cao là gì") || FormatInput.includes("đường cao là gì?") || FormatInput.includes("bạn cho mình hỏi đường cao là gì") || FormatInput.includes("thế nào là đường cao"))
        ResponseText_val.innerHTML = "Đường cao của một tam giác là đoạn thẳng kẻ từ một đỉnh và vuông góc với cạnh đối diện";

    else if (FormatInput.includes("đường trung trực là gì") || FormatInput.includes("đường trung trực là gì?") || FormatInput.includes("bạn cho mình hỏi đường trung trực là gì") || FormatInput.includes("thế nào là đường trung trực"))
        ResponseText_val.innerHTML = "Đường thẳng đi qua trung điểm của đoạn thẳng và vuông góc với đoạn thẳng gọi là đường trung trực của đoạn thẳng đó";

    else if (FormatInput.includes("đường trung tuyến là gì") || FormatInput.includes("đường trung tuyến là gì?") || FormatInput.includes("bạn cho mình hỏi đường trung tuyến là gì") || FormatInput.includes("thế nào là đường trung tuyến"))
        ResponseText_val.innerHTML = "Đường trung tuyến trong tam giác là một đoạn thẳng nối từ đỉnh của tam giác tới trung điểm của cạnh đối diện";


    else if (FormatInput.includes("trung điểm của đoạn thẳng là gì") || FormatInput.includes("trung điểm là gì") || FormatInput.includes("trung điểm là gì?"))
        ResponseText_val.innerHTML = "Trung điểm là điểm nằm chính giữa đoạn thẳng, chia đoạn thẳng ra làm hai đoạn dài bằng nhau.";

    else if (FormatInput.includes("cách để vẽ đường tròn") || FormatInput.includes("làm sao để vẽ đường tròn") || FormatInput.includes("vẽ đường tròn"))
        ResponseText_val.innerHTML = "Bạn chỉ cần lắp bút vào đầu compa vặn thật chặt cho 2 chân đều nhau. Bạn đặt tâm đường tròn vào vị trí sau đó lựa chọn đường kính phù hợp rồi quay compa để vẽ đường là xong";
    // Open websites!
    else if (FormatInput.includes("mở google")) {
        // "https://" is important!
        ResponseText_val.innerHTML = "mở Google";
        window.open("https://www.google.com", "_blank");
    } else if (FormatInput.includes("mở youtube")) {
        // "https://" is important!
        ResponseText_val.innerHTML = "mở YouTube";
        window.open("https://www.youtube.com", "_blank");
    } else
        ResponseText_val.innerHTML = "Fox không hiểu bạn đang nói gì! Bạn hãy thử viết thường tất cả chữ và viết hoa chữ cái đầu của tên riêng nhé!";
}

// THANKS FOR WATCHING!!!
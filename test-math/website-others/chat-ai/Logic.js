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

    else if (FormatInput.includes("đường cao là gì") || FormatInput.includes("đường cao là gì?") || FormatInput.includes("đường cao") || FormatInput.includes("bạn cho mình hỏi đường cao là gì") || FormatInput.includes("thế nào là đường cao"))
        ResponseText_val.innerHTML = "Đường cao của một tam giác là đoạn thẳng kẻ từ một đỉnh và vuông góc với cạnh đối diện";

    else if (FormatInput.includes("đường trung trực là gì") || FormatInput.includes("đường trung trực là gì?") || FormatInput.includes("đường trung trực") || FormatInput.includes("bạn cho mình hỏi đường trung trực là gì") || FormatInput.includes("thế nào là đường trung trực"))
        ResponseText_val.innerHTML = "Đường thẳng đi qua trung điểm của đoạn thẳng và vuông góc với đoạn thẳng gọi là đường trung trực của đoạn thẳng đó";

    else if (FormatInput.includes("đường trung tuyến là gì") || FormatInput.includes("đường trung tuyến là gì?") || FormatInput.includes("đường trung tuyến") || FormatInput.includes("bạn cho mình hỏi đường trung tuyến là gì") || FormatInput.includes("thế nào là đường trung tuyến"))
        ResponseText_val.innerHTML = "Đường trung tuyến trong tam giác là một đoạn thẳng nối từ đỉnh của tam giác tới trung điểm của cạnh đối diện";

    else if (FormatInput.includes("Ví dụ về hàm số bậc nhất") || FormatInput.includes("ví dụ về hàm số bậc nhất") || FormatInput.includes("ví dụ hàm số bậc nhất") || FormatInput.includes("cho ví dụ về hàm số bậc nhất"))
        ResponseText_val.innerHTML = "Ví dụ: y=2x+3 là hàm số bậc nhất,y=0x+5 không phải là hàm số bậc nhất";

    else if (FormatInput.includes("Ví dụ về khái niệm hàm số") || FormatInput.includes("ví dụ về khái niệm hàm số") || FormatInput.includes("ví dụ khái niệm hàm số") || FormatInput.includes("cho ví dụ về khái niệm hàm số"))
        ResponseText_val.innerHTML = "Ta có y = 3x + 1 là một hàm số cho dưới dạng công thức. Đây là một hàm số bậc nhất. Nếu x = 0 thì ta có y = 3.0 + 1 = 1. Nếu x = 1 thì ta có y = 3.1 + 1 = 4.";


    else if (FormatInput.includes("trung điểm của đoạn thẳng là gì") || FormatInput.includes("trung điểm là gì") || FormatInput.includes("trung điểm") || FormatInput.includes("trung điểm là gì?"))
        ResponseText_val.innerHTML = "Trung điểm là điểm nằm chính giữa đoạn thẳng, chia đoạn thẳng ra làm hai đoạn dài bằng nhau.";
    else if (FormatInput.includes("hệ quả của góc nội tiếp?") || FormatInput.includes("Hệ quả của góc nội tiếp?") || FormatInput.includes("hệ quả của góc nội tiếp") || FormatInput.includes("hệ quả góc nội tiếp") || FormatInput.includes("hệ quả của góc nội tiếp?") || FormatInput.includes("hệ quả góc nội tiếp?") || FormatInput.includes("he qua cua goc noi tiep?") || FormatInput.includes("He qua cua goc noi tiep?") || FormatInput.includes("hệ quả của góc nội tiếp") || FormatInput.includes("Hệ quả của góc nội tiếp") || FormatInput.includes("he qua cua goc noi tiep") || FormatInput.includes("He qua cua goc noi tiep"))
        ResponseText_val.innerHTML = "Các góc nội tiếp bằng nhau chắn các cung bằng nhau. Các góc nội tiếp cùng chắn một cung hoặc chắn các cung bằng nhau thì bằng nhau. Góc nội tiếp (nhỏ hơn hoặc bằng 90°) có số đo bằng nửa số đo góc ở tâm cùng chắn một cung. Góc nội tiếp chắn nửa đường tròn là góc vuông.";

    else if (FormatInput.includes("góc nội tiếp là gì?") || FormatInput.includes("Góc nội tiếp là gì?") || FormatInput.includes("góc nội tiếp") || FormatInput.includes("góc nội tiếp?") || FormatInput.includes("góc nội tiếp là gì") || FormatInput.includes("Goc noi tiep la gi?") || FormatInput.includes("goc noi tiep la gi?") || FormatInput.includes("Góc nội tiếp là gì") || FormatInput.includes("Goc noi tiep la gi") || FormatInput.includes("goc noi tiep la gi"))
        ResponseText_val.innerHTML = "Góc nội tiếp là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó";

    else if (FormatInput.includes("hệ quả của góc nội tiếp?") || FormatInput.includes("Hệ quả của góc nội tiếp?") || FormatInput.includes("hệ quả của góc nội tiếp") || FormatInput.includes("hệ quả góc nội tiếp") || FormatInput.includes("hệ quả của góc nội tiếp?") || FormatInput.includes("hệ quả góc nội tiếp?") || FormatInput.includes("he qua cua goc noi tiep?") || FormatInput.includes("He qua cua goc noi tiep?") || FormatInput.includes("hệ quả của góc nội tiếp") || FormatInput.includes("Hệ quả của góc nội tiếp") || FormatInput.includes("he qua cua goc noi tiep") || FormatInput.includes("He qua cua goc noi tiep"))
        ResponseText_val.innerHTML = "Các góc nội tiếp bằng nhau chắn các cung bằng nhau. Các góc nội tiếp cùng chắn một cung hoặc chắn các cung bằng nhau thì bằng nhau. Góc nội tiếp (nhỏ hơn hoặc bằng 90°) có số đo bằng nửa số đo góc ở tâm cùng chắn một cung. Góc nội tiếp chắn nửa đường tròn là góc vuông.";

    else if (FormatInput.includes("bạn là ai?") || FormatInput.includes("Bạn là ai?") || FormatInput.includes("ban la ai?") || FormatInput.includes("Ban la ai?") || FormatInput.includes("bạn là ai") || FormatInput.includes("Bạn là ai") || FormatInput.includes("ban la ai") || FormatInput.includes("Ban la ai"))
        ResponseText_val.innerHTML = "Mình là MAFOX, giúp bạn trả lời những câu hỏi về toán";

    else if (FormatInput.includes("căn bậc hai là gì") || FormatInput.includes("Căn bậc hai là gì") || FormatInput.includes("căn bậc hai") || FormatInput.includes("căn bậc 2") || FormatInput.includes("căn bậc hai") || FormatInput.includes("can bac hai la gi") || FormatInput.includes("Can bac hai la gi") || FormatInput.includes("căn bậc hai là gì?") || FormatInput.includes("Căn bậc hai là gì?") || FormatInput.includes("can bac hai la gi?") || FormatInput.includes("Can bac hai la gi?"))
        ResponseText_val.innerHTML = "căn bậc hai của một số a là một số x sao cho x^2 = a, hay nói cách khác là số x mà bình phương lên thì = a.";

    else if (FormatInput.includes("hằng đẳng thức đáng nhớ?") || FormatInput.includes("Hằng đẳng thức đáng nhớ?") || FormatInput.includes("hằng đẳng thức") || FormatInput.includes("hang dang thuc dang nho?") || FormatInput.includes("hang dang thuc dang nho?") || FormatInput.includes("hằng đẳng thức đáng nhớ") || FormatInput.includes("Hằng đẳng thức đáng nhớ") || FormatInput.includes("hang dang thuc dang nho") || FormatInput.includes("Hang dang thuc dang nho"))
        ResponseText_val.innerHTML = "( A + B )^2 = A^2 + 2AB + B^2; ( A - B )^2 = A^2 -2AB + B^2; A^2 – B^2= ( A – B )( A + B ); ( A + B )^3 = A^3 +3A^2B + 3AB^2 + B^3; ( A - B )^3 = A^3 -3A^2B + 3AB^2 - B^3; A^3 + B^3 = ( A + B )( A^2 – AB + B^2 ); A^3 -B^3 = ( A - B )( A^2 +AB + B^2 )";

    else if (FormatInput.includes("định lý talet?") || FormatInput.includes("Định lý talet?") || FormatInput.includes("ta-lét") || FormatInput.includes("talet") || FormatInput.includes("Ta-lét") || FormatInput.includes("ta-lét?") || FormatInput.includes("talet?") || FormatInput.includes("Ta-lét?") || FormatInput.includes("dinh ly talet?") || FormatInput.includes("Dịnh ly talet?") || FormatInput.includes("định lý talet") || FormatInput.includes("Định lý talet") || FormatInput.includes("dinh ly talet") || FormatInput.includes("Dịnh ly talet"))
        ResponseText_val.innerHTML = "Nếu 1 đường thẳng song song với 1 cạnh của tam giác đó và cắt 2 cạnh còn lại thì nó định ra trên 2 cạnh đó những đoạn thẳng tương ứng tỉ lệ";

    else if (FormatInput.includes("căn bậc ba là gì") || FormatInput.includes("Căn bậc ba là gì") || FormatInput.includes("căn bậc ba") || FormatInput.includes("căn bậc 3") || FormatInput.includes("can bac ba la gi") || FormatInput.includes("Can bac ba la gi") || FormatInput.includes("căn bậc ba là gì?") || FormatInput.includes("Căn bậc ba là gì?") || FormatInput.includes("can bac ba la gi?") || FormatInput.includes("Can bac ba la gi?"))
        ResponseText_val.innerHTML = "căn bậc ba của một số x là một số a sao cho a^3 = x";

    else if (FormatInput.includes("cách học toán tốt?") || FormatInput.includes("Cách học toán tốt?") || FormatInput.includes("cách học") || FormatInput.includes("cach hoc toan tot?") || FormatInput.includes("Cach hoc toan tot?") || FormatInput.includes("cách học toán tốt") || FormatInput.includes("Cách học toán tốt") || FormatInput.includes("cach hoc toan tot") || FormatInput.includes("Cach hoc toan tot"))
        ResponseText_val.innerHTML = "1. Nắm chắc các lý thuyết, định nghĩa. 2.	Không học dồn. 3. Thường xuyên phát biểu trước lớp trong giờ toán. 4. Thường xuyên thực hành. 5. Vừa học vừa luyện đề";

    else if (FormatInput.includes("hệ thức vi-ét") || FormatInput.includes("hệ thức vi-ét?") || FormatInput.includes("hệ thức vi-ét là gì") || FormatInput.includes("hệ thức vi-ét là gì?") || FormatInput.includes("hệ thức viet?") || FormatInput.includes("Hệ thức viet?") || FormatInput.includes("he thuc viet?") || FormatInput.includes("He thuc viet?") || FormatInput.includes("hệ thức viet") || FormatInput.includes("Hệ thức viet") || FormatInput.includes("he thuc viet") || FormatInput.includes("He thuc vie?"))
        ResponseText_val.innerHTML = "Giả sử hai số thực x1 và x2 thỏa mãn hệ thức: x1 + x2 = S và x1.x2 = P (S^2-4P ≥ 0) thì x1 và x2 là 2 nghiệm của phương trình bậc 2: x^2-Sx+P=0";

    else if (FormatInput.includes("Dấu hiệu nhận biết tứ giác nội tiếp?") || FormatInput.includes("Dấu hiệu nhận biết tứ giác nội tiếp?") || FormatInput.includes("tứ giác nội tiếp") || FormatInput.includes("tứ giác nội tiếp?") || FormatInput.includes("Dau hieu nhan biet tu giac noi tiep?") || FormatInput.includes("Dau hieu nhan biết cua tu giac noi tiep?") || FormatInput.includes("Dấu hiệu nhận biết tứ giác nội tiếp") || FormatInput.includes("dấu hiệu nhận biết tứ giác nội tiếp") || FormatInput.includes("dấu hiệu nhận biết tứ giác nội tiếp?") || FormatInput.includes("Dau hieu nhan biet tu giac noi tiep") || FormatInput.includes("Dau hieu nhan biet cua tu giac noi tiep"))
        ResponseText_val.innerHTML = "Tứ giác có tổng hai góc đối bằng 180°. Tứ giác có góc ngoài tại một đỉnh bằng góc trong tại đỉnh đối với đỉnh đó. Tứ giác có bốn đỉnh cách đều một điểm (mà có thể xác định được). Điểm đó là tâm đường tròn ngoại tiếp tứ giác. Tứ giác có hai đỉnh kề nhau cùng nhìn cạnh chứa hai đỉnh còn lại dưới cùng một góc α";

    else if (FormatInput.includes("cách tính nhẩm nhanh") || FormatInput.includes("Cách tính nhẩm nhanh") || FormatInput.includes("cach tinh nham nhanh") || FormatInput.includes("Cach tinh nham nhanh") || FormatInput.includes("cách tính nhẩm nhanh ?") || FormatInput.includes("Cách tính nhẩm nhanh ?") || FormatInput.includes("cach tinh nham nhanh ?") || FormatInput.includes("Cach tinh nham nhanh ?"))
        ResponseText_val.innerHTML = "Khi sử dụng cách tính nhẩm nhanh phép cộng hai số thì bạn nên đặt số lớn hơn trước số nhỏ rồi mới bắt đầu tính nhẩm, việc làm này giúp bạn tính nhẩm được nhanh hơn. (2 + 48 sẽ chuyển thành 48 + 2)";

    else if (FormatInput.includes("hàm số đồng biến") || FormatInput.includes("hàm số nghịch biến") || FormatInput.includes("đồng biến") || FormatInput.includes("nghịch biến"))
        ResponseText_val.innerHTML = "Hàm số bậc nhất y = ax + b đồng biến trên R khi a > 0 và nghịch biến trên R khi a < 0";

    else if (FormatInput.includes("hàm số bậc nhất là gì") || FormatInput.includes("Hàm số bậc nhất là gì") || FormatInput.includes("khái niệm hàm số bậc nhất") || FormatInput.includes("ham so bac nhat la gi") || FormatInput.includes("Ham so bac nhat la gi") || FormatInput.includes("hàm số bậc nhất là gì?") || FormatInput.includes("Hàm số bậc nhất là gì?") || FormatInput.includes("ham so bac nhat la gi?") || FormatInput.includes("Ham so bac nhat la gi?"))
        ResponseText_val.innerHTML = "Hàm số bậc nhất là hàm số được cho bởi công thức y = ax + b, trong đó a, b là các số thực cho trước a ≠ 0. Để xem ví dụ về khái niệm của hàm số bạn hãy nhập vào khung trò chuyện từ khóa 'Ví dụ về hàm số bậc nhất'.";

    else if (FormatInput.includes("khái niệm hàm số") || FormatInput.includes("Khái niệm hàm số") || FormatInput.includes("hàm số là gì") || FormatInput.includes("hàm số là gì?") || FormatInput.includes("khai niem ham so") || FormatInput.includes("Khái niem ham so") || FormatInput.includes("khái niệm hàm số?") || FormatInput.includes("Khái niệm hàm số?") || FormatInput.includes("khai niem ham so?") || FormatInput.includes("Khái niem ham so?"))
        ResponseText_val.innerHTML = "Ta có thể hiểu hàm số như một cái máy có 1 đầu vào (in) và 1 đầu ra (out). Ta cho mỗi giá trị của x vào máy thì nó sẽ cho ra chỉ một giá trị y tương ứng. Khi đó, y được gọi là hàm số của x và x được gọi là biến số. Để xem ví dụ về khái niệm của hàm số bạn hãy nhập vào khung trò chuyện từ khóa 'Ví dụ về khái niệm hàm số'.";

    else if (FormatInput.includes("Vị trí tương đối của đường thẳng và đường tròn") || FormatInput.includes("vị trí tương đối của đường thẳng và đường tròn") || FormatInput.includes("tương đối") || FormatInput.includes("Vi tri tuong doi cua duong thang và duong tron") || FormatInput.includes("vi tri tuong doi cua duong thang va duong tron") || FormatInput.includes("Vị trí tương đối của đường thẳng và đường tròn?") || FormatInput.includes("vị trí tương đối của đường thẳng và đường tròn?") || FormatInput.includes("Vi tri tuong doi cua duong thang và duong tron?") || FormatInput.includes("vi tri tuong doi cua duong thang va duong tron?"))
        ResponseText_val.innerHTML = "Ba trường hợp về vị trí tương đối giữa đường thẳng với đường tròn là: Đường thẳng và đường tròn cắt nhau tại hai điểm. Đường thẳng và đường tròn tiếp xúc vuông góc tại một điểm duy nhất. Đường thẳng và đường tròn không giao nhau";

    else if (FormatInput.includes("dấu hiệu nhận biết tiếp tuyến của đường tròn") || FormatInput.includes("Dấu hiệu nhận biết tiếp tuyến của đường tròn") || FormatInput.includes("tiếp tuyến của đường tròn") || FormatInput.includes("tiếp tuyến của đường tròn?") || FormatInput.includes("tiếp tuyến của đường tròn") || FormatInput.includes("dau hieu nhan biet tiep tuyen cua duong tron") || FormatInput.includes("dau hieu nhan biet tiep tuyen cua duong tron") || FormatInput.includes("dấu hiệu nhận biết tiếp tuyến của đường tròn?") || FormatInput.includes("Dấu hiệu nhận biết tiếp tuyến của đường tròn?") || FormatInput.includes("dau hieu nhan biet tiep tuyen cua duong tron?") || FormatInput.includes("dau hieu nhan biet tiep tuyen cua duong tron?"))
        ResponseText_val.innerHTML = "Nếu một đường thẳng mà đi qua một điểm của đường tròn và sẽ vuông góc với bán kính đi qua điểm đó thì đường thẳng ấy sẽ là một tiếp tuyến của đường tròn";

    else if (FormatInput.includes("Tính chất giữa hai tiếp tuyến cắt nhau") || FormatInput.includes("2 tiếp tuyến của đường tròn cắt nhau") || FormatInput.includes("tiếp tuyến cắt nhau") || FormatInput.includes("tiếp tuyến cắt nhau?") || FormatInput.includes("2 tiếp tuyến cắt nhau") || FormatInput.includes("2 tiếp tuyến cắt nhau?") || FormatInput.includes("hai tiếp tuyến cắt nhau") || FormatInput.includes("tiếp tuyến cắt nhau") || FormatInput.includes("tính chất giữa hai tiếp tuyến cắt nhau") || FormatInput.includes("tiếp tuyến cắt nhau") || FormatInput.includes("tinh chat giua hai tiep tuyen cat nhau") || FormatInput.includes("Tinh chat giua hai tiep tuyen cat nhau") || FormatInput.includes("Tính chất giữa hai tiếp tuyến cắt nhau?") || FormatInput.includes("tính chất giữa hai tiếp tuyến cắt nhau?") || FormatInput.includes("tinh chat giua hai tiep tuyen cat nhau?") || FormatInput.includes("Tinh chat giua hai tiep tuyen cat nhau?"))
        ResponseText_val.innerHTML = "Nếu hai tiếp tuyến của đường tròn cắt nhau tại một điểm thì: - Điểm đó cách đều hai tiếp điểm. - Tia kẻ từ điểm đó đi qua tâm là tia phân giác của các góc tạo bởi hai tiếp tuyến. - Tia kẻ từ tâm đi qua điểm đó là tia phân giác của góc tạo bởi hai bán kính đi qua tiếp điểm.";

    else if (FormatInput.includes("Vị trí tương đối của hai đường tròn") || FormatInput.includes("vị trí tương đối của hai đường tròn") || FormatInput.includes("Vi tri tuong doi của hai duong tron") || FormatInput.includes("Vi tri tuong doi của hai duong tron") || FormatInput.includes("Vị trí tương đối của hai đường tròn?") || FormatInput.includes("vị trí tương đối của hai đường tròn?") || FormatInput.includes("Vi tri tuong doi của hai duong tron?") || FormatInput.includes("Vi tri tuong doi của hai duong tron?"))
        ResponseText_val.innerHTML = "Hai đường tròn(O) và (O’) cắt nhau thì R-r < OO’ < R+r. Hai đường tròn tiếp xúc ngoài thì OO’ = R+r. Nếu hai đường tròn (O) và (O’) tiếp xúc trong thì OO’=R-r. Nếu hai đường tròn cắt nhau thì hai giao điểm đối xứng với nhau qua đường nối tâm, tức là đường nối tâm là đường trung trực của dây cung chung. Nếu hai đường tròn tiếp xúc với nhau thì tiếp điểm nắm trên đường nối tâm.";

    else if (FormatInput.includes("Hệ hai phương trình bậc nhất hai ẩn là gì?") || FormatInput.includes("hệ phương trình bậc nhất 2 ẩn") || FormatInput.includes("hệ phương trình bậc nhất hai ẩn") || FormatInput.includes("hệ phương trình bậc nhất 2 ẩn?") || FormatInput.includes("hệphương trình bậc nhất hai ẩn?") || FormatInput.includes("hệ hai phương trình bậc nhất hai ẩn là gì?") || FormatInput.includes("He hai phuong trinh bac nhat hai an la gi?") || FormatInput.includes("He hai phuong trinh bac nhat hai an la gi?") || FormatInput.includes("Hệ hai phương trình bậc nhất hai ẩn là gì") || FormatInput.includes("hệ hai phương trình bậc nhất hai ẩn là gì") || FormatInput.includes("He hai phuong trinh bac nhat hai an la gi"))
        ResponseText_val.innerHTML = "Cho hai phương trình bậc nhất hai ẩn: ax + by = c và a’x + b’y = c’. Khi đó, ta có hệ hai phương trình bậc nhất hai ẩn: – Nếu hai phương trình của hệ có nghiệm chung (x0;y0) thì (x0;y0) gọi là một nghiệm của hệ (I). – Nếu hai phương trình không có nghiệm chung thì ta nói hệ (I) vô nghiệm.Tóm lại: Một hệ phương trình bậc nhất có hai ẩn có thể có: một nghiệm, vô số nghiệm hoặc vô nghiệm. – Giải hệ phương trình là tìm tất cả các nghiệm (tập hợp nghiệm) của nó.";

    else if (FormatInput.includes("Phương trình bậc nhất hai ẩn là gì?") || FormatInput.includes("phương trình bậc nhất 2 ẩn") || FormatInput.includes("phương trình bậc nhất hai ẩn") || FormatInput.includes("phương trình bậc nhất 2 ẩn?") || FormatInput.includes("phương trình bậc nhất hai ẩn?") || FormatInput.includes("phương trình bậc nhất hai ẩn là gì?") || FormatInput.includes("phuong trinh bac nhat hai an la gi?") || FormatInput.includes("Phuong trinh bac nhat hai an la gi?") || FormatInput.includes("Phương trình bậc nhất hai ẩn là gì") || FormatInput.includes("phương trình bậc nhất hai ẩn là gì") || FormatInput.includes("phuong trinh bac nhat hai an la gi"))
        ResponseText_val.innerHTML = "Phương trình bậc nhất hai ẩn x và y là hệ thức có dạng: ax + by = c (1) Trong đó a, b, c là các số đã biết (a ≠ 0 hoặc b ≠ 0)";

    else if (FormatInput.includes("đường nối tâm") || FormatInput.includes("đường nối tâm?"))
        ResponseText_val.innerHTML = "Nếu hai đường tròn cắt nhau thì đường nối tâm là đường trung trực của dây chung. Nếu hai đường tròn tiếp xúc nhau thì tiếp điểm nằm trên đường nối tâm.";

    else if (FormatInput.includes("cách để vẽ đường tròn") || FormatInput.includes("làm sao để vẽ đường tròn") || FormatInput.includes("vẽ đường tròn"))
        ResponseText_val.innerHTML = "Bạn chỉ cần lắp bút vào đầu compa vặn thật chặt cho 2 chân đều nhau. Bạn đặt tâm đường tròn vào vị trí sau đó lựa chọn đường kính phù hợp rồi quay compa để vẽ đường là xong";

    else if (FormatInput.includes("có nên có người yêu không") || FormatInput.includes("có người yêu ở tuổi học trò") || FormatInput.includes("người yêu"))
        ResponseText_val.innerHTML = "Yêu thì cứ yêu bình thường, sau này sẽ chia tay bình thường, tuổi trẻ ai mà không có vài ba mối tình";
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
        ResponseText_val.innerHTML = "Fox không hiểu bạn đang nói gì! Hiện tại Fox sẽ trả lời hiệu quả những kiến thức về khái niệm trong chương trình lớp 9! Fox sẽ được phát triển hơn để làm được nhiều thứ hơn!";
}

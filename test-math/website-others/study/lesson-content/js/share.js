const viewBtn = document.querySelector(".view-modal"),
    popup = document.querySelector(".popup-share"),
    close = popup.querySelector(".close"),
    field = popup.querySelector(".field"),
    input = field.querySelector("input"),
    copy = field.querySelector("button");
viewBtn.onclick = () => {
    popup.classList.toggle("show");
}
close.onclick = () => {
    viewBtn.click();
}
copy.onclick = () => {
    input.select(); //select input value
    if (document.execCommand("copy")) { //if the selected text copy
        field.classList.add("active-plus");
        copy.innerText = "Đã Sao Chép";
        setTimeout(() => {
            window.getSelection().removeAllRanges(); //remove selection from document
            field.classList.remove("active-plus");
            copy.innerText = "Sao Chép";
        }, 3000);
    }
}
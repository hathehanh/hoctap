const $$$ = document.querySelector.bind(document);
const $$$$ = document.querySelectorAll.bind(document);

const tabs = $$$$(".tab-item");
const panes = $$$$(".tab-pane");

const tabActive = $$$(".tab-item.active-new");
const line = $$$(".tabs .line");
requestIdleCallback(function() {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function() {
        $$$(".tab-item.active-new").classList.remove("active-new");
        $$$(".tab-pane.active-new").classList.remove("active-new");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active-new");
        pane.classList.add("active-new");
    };
});
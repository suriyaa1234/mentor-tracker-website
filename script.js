function displayData() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("interactions")) || [];

    data.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item.student + " - " + item.message;

        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = function () {
            data.splice(index, 1);
            localStorage.setItem("interactions", JSON.stringify(data));
            displayData();
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}
function clearAll() {
    localStorage.removeItem("interactions");
    displayData();
}
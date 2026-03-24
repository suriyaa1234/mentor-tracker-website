function saveData() {
    let student = document.getElementById("student").value;
    let message = document.getElementById("message").value;

    let list = document.getElementById("list");

    let item = document.createElement("li");
    item.textContent = student + " - " + message;

    list.appendChild(item);
}
window.onload = function () {
    displayData();
};

function saveData() {
    let student = document.getElementById("student").value;
    let message = document.getElementById("message").value;

    if (student === "" || message === "") {
        alert("Please fill all fields");
        return;
    }

    let data = JSON.parse(localStorage.getItem("interactions")) || [];

    data.push({ student, message });

    localStorage.setItem("interactions", JSON.stringify(data));

    document.getElementById("student").value = "";
    document.getElementById("message").value = "";

    displayData();
}

function displayData() {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("interactions")) || [];

    data.forEach((item, index) => {
        let row = `
            <tr>
                <td>${item.student}</td>
                <td>${item.message}</td>
                <td>
                    <button onclick="deleteData(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function deleteData(index) {
    let data = JSON.parse(localStorage.getItem("interactions")) || [];
    data.splice(index, 1);
    localStorage.setItem("interactions", JSON.stringify(data));
    displayData();
}

function clearAll() {
    localStorage.removeItem("interactions");
    displayData();
}
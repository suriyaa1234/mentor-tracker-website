function saveData() {
    let student = document.getElementById("student").value;
    let message = document.getElementById("message").value;

    if (student === "" || message === "") {
        alert("Please fill all fields");
        return;
    }

    let data = JSON.parse(localStorage.getItem("interactions")) || [];

    let currentDate = new Date().toLocaleString();

    data.push({
        student: student,
        message: message,
        date: currentDate
    });

    localStorage.setItem("interactions", JSON.stringify(data));

    document.getElementById("student").value = "";
    document.getElementById("message").value = "";

    displayData();
}
let row = `
<tr>
    <td>${item.student}</td>
    <td>${item.message}</td>
    <td>${item.date}</td>
    <td>
        <button onclick="deleteData(${index})">Delete</button>
    </td>
</tr>
`;
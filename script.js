// 🔥 Your Firebase config (paste from Firebase)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// SAVE DATA
function saveData() {
    let student = document.getElementById("student").value;
    let message = document.getElementById("message").value;

    if (student === "" || message === "") {
        alert("Fill all fields");
        return;
    }

    db.collection("interactions").add({
        student: student,
        message: message,
        date: new Date().toLocaleString()
    });

    document.getElementById("student").value = "";
    document.getElementById("message").value = "";
}

// DISPLAY DATA (REAL-TIME 🔥)
db.collection("interactions").onSnapshot(snapshot => {
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    snapshot.forEach(doc => {
        let data = doc.data();

        let row = `
        <tr>
            <td>${data.student}</td>
            <td>${data.message}</td>
            <td>${data.date}</td>
            <td>
                <button onclick="deleteData('${doc.id}')">Delete</button>
            </td>
        </tr>
        `;
        table.innerHTML += row;
    });
});

// DELETE DATA
function deleteData(id) {
    db.collection("interactions").doc(id).delete();
}
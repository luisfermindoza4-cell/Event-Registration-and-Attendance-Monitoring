document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("loginForm").addEventListener("submit", function(event) {

        event.preventDefault();

        let studentId = document.getElementById("studentId").value.trim();
        let studentName = document.getElementById("studentName").value.trim();

        if (studentId === "") {
            alert("Please enter your Student ID!");
            return;
        }

        if (studentName === "") {
            alert("Please enter your name!");
            return;
        }

        let today = new Date();
        let date = today.toLocaleDateString();
        let timeIn = today.toLocaleTimeString();

        document.getElementById("eventAttendance").innerHTML = `
            <h2>YOU ARE TIME IN!</h2>
            <h3>HEY YOU ENJO!!!, ${studentName}!</h3>
            <p>Student ID: ${studentId}</p>
            <p>Student Name: ${studentName}</p>
            <p>Date: ${date}</p>
            <p>Time In: ${timeIn}</p>
            <p id="timeOutDisplay"></p>
            <button id="timeOutBtn">Time Out</button>
        `;

        // Hide the Time In form so the student can't time in twice
        document.getElementById("loginForm").style.display = "none";

        // Time Out button logic
        document.getElementById("timeOutBtn").addEventListener("click", function() {

            let outNow = new Date();
            let timeOut = outNow.toLocaleTimeString();

            // Calculate how long the student stayed
            let diffMs = outNow - today;
            let minutes = Math.floor(diffMs / 60000);
            let seconds = Math.floor((diffMs % 60000) / 1000);

            document.getElementById("timeOutDisplay").innerHTML =
                `Time Out: ${timeOut}<br>Duration: ${minutes} min ${seconds} sec`;

            // Prevent clicking Time Out again
            this.disabled = true;
            this.textContent = "Timed Out";
        });

    });

});
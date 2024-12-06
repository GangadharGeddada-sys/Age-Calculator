// script.js
document.getElementById("age-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const dob = document.getElementById("dob").value;
    if (!dob) {
        alert("Please select a valid date!");
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let ageYears = today.getFullYear() - dobDate.getFullYear();
    let ageMonths = today.getMonth() - dobDate.getMonth();
    let ageDays = today.getDate() - dobDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    const result = document.getElementById("result");
    result.innerHTML = `
        <p>Your Age is:</p>
        <p><strong>${ageYears}</strong> Years, <strong>${ageMonths}</strong> Months, and <strong>${ageDays}</strong> Days</p>
    `;
});

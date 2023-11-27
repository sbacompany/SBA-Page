function submitForm() {
    // Get form data
    var name = document.forms["reservationForm"]["name"].value;
    var lastName = document.forms["reservationForm"]["lastName"].value;
    var accountNumber = document.forms["reservationForm"]["accountNumber"].value;

    // Store values in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("accountNumber", accountNumber);

    // Redirect to congratulations page
    window.location.href = "congratulationsPage.html";
}

document.getElementById("submitBtn").addEventListener("click", submitForm);


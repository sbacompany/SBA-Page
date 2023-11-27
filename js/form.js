function submitForm() {
    document.getElementById("loadingOverlay").style.display = "block";
    // Get form data
    var name = document.forms["reservationForm"]["name"].value;
    var lastName = document.forms["reservationForm"]["lastName"].value;
    var accountNumber = document.forms["reservationForm"]["accountNumber"].value;

    // Store values in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("accountNumber", accountNumber);

    // Redirect to congratulations page
        setTimeout(function () {
        document.getElementById("loadingOverlay").style.display = "none";
        // Redirect to congratulations page
        window.location.href = "congratulationsPage.html";
    }, 5000);
}

document.getElementById("submitBtn").addEventListener("click", submitForm);


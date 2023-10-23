document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const resetButton = document.getElementById("reset-button");
    const submitButton = document.getElementById("submit-button");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // You can handle form submission here, e.g., send data to a server.
        alert("Survey submitted!");
    });

    resetButton.addEventListener("click", function () {
        form.reset();
    });
});

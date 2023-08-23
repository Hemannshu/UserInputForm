document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const phoneNumber = form.querySelector("input[type='number']").value;
        const gender = form.querySelector("input[name='gender']:checked").value;

        const userDetails = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            gender: gender
        };

        // Convert the object to a JSON string
        const userDetailsJSON = JSON.stringify(userDetails);

        // Save the JSON string in local storage
        localStorage.setItem("userDetails", userDetailsJSON);

        alert("Details Submitted");
		location.reload();
    });
});

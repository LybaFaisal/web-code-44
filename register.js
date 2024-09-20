document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();
    // Form validation can be added here
    // For now, let's just log the form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });
    console.log(formObject);
    // You can send this form data to your server for further processing
});

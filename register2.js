// Smooth scroll to form on register button click
document.querySelector('.register-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#registration-form').scrollIntoView({ behavior: 'smooth' });
});

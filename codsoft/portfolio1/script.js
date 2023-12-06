document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // You can add logic here to handle the form submission, like sending an email or saving to a database.
    // For now, let's just log the form data to the console.
    const formData = new FormData(event.target);
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
});

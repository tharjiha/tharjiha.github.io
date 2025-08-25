function sendEmail(event) {
    event.preventDefault();
    const to = "tharjiha@gmail.com";
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const subject = `Message from ${email}`;
    const body = message;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
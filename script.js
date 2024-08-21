document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            responseMessage.textContent = `Thank you, ${name}. We have received your message and will get back to you soon.`;
            
            form.reset();
        });
    }
});

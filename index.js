function openWhatsApp() {
    window.open('https://wa.me/5561992291746', '_blank');
}

function showServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const messageElement = document.getElementById('message');
    messageElement.textContent = `Obrigado, ${name}! Seus dados foram enviados com sucesso.`;
    this.reset();
});

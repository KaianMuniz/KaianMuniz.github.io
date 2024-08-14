document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');


    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

     
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;


       
        formMessage.style.display = 'block';
        formMessage.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;


       
        form.reset();
    });
});

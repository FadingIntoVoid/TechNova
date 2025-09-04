const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const id = this.getAttribute("href");
        const section = document.querySelector(id);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const mensagem = form.querySelector('textarea').value.trim();

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    console.log("Mensagem enviada:");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);

    alert("Mensagem enviada com sucesso!");
    form.reset();
});


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

const menuBtn = document.getElementById("menu-btn");
const navUl = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    navUl.classList.toggle("show");
});

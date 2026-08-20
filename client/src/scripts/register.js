const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');
const checkbox = document.querySelector('input[type="checkbox"]');
const labelPassword = document.querySelector('#placa');

//validação  de usuario e senha nos inputs
button.addEventListener('click', (event) => {
    event.preventDefault();//faz com que o botão não envie os dados e nem atualiza a tela

    // pega o valor digitado no input
    const emailValue = email.value;
    const passwordValue = password.value;

    // validar se NÃO contem dados no input
    if (!emailValue || !passwordValue) {
        alert('Preencha todos os campos.');
        return;
    }

    // pegar e salvar usuario e senha temporariamente no navegador em uma sessão temporaria.
    sessionStorage.setItem('email', emailValue);
    sessionStorage.setItem('password', passwordValue);

    alert('Usuario Cadastarado com sucesso');

    // trocar a pagina para a pagina de login
    window.location.href = './login.html';
});
checkbox.addEventListener('change', () => {
    const AttributeValue = password.getAttribute('type')
    if (AttributeValue === 'password') {
        password.setAttribute('type', 'text');
        labelPassword.textContent = 'Ocultar senha'
        return
    }


    password.setAttribute('type', 'password');
    labelPassword.textContent = 'Mostrar senha'

});
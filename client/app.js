const button = document.querySelector('button');
const input = document.querySelector('input');
const resource = 'users';

//// async funçao assincorna await espera o fetch retornar . await so funciona se for uma promise .!

async function getUsers() {
    const id = Number(input.value);

    const response = await fetch(`http://localhost:3000/${resource}`);

    const data = await response.json(); //filtro

    const user = data.find(user => user.id === id);

    if(!user){
        console.log(`Usuário de id ${id} não encontrado.`);
        return;
        
    }

    console.log(user);

}

button.addEventListener('click', getUsers);
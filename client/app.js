const resource = 'users';

//// async funçao assincorna await espera o fetch retornar . await so funciona se for uma promise .!

async function getUsers() {

    const response = await fetch(`http://localhost:3000/${resource}`);

    const data = await response.json(); //filtro

    console.log(data);

}

getUsers();
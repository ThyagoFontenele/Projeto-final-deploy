import axios from 'axios'

const create = axios.create({
    baseURL: 'https://projeto-final-injunior.herokuapp.com/'
})

function createAdress(adress){
    create.post('/adress/create', adress)
    .then((res) => {console.log(res)
        let idAdress = res.data.id;
    })
    .catch((err) => console.error(err))
}
function createUser(user, adress) {
    createAdress(adress);
    create.post('/auth/signup/', user)
    .then((res) => {
        console.log(res)
        alert('Usuário criado com sucesso')
    })
    .catch((err) => {console.error(err)
        alert("Houve um erro !");
    })
   
}

function handleLogin(user){
    create.post('/auth/login/', user)
    .then((res) => console.log(res.data))
    .catch((err) => {console.error(err)
        alert("Houve um erro :/");  
    })
}

export { createUser, handleLogin }
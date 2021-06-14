import axios from 'axios'
const create = axios.create({
    baseURL: 'https://projeto-final-injunior.herokuapp.com/'
})

function createUser(user, adress) {
    create.post('/adress/create', adress)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    
    create.post('/auth/signup', user)
    .then((res) => {
        console.log(res)
        alert('Usuário criado com sucesso')
    })
    .catch((err) => {console.error(err)
        alert("Houve um erro :/");
    })
   
}

function handleLogin(user){
    create.post('/auth/login', user)
    .then((res) => console.log(res.data))
    .catch((err) => {console.error(err)
        alert("Houve um erro :/");  
    })
}

export { createUser, handleLogin }
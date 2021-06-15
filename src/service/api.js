import axios from 'axios'

const create = axios.create({
    baseURL: 'https://projeto-final-injunior.herokuapp.com/'
})

function createUser(user) {
    create.post('/auth/signup/', user)
    .then((res) => {
        console.log(res)
        alert('Usuário criado com sucesso')
    })
    .catch((err) => {console.error(err)
        alert("Houve um erro !");
    })
   
}
function Confirmar(key){
    create.post('/auth/confirm/', key)
    .then((res) => {console.log(res.data)
        alert('Usuário confirmado')
        window.location.href = '/login'
    })
    .catch((err) => {console.error(err)
        alert('Erro ao confirmar')
        
    })
    
}
function handleLogin(user){
    create.post('/auth/login/', user)
    .then((res) => console.log(res.data))
    .catch((err) => {console.error(err)
        alert("Houve um erro :/");  
    })
}

export { createUser, Confirmar ,handleLogin }
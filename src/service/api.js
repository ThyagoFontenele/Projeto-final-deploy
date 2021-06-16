import axios from 'axios'

const create = axios.create({
    baseURL: 'https://projeto-final-injunior.herokuapp.com/'
})
function handleLogin(user){
    create.post('/auth/login/', user)
    .then((res) => {console.log(res.data)
        
    })
    .catch((err) => {console.error(err)
        alert("Dados incorretos :/");  
    })
}
function createUser(user) {
    create.post('/auth/signup/', user)
    .then((res) => {
        console.log(res)
        alert('Usuário criado com sucesso')
        window.location.href = '/login'
    })
    .catch((err) => {console.error(err)
        alert("Houve um erro !");
    })
   
}
function Confirmar(key, id){
    create.post('/auth/confirm/', key)
    .then((res) => {console.log(res.data)
        alert('Usuário confirmado')
        if(id != 0){
            window.location.href = '/deliveryman/add-veiculo'
        }else{
            window.location.href = '/login'
        } 
    })
    .catch((err) => {console.error(err)
        alert('Erro ao confirmar') 
    })  
}
function AdicionarVeiculo(info){
    create.post('/auth/confirm_deliveryman/', info)
    .then((res) => {
        console.log(res)
        alert('Veículo Adicionado!')
        window.location.href = '/login'
    })
    .catch((err) => {console.error(err)
        alert("Houve um erro !");
    })
}


export { createUser, Confirmar ,handleLogin, AdicionarVeiculo }
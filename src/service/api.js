import axios from 'axios'

const create = axios.create({
    baseURL: 'https://projeto-final-injunior.herokuapp.com/'
})
function handleLogin(user){
    create.post('/auth/login/', user)
    .then((res) => {console.log(res.data)
        if(res.data.role == 1){
            window.location.href = '/admin/users'
        }
        else if(res.data.role == 2){
            window.location.href = '/user-page'
        }
        else if(res.data.role == 3){
            window.location.href = '/deliveryman/page'
        } 
        else if(res.data.role == 4){
            window.location.href = '/deliveryman/page'
        }
       
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
        alert('Usuário já confirmado') 
    })  
}
function AdicionarVeiculo(){
    alert("Veiculo adicionado!");
    window.location.href = '/login'
    //Não está completo, feito na pressa
}


export { createUser, Confirmar ,handleLogin, AdicionarVeiculo }
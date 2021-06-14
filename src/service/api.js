import axios from 'axios'

const create = axios.create({
    baseURL: ''
})

function createUser(user) {
    create.post('/register', user)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => console.error(err))
}

let user = {
    "user":{

    }
}

function handleLogin(user){
    create.post('/login', user)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err))
}

handleLogin()

export { createUser, handleLogin }
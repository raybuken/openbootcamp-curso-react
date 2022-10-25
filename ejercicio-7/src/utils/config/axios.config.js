import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.chucknorris.io/jokes',
    timeout: 6000,
    responseType: 'json'
})
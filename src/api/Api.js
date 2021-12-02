const axios = require('axios').default;

export const getChampions = () => {
    return axios.get(`http://localhost:8085/getChamp`)
}

export const weakAgainst = (championName) => {
    return axios.get('http://localhost:8085/')
}
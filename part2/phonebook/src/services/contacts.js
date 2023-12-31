import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const del = id => {
    if (window.confirm('Do you want to delete this user?')) {
        return axios.delete(`${baseUrl}/${id}`)
    }
}

export default {getAll, create, update, del}
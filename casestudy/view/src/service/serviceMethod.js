import axios from "axios";

export const getAllService = async () => {
    try {
        let rs = await axios.get("http://localhost:8080/service")
        return rs.data
    }catch (e){
        return undefined
    }
}
export const deleteService = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/service/${id}`)
        return true
    } catch (e){
        return false
    }
}

export const saveService = async (service) => {
    try {
        await axios.post("http://localhost:8080/service", service)
    } catch (e) {
        return false
    }
}
export const findServiceById = async (id)=>{
    try {
        let rs = await axios.get(`http://localhost:8080/service/${id}`)
        return rs.data
    } catch (e) {
        return undefined
    }
}

export const updateService = async (service) => {
    try {
        await axios.put(`http://localhost:8080/service/${service.id}`, service)
        return true
    } catch (e){
        return false
    }
}

import axios from "axios";

export const getAllCustomer = async () => {
    try {
        let rs = await axios.get("http://localhost:8080/customer")
        return rs.data
    } catch (e){
        return undefined
    }
}

export const deleteCustomer = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/customer/${id}`)
        return true
    } catch (e){
        return false
    }
}


export const saveCustomer = async (customer) => {
    try {
        await axios.post("http://localhost:8080/customer", customer);
        return true;
    } catch (e){
        return false;
    }
}

export const findCustomerById = async (id) => {
    try {
        let rs = await axios.get(`http://localhost:8080/customer/${id}`)
        return rs.data
    }catch (e) {
        return false

    }
}

export const updateCustomer = async (customer) => {
    try {
        await axios.put(`http://localhost:8080/customer/${customer.id}`, customer)
        return true
    } catch (e) {
        return false
    }

}
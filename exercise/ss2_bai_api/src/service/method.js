import axios from "axios";

export const getAllPost= async () => {
    try {
        let rs = await axios.get("http://localhost:8080/post")
        return rs.data
    }catch (e){
        return undefined
    }
}

export const deletePost = async (id) =>{
    try{
        await axios.delete(`http://localhost:8080/post/${id}`);
        return true;
    } catch (e) {
        return false;
    }
}

export const savePost = async (post) => {
    try {
        await axios.post("http://localhost:8080/post", post);
        return true;
    } catch (e){
        return false;
    }
}

export const findById = async (id) =>{
    try {
        const rs = await axios.get(`http://localhost:8080/post/${id}`);
        return rs.data;
    }catch (e){
        return false;
    }
}
export const updateById = async (post) => {
    try {
        await  axios.put(`http://localhost:8080/post/${post.id}`,post);
        return true;
    }catch (e){
        return false;
    }
}
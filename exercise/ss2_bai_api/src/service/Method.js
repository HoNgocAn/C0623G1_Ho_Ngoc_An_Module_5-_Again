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

export const findByIdBlog = async (id) =>{
    try {
        const blog = await axios.get("http://localhost:8080/post/"+id);
        return blog.data;
    }catch (e){
        return false;
    }
}
export const updateByIdBlog = async (blog) => {
    try {
        await  axios.put(`http://localhost:8080/post/${blog.id}`,blog);
        return true;
    }catch (e){
        return false;
    }
}
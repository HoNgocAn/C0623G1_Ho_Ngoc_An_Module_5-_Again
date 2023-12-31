import React from "react";
import {useState} from "react";

function Blog () {

    const [error, setError] = useState("")
    const [post, setPost] = useState([
        {
            id : 1,
            title: "5 Best Crypto Performers During The 2022 Market Flop",
            category: "Crypto News",
            time: "21 hours ago"
        },
        {
            id : 2,
            title: "Top crypto funding stories of 2022",
            category: "New Year Special",
            time: "a day ago"
        },
        {
            id : 3,
            title: "2023 will see the death of play-to-earn gaming",
            category: "Opinion",
            time: "a day ago"
        }
    ])

    const [form, setForm] = useState({});

    const handleChange =(event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = () => {
        const isValid = form.id && form.title && form.category && form.time;
       if(isValid) {
           setPost(prevState => [...prevState, form]);
           setError("")
       } else {
          setError("Please fill out all the fields!!!")
       }
    }

   const handleDelete = (item) =>{
       const newPost = post.filter(blog => blog.id !== item.id)
       if (newPost){
           setPost(newPost)
       }
    }

    return (
        <div className="container">
            <h1>List Post</h1>
            <table className="table">
                <thead className="table-dark">
                <tr>
                    <td scope="col">ID</td>
                    <td scope="col">TITLE</td>
                    <td scope="col">CATEGORY</td>
                    <td scope="col">TIME</td>
                    <td scope="col">ACTION</td>
                </tr>
                </thead>
                <tbody>
                {post.map(item => (
                <tr key={item.id}>
                    <td scope="col">{item.id}</td>
                    <td className="title" scope="col">{item.title}</td>
                    <td scope="col">{item.category}</td>
                    <td scope="col">{item.time}</td>
                    <td>
                        <button type="button" className="btn btn-secondary btn-sm" >Edit</button>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(item)}>Delete</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>

            <h1>Add New Blog</h1>
            <p className="error"> {error}</p>
            <form className="form-add">
                <div className="custom-input">
                    <label>ID </label><br/>
                    <input
                        name="id"
                        value={form.id || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="custom-input">
                    <label>TITLE </label><br/>
                    <input
                        name="title"
                        value={form.title || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="custom-input">
                    <label>Category </label><br/>
                    <input
                        name="category"
                        value={form.category || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="custom-input">
                    <label>Time </label><br/>
                    <input
                        name="time"
                        value={form.time || ""}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                    Add
                </button>
            </form>

        </div>
    )
}

export default Blog;
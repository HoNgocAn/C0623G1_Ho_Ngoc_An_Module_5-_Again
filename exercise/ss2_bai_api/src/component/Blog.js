import React from "react";
import {useState, useEffect} from "react";
import * as method from "../service/method"
import { toast } from "react-toastify";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function Blog () {

    const navigate = useNavigate()

    const [post, setPost] = useState([]);

    const [postDelete, setPostDelete] = useState([])

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {
        try {
            let data = await method.getAllPost();
            setPost(data);
        } catch (e) {
            navigate("/error")
        }
    }

    const handlerPost = (post) => {
        setPostDelete(post);
    };

    const deletePost = async () => {
        try {
            const isSuccess = await method.deletePost(postDelete.id)
            if (isSuccess){
                toast.success("Đã xóa thành công")
                getAll();
            }
        } catch (e) {
            navigate("/error")
        }
    }


    if (!post) {
        return null;
    }


    return (
        <div className="container">
            <h1>List Post</h1>

            <div className="text-end fst-italic">
                <Link
                    class="nav-link active"
                    className="btn btn-success mb-3"
                    aria-current="page"
                    to="/create"
                >
                    Add Post
                </Link>
            </div>
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
                            <Link to={`/edit/${item.id}`}>
                                <button className="btn btn-sm btn-primary rounded-0">
                                    Edit
                                </button>
                            </Link>
                            <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="btn btn-sm btn-danger rounded-0"
                                onClick={() => handlerPost(item)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content text-center">
                        <div className="modal-header justify-content-center">
                            <div>
                                <h1
                                    className="modal-title text-danger fs-4"
                                    id="exampleModalLabel"
                                >
                                    Xóa thông tin
                                </h1>
                                <h5 className="modal-title text-danger fw-bold">
                                </h5>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h5>Bạn có chắc chắn xóa  không?</h5>
                            Hành dộng này không thể hoàn tác!
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-sm btn-secondary rounded-0"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-danger rounded-0"
                                data-bs-dismiss="modal"
                                onClick={deletePost}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Blog;
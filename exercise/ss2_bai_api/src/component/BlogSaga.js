import React from "react";
import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";
import {GET_ALL_POST} from "../reduxs/action";


function BlogSaga () {


    const posts = useSelector(store => store.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: GET_ALL_POST,
            payload: posts
        });
    }, []);


    return (
        <div className="container">
            <h1>List Post</h1>

            <div className="text-end fst-italic">
                <Link
                    class="nav-link active"
                    className="btn btn-success mb-3"
                    aria-current="page"
                    to="/create-saga"
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
                {posts.map(item => (
                    <tr key={item.id}>
                        <td scope="col">{item.id}</td>
                        <td className="title" scope="col">{item.title}</td>
                        <td scope="col">{item.category}</td>
                        <td scope="col">{item.time}</td>
                        <td>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )
}

export default BlogSaga;
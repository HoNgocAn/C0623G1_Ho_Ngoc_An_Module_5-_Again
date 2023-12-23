import React from "react";

import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import * as Method from "../../src/service/Method"


function CreateBlog() {

    const navigate = useNavigate();

    const initValue = {
        title: "",
        category: "",
        time: ""
    }
    const validateForm = {
        title : yup.string().required("Không được để trống title *"),
        category : yup.string().required("Không được để trống category *"),
        time : yup.string().required("Không được để trống time *"),

    };
    const createPost = (post) => {
        let isSuccess = Method.savePost(post);
        if (isSuccess) {
            toast.success("Thêm mới thành công!!!!!");
            navigate("/");
        }
        console.log("Thêm mới thất bại!!!");
    };



    return (
        <>
                <h3 className="mt-3">Thêm bài</h3>
                <Formik initialValues={initValue}
                        onSubmit={(values)=>{
                            createPost(values);
                        }}
                        validationSchema={yup.object(validateForm)}>
                    <Form>

                        <div className="mb-3">
                            <label >
                                Title
                            </label>
                            <Field type="text" name="title" className="form-control" id="title" />
                            <ErrorMessage
                                name="title"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>

                        <div className="mb-3">
                            <label >
                                Category
                            </label>
                            <Field type="text" name="category" className="form-control" id="category" />
                            <ErrorMessage
                                name="category"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>

                        <div className="mb-3">
                            <label >
                                Time
                            </label>
                            <Field type="text" name="time" className="form-control" id="time" />
                            <ErrorMessage
                                name="time"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Xác nhận
                        </button>
                    </Form>
                </Formik>
        </>
    )
}

export default CreateBlog;
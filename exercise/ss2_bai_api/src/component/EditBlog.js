import React , {useEffect,useState} from "react";

import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import * as Method from "../../src/service/Method"

import {useParams} from "react-router-dom";


function EditBlog() {

    const navigate = useNavigate();

    const param = useParams();

    const [post, setPost] = useState();

    const validateForm = {
        title : yup.string().required("Không được để trống title *"),
        category : yup.string().required("Không được để trống category *"),
        time : yup.string().required("Không được để trống time *"),

    };

    const findBlogById = async () => {
        const data = await Method.findById(param.id);
        setPost(data);
        console.log(data)
    };

    const handleSubmit = async (value) => {
        const isSuccess = await Method.updateById(value, post);
        if(isSuccess){
        toast.success("Chính sửa thành công!!!!!");
        }
        navigate("/");
    }

    useEffect(() => {
        findBlogById();
    }, []);

    if (!post) {
        return null;
    }

    return (
        <>
            <h3 className="mt-3">Sửa bài</h3>

            <Formik initialValues={{...post}}
                    onSubmit={(value) => {
                        handleSubmit(value)
                    }}
                    validationSchema={yup.object(validateForm)}>
                <Form>

                    <div className="mb-3">
                        <label >
                            Title
                        </label>
                        <Field type="text" name="title" className="form-control" id="title"  />
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
                        <Field type="text" name="category" className="form-control" id="category"  />
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
                        <Field type="text" name="time" className="form-control" id="time"  />
                        <ErrorMessage
                            name="time"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <button type="submit" className="btn btn-primary" >
                        Xác nhận
                    </button>
                </Form>
            </Formik>
        </>
    )
}

export default EditBlog;
import React from "react";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {useDispatch} from "react-redux";
import {savePost} from "../service/method";
import {useNavigate} from "react-router-dom";



function CreateBlogSaga() {
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const initValue = {
        title: "",
        category: "",
        time: "",
    }

    const create = async (values) => {
        const status = await dispatch(savePost(values));
        if (status) {
            toast.success("Create successfully!");
            navigate("/")
        } else {
            toast.error("Create failed!");
        }
    }


    return (
        <>
            <h3 className="mt-3">Thêm bài</h3>
            <Formik initialValues={initValue}
                    onSubmit={(values)=>{
                        create(values);
                    }}
            >
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

export default CreateBlogSaga;
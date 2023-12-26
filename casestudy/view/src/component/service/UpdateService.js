import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import Footer from "../Footer";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as method from "../../service/serviceMethod";
import {toast} from "react-toastify";



function UpdateService() {
    const navigate = useNavigate()
    const param = useParams()
    const [service, setService] = useState({})

    const findService = () => {
        const data = method.findServiceById(param.id)
        setService(data)
    }
    useEffect(() => {
        findService()
    }, [])

    const validateForm = {
        name : yup.string().required("Không được để trống trường này *"),
        area : yup.string().required("Không được để trống trường này *"),
        expense: yup.string().required("Không được để trống trường này *"),
        person : yup.string().required("Không được để trống trường này *"),
        rentalType : yup.string().required("Không được để trống trường này *"),
        roomStar : yup.string().required("Không được để trống trường này *"),
        tool : yup.string().required("Không được để trống trường này *"),
        pool : yup.string().required("Không được để trống trường này *"),
        floor : yup.string().required("Không được để trống trường này *"),
        otherServices : yup.string().required("Không được để trống trường này *"),
    }


    const handleSubmit = async (value) => {
        const isSuccess = method.updateService(value,service)
        if (isSuccess) {
            toast.success("Đã chỉnh sửa thành công")
            navigate("/service")
        }
    }
    if (!service){
        return null
    }

    return (
        <div className="container" style={{ marginTop: "6rem" }}>
            <Header/>
            <Navigation/>

            <h3 className="mt-3">Thêm khách hàng</h3>
            <Formik initialValues={{...service}}
                    onSubmit={(values)=>{
                        handleSubmit(values);
                    }}
                    validationSchema={yup.object(validateForm)}>
                <Form>

                    <div className="mb-3">
                        <label >
                            Name
                        </label>
                        <Field type="text" name="name" className="form-control" id="name" />
                        <ErrorMessage
                            name="name"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            Area
                        </label>
                        <Field type="text" name="area" className="form-control" id="area" />
                        <ErrorMessage
                            name="area"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            Expense
                        </label>
                        <Field type="text" name="expense" className="form-control" id="expense" />
                        <ErrorMessage
                            name="expense"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            Person
                        </label>
                        <Field type="text" name="person" className="form-control" id="person" />
                        <ErrorMessage
                            name="person"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            RentalType
                        </label>
                        <Field type="text" name="rentalType" className="form-control" id="rentalType" />
                        <ErrorMessage
                            name="rentalType"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            RoomStar
                        </label>
                        <Field type="text" name="roomStar" className="form-control" id="roomStar" />
                        <ErrorMessage
                            name="roomStar"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            Tool
                        </label>
                        <Field type="text" name="tool" className="form-control" id="tool" />
                        <ErrorMessage
                            name="tool"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            Pool
                        </label>
                        <Field type="text" name="pool" className="form-control" id="pool" />
                        <ErrorMessage
                            name="pool"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            Floor
                        </label>
                        <Field type="text" name="floor" className="form-control" id="floor" />
                        <ErrorMessage
                            name="floor"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            OtherServices
                        </label>
                        <Field type="text" name="otherServices" className="form-control" id="otherServices" />
                        <ErrorMessage
                            name="otherServices"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>


                    <button type="submit" className="btn btn-primary">
                        Xác nhận
                    </button>

                </Form>
            </Formik>
            <Footer/>
        </div>
    )
}

export default UpdateService
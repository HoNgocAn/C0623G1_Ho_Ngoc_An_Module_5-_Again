import React from "react";
import {useNavigate} from "react-router-dom";
import * as method from "../../service/customerMethod"
import {toast} from "react-toastify";
import * as yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";

function CreateCustomer() {

    const navigate = useNavigate();

    const initValue = {
        name: "",
        birthday: "",
        gender: "",
        idCard:"",
        numberPhone:"",
        email: "",
        typeGuest: "",
        address:""
    }

    const validateForm = {
        name : yup.string().required("Không được để trống trường này *"),
        gender : yup.string().required("Không được để trống trường này *"),
        birthday: yup.string().required("Không được để trống trường này *"),
        idCard : yup.string().required("Không được để trống trường này *"),
        numberPhone : yup.string().required("Không được để trống trường này *"),
        email : yup.string().required("Không được để trống trường này *"),
        typeGuest : yup.string().required("Không được để trống trường này *"),
        address : yup.string().required("Không được để trống trường này *"),
    }

    const createCustomer = (customer) => {
        const isSuccess = method.saveCustomer(customer);
        if (isSuccess) {
            toast.success("Thêm mới thành công")
            navigate("/customer")
        } else {
            toast.error("Thêm mới thất bại")
        }
    }

    return (
        <div className="container" style={{ marginTop: "6rem" }}>
            <h3 className="mt-3">Thêm khách hàng</h3>
            <Formik initialValues={initValue}
                    onSubmit={(values)=>{
                        createCustomer(values);
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
                            BirthDay
                        </label>
                        <Field type="text" name="birthday" className="form-control" id="birthday" />
                        <ErrorMessage
                            name="birthday"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            Gender
                        </label>
                        <Field type="text" name="gender" className="form-control" id="gender" />
                        <ErrorMessage
                            name="gender"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            IdCard
                        </label>
                        <Field type="text" name="idCard" className="form-control" id="idCard" />
                        <ErrorMessage
                            name="idCard"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            NumberPhone
                        </label>
                        <Field type="text" name="numberPhone" className="form-control" id="numberPhone" />
                        <ErrorMessage
                            name="numberPhone"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            Email
                        </label>
                        <Field type="text" name="email" className="form-control" id="email" />
                        <ErrorMessage
                            name="email"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            TypeGuest
                        </label>
                        <Field type="text" name="typeGuest" className="form-control" id="typeGuest" />
                        <ErrorMessage
                            name="typeGuest"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            Address
                        </label>
                        <Field type="text" name="address" className="form-control" id="address" />
                        <ErrorMessage
                            name="address"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Xác nhận
                    </button>

                </Form>
            </Formik>
        </div>
    )
}

export default CreateCustomer
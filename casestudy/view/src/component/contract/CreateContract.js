import React from "react";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import * as method from "../../service/contractMethod";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";

function CreateContract() {


    const navigate = useNavigate();

    const initValue = {
        number: "",
        startDay: "",
        endDay: "",
        deposit: "",
        totalMoney: ""
    }

    const validateForm = {
        number : yup.string().required("Không được để trống trường này *"),
        startDay : yup.string().required("Không được để trống trường này *"),
        endDay: yup.string().required("Không được để trống trường này *"),
        deposit : yup.string().required("Không được để trống trường này *"),
        totalMoney : yup.string().required("Không được để trống trường này *"),
    }

    const createContract= (contract) => {
        const isSuccess = method.saveContract(contract);
        if (isSuccess) {
            toast.success("Thêm mới thành công")
            navigate("/contract")
        } else {
            toast.error("Thêm mới thất bại")
        }
    }

    return (
        <div className="container" style={{ marginTop: "6rem" }}>
            <h3 className="mt-3">Thêm hợp đồng</h3>
            <Formik initialValues={initValue}
                    onSubmit={(values)=>{
                        createContract(values);
                    }}
                    validationSchema={yup.object(validateForm)}>
                <Form>

                    <div className="mb-3">
                        <label >
                            Number
                        </label>
                        <Field type="text" name="number" className="form-control" id="number" />
                        <ErrorMessage
                            name="number"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            StartDay
                        </label>
                        <Field type="text" name="startDay" className="form-control" id="startDay" />
                        <ErrorMessage
                            name="startDay"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            EndDay
                        </label>
                        <Field type="text" name="endDay" className="form-control" id="endDay" />
                        <ErrorMessage
                            name="endDay"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            Deposit
                        </label>
                        <Field type="text" name="deposit" className="form-control" id="deposit" />
                        <ErrorMessage
                            name="deposit"
                            component="span"
                            className="err-name"
                        ></ErrorMessage>
                    </div>

                    <div className="mb-3">
                        <label >
                            TotalMoney
                        </label>
                        <Field type="text" name="totalMoney" className="form-control" id="totalMoney" />
                        <ErrorMessage
                            name="totalMoney"
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

export default CreateContract
import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import {useEffect, useState} from "react";
import * as method from "../../service/customerMethod"
import { toast } from "react-toastify";
import {Link} from "react-router-dom";

function ListCustomer () {

    const [customer, setCustomer] = useState([])
    const [customerDelete, setCustomerDelete] = useState([])

    const getALlCustomer = async () => {
        let data = await method.getAllCustomer()
        setCustomer(data)
    }

    useEffect(() =>{
        getALlCustomer()
    }, [])

    const handleCustomer = (customer) => {
        setCustomerDelete(customer)
    }

    const deleteCustomer = async () => {
        const isSuccess = method.deleteCustomer(customerDelete.id)
        if (isSuccess){
            toast.success("Đã xóa thành công");
            getALlCustomer()
        } else {
            alert("Xóa thất bại")
        }
    }

    if (!customer) {
        return null
    }



    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <h2 className="h2-customer">Danh sách khách hàng</h2><br/>

            <div className="text-end fst-italic">
                <Link
                    class="nav-link active"
                    className="btn btn-success mb-3"
                    aria-current="page"
                    to="/customer-create"
                >
                    Thêm khách hàng
                </Link>
            </div>

            <table className="table-customer">
                <thead className="thead-customer">
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Ngày sinh</th>
                    <th scope="col">Giới tính</th>
                    <th scope="col">Số ĐDCN</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Loại khách</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col" colSpan="2">Thao tác</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {customer.map((item, index) =>
                <tr key={item.id}>
                    <th scope="row">{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.birthday}</td>
                    <td>{item.gender}</td>
                    <td>{item.idCard}</td>
                    <td>{item.numberPhone}</td>
                    <td>{item.email}</td>
                    <td>{item.typeGuest}</td>
                    <td>{item.address}</td>
                    <td>
                        <div className="btn-group">
                            <Link to={`/customer-update/${item.id}`}>
                                <button type="button" className="btn btn-warning" >Sửa</button>
                            </Link>
                            <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="btn btn-sm btn-danger rounded-0"
                                onClick={() => handleCustomer(item)}
                            >
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
                )}
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
                                onClick={deleteCustomer}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="center">
                <div className="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#" className="active">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default ListCustomer
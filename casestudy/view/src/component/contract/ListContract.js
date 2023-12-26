import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import {useState, useEffect} from "react";
import *as method from "../../service/contractMethod";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";

function ListContract () {

    const [contract, setContract] = useState([])
    const [contractDelete, setContractDelete] = useState()

    const getAllContract = async () => {
        let data = await method.getAllContract()
        setContract(data)
    }

    useEffect(() => {
        getAllContract()
    }, [])

    const handleContract = (contract) => {
        setContractDelete(contract)
    }

    const deleteContract = async () => {
        const isSuccess = await method.deleteContract(contractDelete.id)
        if (isSuccess) {
            toast.success("Đã xóa thành công")
            getAllContract()
        } else {
            alert("Đã xóa thất bại")
        }
    }

    if (!contract){
        return null;
    }


    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <h2 className="h2-contract">Danh sách hợp đồng</h2><br/>

            <div className="text-end fst-italic">
                <Link
                    class="nav-link active"
                    className="btn btn-success mb-3"
                    aria-current="page"
                    to="/contract-create"
                >
                    Thêm hợp đồng
                </Link>
            </div>

            <table className="table-contract" >
                <thead className="thead-contract">
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Số hợp đồng</th>
                    <th scope="col">Ngày bắt đầu</th>
                    <th scope="col">Ngày kết thúc</th>
                    <th scope="col">Số tiền cọc trước</th>
                    <th scope="col">Tổng tiền thanh toán</th>
                    <th scope="col">Thao tác</th>
                </tr>
                </thead>

                <tbody className="table-group-divider">
                {contract.map((item, index) =>
                <tr key={item.id}>
                    <th scope="row">{index+1}</th>
                    <td>{item.number}</td>
                    <td>{item.startDay}</td>
                    <td>{item.endDay}</td>
                    <td>{item.deposit}</td>
                    <td>{item.totalMoney}</td>
                    <td>
                        <div className="btn-group">
                            <button type="button" className="btn btn-warning" >Sửa</button>
                            <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="btn btn-sm btn-danger rounded-0"
                                onClick={() => handleContract(item)}
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
                                onClick={deleteContract}
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

export default ListContract


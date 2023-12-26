import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import {useState, useEffect} from "react";
import * as method from "../../service/serviceMethod";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";

function ListService() {

    const [service, setService] = useState([])
    const [serviceDelete, setServiceDelete] = useState([])

    const getALlService = async () => {
        let data = await method.getAllService();
        setService(data)
    }

    useEffect(() => {
        getALlService()
    },[])

    const handleService = (service) => {
        setServiceDelete(service)
    }

    const deleteService = () => {
        const isSuccess = method.deleteService(serviceDelete.id)
        if (isSuccess){
            toast.success("Đã xóa thành công");
            getALlService();
        } else {
            alert("Đã xóa thất bại")
        }
    }

    if (!service) {
        return null
    }


    return (
        <div className="container">
            <Header/>
            <Navigation/>

            <h2 className="h2-service" >Danh sách dịch vụ</h2><br/>

            <div className="text-end fst-italic">
                <Link
                    class="nav-link active"
                    className="btn btn-success mb-3"
                    aria-current="page"
                    to="/service-create"
                >
                    Thêm dịch vụ
                </Link>
            </div>

            <table className="table-service">
                <thead className="thead-service">
                <tr>
                    <th scope="col">Tên dịch vụ</th>
                    <th scope="col">Diện tích sử dụng</th>
                    <th scope="col">Chi phí thuê</th>
                    <th scope="col">Số lượng người tối đa</th>
                    <th scope="col">Kiểu thuê</th>
                    <th scope="col">Tiêu chuẩn phòng</th>
                    <th scope="col">Mô tả tiện nghi khác</th>
                    <th scope="col">Hồ bơi</th>
                    <th scope="col">Số tầng</th>
                    <th scope="col">Dịch vụ miễn phí đi kèm</th>
                    <th scope="col" colSpan="2">Thao tác</th>
                </tr>

                </thead>
                <tbody className="table-group-divider">
                {service.map((item, index) =>
                <tr key={item.id}>
                    <th scope="row">{item.name}</th>
                    <td>{item.area}</td>
                    <td>{item.expense}</td>
                    <td>{item.person}</td>
                    <td>{item.rentalType}</td>
                    <td>{item.roomStar}</td>
                    <td>{item.tool}</td>
                    <td>{item.pool}</td>
                    <td>{item.floor}</td>
                    <td>{item.otherServices}</td>
                    <td>
                        <div className="btn-group">
                            <Link to={`/service-update/${item.id}`}>
                                <button type="button" className="btn btn-warning" >Sửa</button>
                            </Link>
                            <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="btn btn-sm btn-danger rounded-0"
                                onClick={() => handleService(item)}
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
                                onClick={deleteService}
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
export default ListService;


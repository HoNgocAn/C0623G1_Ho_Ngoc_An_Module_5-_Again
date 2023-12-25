import React from "react";
import img_5 from "../../img/img_5.jpg";
import img_6 from "../../img/img_6.jpg";
import img_7 from "../../img/img_7.jpg";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";

function ListService() {
    return (
        <div className="container">
            <Header/>
            <Navigation/>

            <h2 className="h2-service" >Danh sách dịch vụ</h2><br/>

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
                <tr>
                    <th scope="row">Villa</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div className="btn-group">
                            <button type="button" className="btn btn-warning" >Sửa</button>
                            <button type="button" className="btn btn-danger">Xóa</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">House</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div className="btn-group">
                            <button type="button" className="btn btn-warning" onClick="">Sửa</button>
                            <button type="button" className="btn btn-danger">Xóa</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Room</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div className="btn-group">
                            <button type="button" className="btn btn-warning">Sửa</button>
                            <button type="button" className="btn btn-danger">Xóa</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

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

export default ListService
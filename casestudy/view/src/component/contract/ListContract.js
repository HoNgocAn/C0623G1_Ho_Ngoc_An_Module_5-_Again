import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";

function ListContract () {

    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <h2 className="h2-contract">Danh sách hợp đồng</h2><br/>

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
                <tr>
                    <th scope="row"></th>
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

export default ListContract


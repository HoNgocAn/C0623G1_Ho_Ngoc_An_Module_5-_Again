import React from "react";

function ListCustomer () {

    return (
        <div className="container">
            <h2 className="h2-customer">Danh sách khách hàng</h2><br/>

            <table className="table-customer">
                <thead >
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
                <tr>
                    <th scope="row"></th>
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
                </tbody>
            </table>
        </div>

    )
}

export default ListCustomer
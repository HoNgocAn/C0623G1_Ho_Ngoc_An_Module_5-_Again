import React from "react";

function CreateContract() {

    return (
        <div className="container center-createService">
            <h3 className="h3-black">Thêm  hợp đồng</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="inputNumber" className="form-label">Số hợp đồng</label>
                    <input type="text" className="form-control" id="inputNumber"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputStartDay" className="form-label">Ngày bắt đầu</label>
                    <input type="date" className="form-control" id="inputStartDay"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="inputEndDay" className="form-label">Ngày kết thúc</label>
                    <input type="date" className="form-control" id="inputEndDay"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="idDeposit" className="form-label">Số tiền cọc trước</label>
                    <input type="text" className="form-control" id="idDeposit"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="totalMoney" className="form-label">Tổng tiền thanh toán</label>
                    <input type="text" className="form-control" id="totalMoney"/>
                </div>

                <button type="submit" className="btn btn-primary">Thêm mới</button>
            </form>

        </div>
    )

}

export default CreateContract
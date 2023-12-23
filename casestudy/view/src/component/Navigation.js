import React from "react";
import Header from "./Header";

function Navigation() {
    return (
    <div className="container">
        <div className="px-3 py-2 bg-success text-white">
            <div className=" align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li>
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#home"></use>*/}
                            </svg>
                            TRANG CHỦ
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#speedometer2"></use>*/}
                            </svg>
                            LOẠI PHÒNG
                        </a>
                    </li>
                    <li>
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#table"></use>*/}
                            </svg>
                            DỊCH VỤ

                    </li>
                    <li>

                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#grid"></use>*/}
                            </svg>
                            KHÁCH HÀNG

                    </li>
                    <li>

                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#people-circle"></use>*/}
                            </svg>
                            HỢP ĐỒNG

                    </li>
                    <li>

                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#people-circle"></use>*/}
                            </svg>
                            GIẢI TRÍ

                    </li>
                    <li>

                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#people-circle"></use>*/}
                            </svg>
                            ĐIỂM ĐẾN

                    </li>
                    <li>

                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#people-circle"></use>*/}
                            </svg>
                            ƯU ĐÃI

                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Navigation
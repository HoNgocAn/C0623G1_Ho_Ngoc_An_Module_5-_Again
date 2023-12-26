import React from "react";
import Header from "./Header";
import {Link} from "react-router-dom";

function Navigation() {
    return (
    <div className="container px-0">
        <div className="px-3 py-2 bg-success text-white">
            <div className=" align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li>
                        <Link to="/" className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#home"></use>*/}
                            </svg>
                            TRANG CHỦ
                        </Link>
                    </li>
                    <li>
                        <Link to="/service" className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#speedometer2"></use>*/}
                            </svg>
                            LOẠI PHÒNG
                        </Link>
                    </li>
                    <li>
                        <Link to="/service" className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#table"></use>*/}
                            </svg>
                            DỊCH VỤ
                        </Link>
                    </li>
                    <li>
                        <Link to="/customer" className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#grid"></use>*/}
                            </svg>
                            KHÁCH HÀNG
                        </Link>
                    </li>
                    <li>
                        <Link to="/contract" className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#people-circle"></use>*/}
                            </svg>
                            HỢP ĐỒNG
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#people-circle"></use>*/}
                            </svg>
                            GIẢI TRÍ
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#people-circle"></use>*/}
                            </svg>
                            ĐIỂM ĐẾN
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link text-white">
                            <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                {/*<use xlink:href="#people-circle"></use>*/}
                            </svg>
                            ƯU ĐÃI
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Navigation
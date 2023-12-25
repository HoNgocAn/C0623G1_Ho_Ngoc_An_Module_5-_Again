import React from "react";
import homes from "../img/homes.png";
import home1 from "../img/home1.png";
import img_2 from "../img/img_2.png";
import img_3 from "../img/img_3.png";
import img_4 from "../img/img_4.png";
import img_5 from "../img/img_5.jpg";
import img_6 from "../img/img_6.jpg";
import img_7 from "../img/img_7.jpg";
import img_8 from "../img/img_8.jpg";
import img_9 from "../img/img_9.jpg";
import img_10 from "../img/img_10.jpg";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";



function Home() {

    return (
        <div className="container">
            <Header/>
            <Navigation/>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={homes} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={home1} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="row row-2" >
                <div className="col-12 col-lg-4">
                    <p className="p-row-2">KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI, FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ KHU NGHỈ DƯỠNG
                        ẨM THỰC TẠI VIỆT NAM.</p>
                </div>
                <div className="col-12 col-lg-4">
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/Z6_JZ8Ao6-c?si=dkgZpT8houRnOjop"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
                <div className="col-12 col-lg-4">
                    <p>Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà Nẵng là cửa ngõ đến với 3 di sản
                        văn hoá thế giới:
                        Hội An (20 phút), Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng hạng sang cùng với 70 căn biệt thự
                        từ hai đến bốn
                        phòng ngủ có hồ bơi riêng đều được trang trí trang nhã, theo phong cách thiết kế truyền thống
                        của Việt Nam và kiến
                        trúc thuộc địa của Pháp, biến Furama thành khu nghỉ dưỡng danh giá nhất tại Việt Nam – vinh dự
                        được đón tiếp nhiều
                        người nổi tiếng, giới hoàng gia, chính khách, ngôi sao điện ảnh và các nhà lãnh đạo kinh doanh
                        quốc tế.

                    </p>
                </div>
            </div>
            <div className="row row-3" >
                <h3 className="h3-home">Ưu Đãi & Khuyến Mãi</h3>
                <div className="col-12 col-lg-4">
                    <img src={img_2} className="row-3-img"/>
                        <p>Là khu nghỉ dưỡng danh giá nhất Việt Nam, Furama Resort Đà Nẵng tự hào phục vụ hàng nghìn du
                            khách mỗi năm và đặc
                            biệt là điểm đến ưa thích của nhiều hoàng gia, lãnh đạo doanh nghiệp quốc tế và khách nổi
                            tiếng. Lên kế hoạch cho
                            kỳ nghỉ của bạn với chúng tôi!</p>
                        <button type="button" className="btn btn-outline-success btn-lg ">Ưu Đãi Phòng Resort</button>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={img_3} className="row-3-img"/>
                        <p>Trải nghiệm ẩm thực tại Furama có sự pha trộn độc đáo các món ăn truyền thống Việt Nam với
                            hương vị ẩm thực châu Á,
                            Ý và châu Âu cùng các món bò nhập khẩu thượng hạng tại đa dạng các nhà hàng, quầy bar đẳng
                            cấp được bao quanh bởi
                            một khu vườn nhiệt đới hay hướng mình ra biển.</p>
                        <button type="button" className="btn btn-outline-success btn-lg">Ưu đãi ẩm thực</button>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={img_4} className="row-3-img"/>
                        <p>Ẩn mình trong một góc nhỏ của khu nghỉ dưỡng, V-Senses Wellness & Spa đưa du khách đến một
                            thiên đường thanh bình
                            của sự thư giãn và trẻ hóa hoàn toàn. Hãy tận hưởng thời gian thư thái với những liệu trình
                            trị liệu vô cùng đặc
                            biệt tại V-senses Wellness & Spa.</p>
                        <button type="button" className="btn btn-outline-success btn-lg">Ưu Đãi V-Senses Wellness &
                            Spa
                        </button>
                </div>
            </div>
            <div className="row row-4">
                <div className="col-12 col-lg-3">

                </div>
                <div className="row-4-room col-12 col-lg-6">
                    <h3>CÁC LOẠI PHÒNG</h3>
                    <p>
                        Khu nghỉ dưỡng có 196 phòng được thiết kế theo phong cách truyền thống Việt Nam kết hợp với
                        phong cách Pháp,
                        2 tòa nhà 4 tầng có hướng nhìn ra biển, nhìn ra hồ bơi trong xanh và những khu vườn nhiệt đới
                        xanh tươi mát.
                        Ngoài ra, khu nghỉ dưỡng Furama còn cung cấp các liệu pháp spa, phòng xông hơi ướt, phòng
                        xông hơi khô, dịch
                        vụ mát-xa cạnh hồ bơi, các dịch vụ thể thao dưới nước và các lớp tập Thái Cực Quyền
                        trên bãi biển.
                    </p>

                </div>
                <div className="col-12 col-lg-3">

                </div>
            </div>

            <div className="row row-5">
                <div className="col-12 col-lg-4">
                    <img src={img_5} className="row-3-img"/>
                        <p className="text-room">PHÒNG SUITE HƯỚNG BIỂN</p>
                        <p className="text-room">Diện Tích Phòng: 85.8 m <sup>2</sup></p>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={img_6} className="row-3-img"/>
                        <p className="text-room">PHÒNG STUIDIO SUITE HƯỚNG BIỂN</p>
                        <p className="text-room">Diện Tích Phòng: 40.1 m<sup>2</sup></p>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={img_7} className="row-3-img"/>
                        <p className="text-room">PHÒNG DELUXE HƯỚNG BIỂN</p>
                        <p className="text-room">Diện Tích Phòng: 43.7 m<sup>2</sup></p>
                </div>
            </div>
            <div className="row row-6">
                <div className="col-12 col-lg-4">
                    <img src={img_8} className="row-3-img"/>
                        <p className="text-room">PHÒNG SUPERIOR HƯỚNG HỒ</p>
                        <p className="text-room">Diện Tích Phòng: 40.1 m<sup>2</sup></p>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={img_9} className="row-3-img"/>
                        <p className="text-room">PHÒNG SUPERIOR HƯỚNG VƯỜN</p>
                        <p className="text-room">Diện Tích Phòng: 40.1 m<sup>2</sup></p>
                </div>
                <div className="col-12 col-lg-4">
                    <img src={img_10} className="row-3-img"/>
                        <p className="text-room">PHÒNG DELUXE HƯỚNG VƯỜN</p>
                        <p className="text-room">Diện Tích Phòng: 43.7 m<sup>2</sup></p>
                </div>
            </div>
            <Footer/>

        </div>

    )
}

export default Home
import React, { Component } from 'react';
import                           '../css/footer/footer.css';

export default class Footer extends Component {

    render() {

        return (
            <div className="footer">
                <div className="footer-v2" style={{ color: "white"}}>
                    <div>
                        <h4>Trợ giúp</h4>
                        <p>Trạng thái đơn hàng</p>
                        <p>Hình thức giao hàng</p>
                        <p>Hình thức thanh toán</p>
                        <p>Chính sách bảo hành</p>
                    </div>
                    <div>
                        <h4>Thông tin</h4>
                        <p>Hệ thống cửa hàng</p>
                        <p>Liên hệ hợp tác</p>
                    </div>
                    <div>
                        <h4>Về ShoesStore</h4>
                        <p>ShoesStore's story</p>
                        <p>Bước tiến phát triển</p>
                        <p>Liên hệ</p>
                    </div>
                </div>
                <div className="middle-footer">
                    <hr/>
                </div>
                <div className="copyright" style={{ color: "white" }}>
                    © 2019 ShoesStore, Inc. All Right Reserved
                </div>
            </div>
        );
    }
}

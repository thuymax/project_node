import { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Footer = () => {
  return <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer_about">
                <h1 className="footer_about_logo">ThuyMax Shop</h1>
                <ul>
                  <li>Địa chỉ: Tây Mỗ</li>
                  <li>SĐT: 0378734454</li>
                  <li>Email: thuymaxshop@gmail.com</li>
                </ul>
            </div>
          </div>
          <div className="col-lg-3">2</div>
          <div className="col-lg-3">3</div>
          <div className="col-lg-3">4</div>
        </div>

      </div>
    </footer>
  </>
};
export default memo(Footer);
import { memo } from "react";
import {Link} from "react-router-dom";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
const Header = () => {
  return (
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6">
            left
          </div>
          <div className="col-6 header_top_right">
            <ul>
              <li>
                <Link to={""}>
                  <AiOutlineFacebook />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineLinkedin />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineMail />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <AiOutlineMail />
                </Link>
                <span>Đăng nhập</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
};
export default memo(Header);
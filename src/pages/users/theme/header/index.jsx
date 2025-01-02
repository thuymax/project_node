import {memo} from "react";
import "./style.scss";
import { AiOutlineFacebook } from 'react-icons/ai';
const Header = ()=>{
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
                    <AiOutlineFacebook  />
                    </li>
                    <li>
                      insta
                    </li>
                 </ul>
              </div>
          </div>

      </div>
    </div>
  )
};
export default  memo(Header);
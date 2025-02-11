import { memo, useState } from "react";
import {Link} from "react-router-dom";
import "./style.scss";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { formatter } from "@/utils/formatter";
import { ROUTERS } from "@/utils/router";
const Header = () => {
  const [isShowCategories, setIsShowCategories] = useState(true);
  const [menus,setMenus] = useState([
    {
      name: "Trang chủ",
      path:ROUTERS.USER.HOME
    },
    {
      name: "Cửa hàng",
      path:ROUTERS.USER.PRODUCTS
    },
    {
      name: "Sản phẩm",
      path:ROUTERS.USER.PRODUCTS,
      isShowSubMenu:false,
      child:[
        {
          name:"thịt",
          path:""
        },
        {
          name:"rau củ",
          path:""
        },
        {
          name:"Thức ăn nhanh",
          path:""
        },
      ]
    },
    {
      name: "Bài viết",
      path:ROUTERS.USER.HOME
    },
    {
      name: "Liên hệ",
      path:ROUTERS.USER.HOME
    },
  ])
  return (
    <>
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6 header_top_left">
             <ul>
              <li>
                <AiOutlineMail />
                hello@gmail.com
              </li>
              <li>
                Miễn phí ship đơn từ {formatter(200000)}
              </li>
             </ul>
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
                  <AiOutlineUser />
                </Link>
                <span>Đăng nhập</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <div className="container">
      <div className="row">
          <div className="col-xl-3">
            <div className="header_logo">
                <h1>ThuyMax Shop</h1>
            </div>
          </div>
          <div className="col-xl-6">
             <nav className="header_menu"> 
              <ul>
                {
                    menus?.map((menu, menuKey)=>(
                      <li key={menuKey} className={menuKey===0?"active":""}>
                         <Link to={menu.path}>{menu.name}</Link>
                         {
                          menu.child&&(
                            <ul className="header_menu_dropdown">
                              {
                                menu.child.map((childItem, childKey)=>(
                                  <li key={`${childKey}-${menuKey}`}>
                                  <Link to={childItem.path}>
                                      {childItem.name}
                                  </Link>
                                </li>
                                ))
                              }
                             
                            </ul>
                          )
                         }
                      </li>
                     
                    ))
                }
                
              </ul>
             </nav>
          </div>
          <div className="col-xl-3">
            <div className="header_cart">
                  <div className="header_cart_price">
                      <span>{formatter(1231234)}</span>
                  </div>
                  <ul>
                    <li>
                      <Link to="#"> 
                      <AiOutlineShoppingCart /> <span>5</span>
                      </Link> 
                    </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
    <div className="container">
      <div className="row hero-categories-container">
        <div className="col-lg-3 hero-categories ">
          <div className="hero-categories-all" onClick={()=>setIsShowCategories(!isShowCategories)}>
          <AiOutlineMenu/>
            Danh sách sản phẩm
          </div>
          { isShowCategories && (
            <ul className={isShowCategories?"":"hidden"}>
                <li><Link to="">thịt tươi</Link></li>
                <li><Link to="">rau củ</Link></li>
                <li><Link to="">nước trái cây</Link></li>
                <li><Link to="">trái cây</Link></li>
                <li><Link to="">hải sản</Link></li>
            </ul>
          )
          }
         
        </div>
        <div className="col-lg-9 hero-search-container">
            <div className="hero-search">
                <div className="hero-search-form">
                    <form action="">
                      <input type="text"  placeholder="Bạn đang tìm gì? "/>
                      <button type="submit">Tìm kiếm</button>
                    </form>
                </div>
                <div className="hero-search-phone">
                  <div className="hero-search-phone-icon">
                    <AiOutlinePhone/>
                  </div>
                  <div className="hero-search-phone-text">
                    <p>0123.123.423</p>
                    <span>hỗ trợ 24/7</span>
                  </div>
                </div>
            </div>

        </div>
      </div>
    </div>
    </>
    
  )
};
export default memo(Header);
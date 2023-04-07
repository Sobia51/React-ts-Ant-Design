import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';
import {
  MobileOutlined,
  MailOutlined,
   FacebookFilled,
   TwitterSquareFilled,
  InstagramFilled,
   UserOutlined,
   
} from '@ant-design/icons';

type AppHeaderProps = {}

const AppHeader:React.FC<AppHeaderProps> = ()=>{
  
  // const [visible, setVisible] = useState(false);

  //   const showDrawer = () => {
  //     setVisible(true);
  //   };
  
  //   const onClose = () => {
  //     setVisible(false);
  //   };
  return (
    <div className='container'>
    <div className='topBar'>
      <div className='contactInfo'>
        <ul>
          <li><a href="tel:07450223366"><MobileOutlined /> <span>07450223366</span></a></li>
          <li><a href="mailto:sobiasafdar51@gmail.com"><MailOutlined /> <span>sobiasafdar51@gmail.com</span></a></li>
        </ul>
      </div>
      <div className='otherInfo'>
          <ul className='socialMedia'>
            <li><a href='https://www.google.com'><FacebookFilled /></a></li>
            <li><a href='https://www.google.com'><TwitterSquareFilled /></a></li>
            <li><a href='https://www.google.com'><InstagramFilled /></a></li>
          </ul>
          <button><UserOutlined /> My Account</button>
        </div>
        </div>
        <div className='header separator'>
        <div className="logo">Pandamart</div> 
      
      <nav>
              <ul>
                <li><NavLink  to='/'>Home</NavLink></li>
                <li><NavLink  to='/about'>About</NavLink></li>
                <li><NavLink  to='/Shop'>Shop</NavLink></li>
                <li><NavLink  to='/Contact'>Contact</NavLink></li>
                <li><NavLink  to='/FAQ'>AppFAQ</NavLink></li>
              </ul>
            </nav>
            </div>
    </div>
  )
}
export default AppHeader;
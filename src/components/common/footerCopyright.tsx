import { BackTop } from 'antd';

import payment from '../../assets/images/payment.png';

const FooterCopyright:React.FC = ()=>{
  return(
    <div className="footerCopyright">
      <div className="container">
        <div className="copyright">©2022 Created by Pandamart</div>
        <div className="toTop"><img src={payment} alt="Payment" /></div>
      </div>
      <BackTop/>
    </div>
  );
}

export default FooterCopyright;
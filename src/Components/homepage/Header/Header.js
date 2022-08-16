import { Routes, Route, Link } from "react-router-dom";
import classes from  './Header.module.css'
import styles from './ResponsiveHeader.module.css'
import Card from '../../UI/Card'
import Page1 from "../../Page1/Page1";
import Page2 from "../../Page2/Page2";
import Page3 from "../../Page3/Page3";
import Homepage from "../Homepage";
const Header = () => 
{
    return (
        <div>
            <Card className = 'container'>
                <div className='row'>
                    <div className={`${classes.location} col-md-4`}>
                        gdfgsd
                    </div>
                    <div className={`${classes.pages} col-md-4`}>
                        <div>
                            <img src='https://img.cdn.vncdn.io/nvn/ncdn/store3/116325/logo_1646279818_logo1.png' alt='loi' />
                        </div>
                        <ul>
                            <li>
                                <Link to='/'>TRANG CHỦ </Link>
                            </li>
                            <li>
                                <Link to='/page1'>TÚI XÁCH </Link>
                            </li>
                            <li>
                                <Link to='/page2'>GIÀY DÉP </Link>
                            </li>
                            <li>
                                <Link to='/page3'>BLOG THỜI TRANG</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${classes.searchandcart} col-md-4`}>
                        bvcbdsfs
                    </div>
                </div>
            </Card>
            <Routes>
                <Route path="/" element = {<Homepage />} />
                <Route path="/page1" element = {<Page1 />} />
                <Route path="/page2" element = {<Page2 />} />
            </Routes>
        </div>
    )
}
export default Header
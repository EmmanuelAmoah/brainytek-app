import {Link} from 'react-router-dom';
import Render from './map';

function Footer() {
    return (
        <>
            <footer className="footer_style_2">
                <div className="container-fuild">
                    <div className="row">
                        <div className="map_section">
                            <div id="map"><Render/></div>
                        </div>
                        <div className="footer_blog">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="main-heading left_text">
                                        <h2>Brainy Tek Solution</h2>
                                    </div>
                                    <p>At Brainy Tek, we are dedicated to providing our customers with top-notch services.
                                        With 2 years of experience in the industry,
                                        we have built a reputation for excellence and a commitment to satisfying the needs of our clients. </p>
                                    <ul className="social_icons">
                                        <li className="social-icon fb"><Link to={"https://web.facebook.com/profile.php?id=100089236937310"}><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                        <li className="social-icon tw"><Link to={"#"}><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                        <li className="social-icon gp"><Link to={"#"}><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <div className="main-heading left_text">
                                        <h2>Additional links</h2>
                                    </div>
                                    <ul className="footer-menu">
                                        <li><Link to={"/about"}><i className="fa fa-angle-right"></i> About us</Link></li>
                                        <li><Link to={"/privacy-policy"}><i className="fa fa-angle-right"></i> Privacy Policy</Link></li>
                                        <li><Link to={"/terms-and-conditions"}><i className="fa fa-angle-right"></i> Terms and Conditions</Link></li>
                                        <li><Link to={"/contact"}><i className="fa fa-angle-right"></i> Contact us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <div className="main-heading left_text">
                                        <h2>Services</h2>
                                    </div>
                                    <ul className="footer-menu">
                                        <li><Link to={"/services"}><i className="fa fa-angle-right"></i> Web Development </Link></li>
                                        <li><Link to={"/services"}><i className="fa fa-angle-right"></i> Android App Development</Link></li>
                                        <li><Link to={"/services"}><i className="fa fa-angle-right"></i> IOS App Development</Link></li>
                                        <li><Link to={"/services"}><i className="fa fa-angle-right"></i> Graphic Design</Link></li>
                                        <li><Link to={"/services"}><i className="fa fa-angle-right"></i> CCTV Installation</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <div className="main-heading left_text">
                                        <h2>Contact us</h2>
                                    </div>
                                    <p>Asokwa Stadium Road, <br/>
                                        Kumasi, Ghana <br/>
                                        <span style={{ fontSize: '18px' }}><Link to={"tel:+233207554010 / "}>+233 20755 4010</Link></span>
                                    </p>
                                    <div className="footer_mail-section" style={{display: 'block'}}>
                                        <form>
                                            <fieldset>
                                                <div className="field">
                                                    <input placeholder="Email" type="text" style={{display: 'block'}}/>
                                                    <button className="button_custom" style={{float: 'right', display: 'block'}}><i className="fa fa-envelope" aria-hidden="true"></i></button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cprt">
                            <p>Brainy Tek Solution © Copyrights 2023</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
import {Link} from 'react-router-dom'
import Client from './client_say'
function Services() {
    return (
        <>
                <div className="header_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                {/* <!-- logo start --> */}
                                <div className="logo"> <Link to={"/"}><img src="images/logos/it_logo.png" alt="logo" /></Link> </div>
                                {/* <!-- logo end --> */}
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                {/* <!-- menu start --> */}
                                <div className="menu_side">
                                    <div id="navbar_menu">
                                        <ul className="first-ul">
                                            <li><Link to={"/"}>Home</Link></li>
                                            <li><Link to={"/about"}>About Us</Link></li>
                                            <li><Link className="active" to={"/services"}>Services</Link></li>
                                            <li><Link to={"/contact"}>Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            <div id="inner_banner" className="section inner_banner_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="title-holder">
                                    <div className="title-holder-cell text-left">
                                        <h1 className="page-title">Services</h1>
                                        <ol className="breadcrumb">
                                            <li><Link to="/">Home</Link></li>
                                            <li className="active">Services</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section padding_layout_1 service_list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 service_blog margin_bottom_50">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/webdevelopment.png" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Web Development</h3>
                                    <p>We build and manage website. Come let's create a website for your company or organization.</p>
                                    <div className="bt_cont"> <Link className="btn sqaure_bt" to={"#"}>View Service</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service_blog margin_bottom_50">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/andriod.png" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Andriod App Development</h3>
                                    <p>We build all kinds of Android Applications and also manages existing Applications. </p>
                                    <div className="bt_cont"> <Link className="btn sqaure_bt" to={"#"}>View Service</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service_blog margin_bottom_50">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/ios.png" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">IOS App Development</h3>
                                    <p>We build all kinds of iOS Applications and also manages existing Applications.</p>
                                    <div className="bt_cont"> <Link className="btn sqaure_bt" to={"#"}>View Service</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service_blog margin_bottom_50">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/graphic.png" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Graphic Design</h3>
                                    <p>Do you have any design in mind, do you want it to be a reality?
                                        we do all kinds of Design
                                    </p>
                                    <div className="bt_cont"> <Link className="btn sqaure_bt" to={"#"}>View Service</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service_blog margin_bottom_50">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/videography.png" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Videography</h3>
                                    <p>Do you want your product to be captured live, then visit Brainy Tek Solution.</p>
                                    <div className="bt_cont"> <Link className="btn sqaure_bt" to={"#"}>View Service</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service_blog margin_bottom_50">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/cctv.png" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">CCTV Installation</h3>
                                    <p>Protect your Home and your Business from bad people. We install and also manages CCTV</p>
                                    <div className="bt_cont"> <Link className="btn sqaure_bt" to={"#"}>View Service</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service_blog margin_bottom_50">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/network_1.png" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Network & Security</h3>
                                    <p>Do you want to secure your business from cyber attack or are you looking forward in Networking your office,
                                        school or home?</p>
                                    <div className="bt_cont"> <Link className="btn sqaure_bt" to={"#"}>View Service</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service_blog margin_bottom_50">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/digitalmarketing.png" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Digital Marketing</h3>
                                    <p>Expand your business through the socials. Visit us to make that happen.
                                    </p>
                                    <div className="bt_cont"> <Link className="btn sqaure_bt" to={"#"}>View Service</Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service_blog margin_bottom_50">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/hardware.png" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Computer Hardware Services</h3>
                                    <p>Do you have a damaged computer or laptop that needs fixing? Brainy Tek Solution is your answer.
                                        we fix damaged computers.
                                    </p>
                                    <div className="bt_cont"> <Link className="btn sqaure_bt" to={"#"}>View Service</Link> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Client/>
        </>
    )
}

export default Services;
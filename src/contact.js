import {Link} from 'react-router-dom'
import Client from './client_say'
function Contact() {
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
                                            <li><Link to={"/services"}>Services</Link></li>
                                            <li><Link className="active" to={"/contact"}>Contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className="search_icon">
                                        <ul>
                                            <li><Link to={"#"} data-toggle="modal" data-target="#search_bar"><i className="fa fa-search"
                                                aria-hidden="true"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- menu end --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- header bottom end --> */}
      <div id="inner_banner" className="section inner_banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="title-holder">
                  <div className="title-holder-cell text-left">
                    <h1 className="page-title">Contact Us</h1>
                    <ol className="breadcrumb">
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li className="active">Contact Us</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner page banner --> */}
      <div className="section padding_layout_1">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12"></div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <div className="full">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="main_heading text_align_center">
                      <h2>GET IN TOUCH</h2>
                    </div>
                  </div>
                  <div className="contact_information">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 adress_cont">
                      <div className="information_bottom text_align_center">
                        <div className="icon_bottom">
                          <i className="fa fa-road" aria-hidden="true"></i>
                        </div>
                        <div className="info_cont">
                          <h4>Asokwa Stadium Road..</h4>
                          <p>Kumasi, Ghana</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 adress_cont">
                      <div className="information_bottom text_align_center">
                        <div className="icon_bottom">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div className="info_cont">
                          <h4>+233 207 554 010</h4>
                          <p>Mon-Fri 8:00am-5:00pm</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 adress_cont">
                      <div className="information_bottom text_align_center">
                        <div className="icon_bottom">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <div className="info_cont">
                          <h4>info@brainyteksolution.com</h4>
                          <p>24/7 online support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contant_form">
                    <h2 className="text_align_center">SEND MESSAGER</h2>
                    <div className="form_section">
                      <form className="form_contant" action="">
                        <fieldset>
                          <div className="row">
                            <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <input
                                className="field_custom"
                                placeholder="Website URL"
                                type="text"
                              />
                            </div>
                            <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <input
                                className="field_custom"
                                placeholder="Your name"
                                type="text"
                              />
                            </div>
                            <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <input
                                className="field_custom"
                                placeholder="Email adress"
                                type="email"
                              />
                            </div>
                            <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                              <input
                                className="field_custom"
                                placeholder="Phone number"
                                type="text"
                              />
                            </div>
                            <div className="field col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <textarea
                                className="field_custom"
                                placeholder="Messager"
                              ></textarea>
                            </div>
                            <div className="center">
                              <Link className="btn main_bt" to={"#"}>
                                SUBMIT NOW
                              </Link>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Client/>
    </>
  );
}

export default Contact;

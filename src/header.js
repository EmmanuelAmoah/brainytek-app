import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
      <div className="bg_load">
        {" "}
        <img
          className="loader_animation"
          src="images/loaders/loader_1.png"
          alt="#"
        />{" "}
      </div>
      {/* <!-- end loader -->
            <!-- header --> */}
      <header id="default_header" className="header_style_1">
        {/* <!-- header top --> */}
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="full">
                  <div className="topbar-left">
                    <ul className="list-inline">
                      <li>
                        {" "}
                        <span className="topbar-label">
                          <i className="fa  fa-home"></i>
                        </span>{" "}
                        <span className="topbar-hightlight">
                          Ashanti Region, kumasi - Ghana
                        </span>{" "}
                      </li>
                      <li>
                        {" "}
                        <span className="topbar-label">
                          <i className="fa fa-envelope-o"></i>
                        </span>{" "}
                        <span className="topbar-hightlight">
                          <Link to={"mailto:info@brainyteksolution.com"}>
                            info@brainyteksolution.com
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 right_section_header_top">
                <div className="float-left">
                  <div className="social_icon">
                    <ul className="list-inline">
                      <li>
                        <Link
                          className="fa fa-facebook"
                          to={"https://web.facebook.com/profile.php?id=100089236937310"}
                          title="Facebook"
                          target="_blank"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="fa fa-google-plus"
                          to={"https://plus.google.com/"}
                          title="Google+"
                          target="_blank"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="fa fa-twitter"
                          to={"https://twitter.com"}
                          title="Twitter"
                          target="_blank"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="fa fa-linkedin"
                          to={"https://www.linkedin.com"}
                          title="LinkedIn"
                          target="_blank"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          className="fa fa-instagram"
                          to={"https://www.instagram.com"}
                          title="Instagram"
                          target="_blank"
                        ></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="float-right">
                  <div className="make_appo">
                    {" "}
                    <Link className="btn white_btn" to={"/book_appointment"}>
                      Book An Appointment
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

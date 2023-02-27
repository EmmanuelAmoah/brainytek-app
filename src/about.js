import { Link } from "react-router-dom";
import Client from './client_say'
function About() {
  return (
    <>
      <div className="header_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              {/* <!-- logo start --> */}
              <div className="logo">
                {" "}
                <Link to={"/"}>
                  <img src="images/logos/it_logo.png" alt="logo" />
                </Link>{" "}
              </div>
              {/* <!-- logo end --> */}
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              {/* <!-- menu start --> */}
              <div className="menu_side">
                <div id="navbar_menu">
                  <ul className="first-ul">
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link className="active" to={"/about"}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to={"/services"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="search_icon">
                  <ul>
                    <li>
                      <Link
                        to={"#"}
                        data-toggle="modal"
                        data-target="#search_bar"
                      >
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Link>
                    </li>
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
                    <h1 className="page-title">About Us</h1>
                    <ol className="breadcrumb">
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li className="active">About Us</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner page banner --> */}
      {/* <!-- section --> */}
      <div className="section padding_layout_1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="main_heading text_align_center">
                  <h2>We are a Leading Tech Solution Company</h2>
                  <p className="large">
                    Fastest respose, Quality Client Service and affordable
                    pricing
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row about_blog">
            <div className="col-lg-6 col-md-6 col-sm-12 about_cont_blog">
              <div className="full text_align_left">
                <h3>What we do</h3>
                <p>
                  As our slogan says, You Think, We build. We provide any Tech
                  related solutions. We also provide free consultation and
                  intenship programs for students.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-check-circle"></i>Web and Mobile App
                    Development
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>Network and CCTV
                    Installation
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>Graphic Design and
                    Videography
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>Intenship Programs
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 about_feature_img padding_right_0">
              <div className="full text_align_center">
                {" "}
                <img
                  className="img-responsive"
                  src="images/it_service/post-06.png"
                  alt="#"
                />{" "}
              </div>
            </div>
          </div>
          {/* <!-- section --> */}
          <div className="section padding_layout_1 light_silver gross_layout">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <div className="main_heading text_align_left">
                      <h2>About Service</h2>
                      <p className="large">
                        Easy and effective way to get your ideas to life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="full">
                        <div className="service_blog_inner2">
                          <div className="icon text_align_left">
                            <i className="fa fa-wrench"></i>
                          </div>
                          <h4 className="service-heading">Honest Services</h4>
                          <p>
                            We treat all our Client equally and their ideas our
                            priority
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="full">
                        <div className="service_blog_inner2">
                          <div className="icon text_align_left">
                            <i className="fa fa-cog"></i>
                          </div>
                          <h4 className="service-heading">Free Consultation</h4>
                          <p>
                            We give free advice on tech related issues whenever
                            you call or visit us.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="full">
                        <div className="service_blog_inner2">
                          <div className="icon text_align_left">
                            <i className="fa fa-history"></i>
                          </div>
                          <h4 className="service-heading">Expert Team</h4>
                          <p>
                            We have Experienced Team that are very good at what
                            they do, good client relation and communication
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="full">
                        <div className="service_blog_inner2">
                          <div className="icon text_align_left">
                            <i className="fa fa-heart-o"></i>
                          </div>
                          <h4 className="service-heading">
                            Affordable services
                          </h4>
                          <p>
                            All our products are very affordable and negotiable.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end section --> */}
          <div className="section padding_layout_1">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <div className="main_heading text_align_left">
                      <h2>The Team</h2>
                      <p className="large">
                        Our experts have been featured in press numerous times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-6 mt-3">
                  <div className="full team_blog_colum">
                    <div className="it_team_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/danso.jpg"
                        alt="#"
                      />{" "}
                    </div>
                    <div className="team_feature_head">
                      <h4>Danso Dwamena Kwesi</h4>
                      <h6>Hardware Technician</h6>
                    </div>
                    <div className="team_feature_social">
                      <div className="social_icon">
                        <ul className="list-inline">
                          <li>
                            <Link
                              className="fa fa-facebook"
                              to={"https://www.facebook.com/ahof.evans"}
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
                              to={"https://www.linkedin.com/in/danso-dwamena-kwasi-4810a1250"}
                              title="LinkedIn"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-instagram"
                              to="https://www.instagram.com"
                              title="Instagram"
                              target="_blank"
                            ></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                  <div className="full team_blog_colum">
                    <div className="it_team_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/alexander.jpg"
                        alt="#"
                      />{" "}
                    </div>
                    <div className="team_feature_head">
                      <h4>Nuamah Jr. Alexander</h4>
                      <h6>Fullstack Developer</h6>
                    </div>
                    <div className="team_feature_social">
                      <div className="social_icon">
                        <ul className="list-inline">
                          <li>
                            <Link
                              className="fa fa-facebook"
                              to="https://www.facebook.com/"
                              title="Facebook"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-google-plus"
                              to="https://plus.google.com/"
                              title="Google+"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-twitter"
                              to="https://twitter.com"
                              title="Twitter"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-linkedin"
                              to={
                                "https://www.linkedin.com/in/alexander-nuamah-13a436162/"
                              }
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
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                  <div className="full team_blog_colum">
                    <div className="it_team_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/emma.jpg"
                        alt="#"
                      />{" "}
                    </div>
                    <div className="team_feature_head">
                      <h4>Amoah Emmanuel</h4>
                      <h6>Fullstack Developer</h6>
                    </div>
                    <div className="team_feature_social">
                      <div className="social_icon">
                        <ul className="list-inline">
                          <li>
                            <Link
                              className="fa fa-facebook"
                              to={"https://web.facebook.com/orlando.amoah"}
                              title="Facebook"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-google-plus"
                              to="https://plus.google.com/"
                              title="Google+"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-twitter"
                              to="https://twitter.com"
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
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                  <div className="full team_blog_colum">
                    <div className="it_team_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/sylvester.jpg"
                        alt="#"
                      />{" "}
                    </div>
                    <div className="team_feature_head">
                      <h4>Amponsah Kwadwo Sylvester</h4>
                      <h6>Front-End Developer</h6>
                    </div>
                    <div className="team_feature_social">
                      <div className="social_icon">
                        <ul className="list-inline">
                          <li>
                            <Link
                              className="fa fa-facebook"
                              to={"https://www.facebook.com/"}
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
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                  <div className="full team_blog_colum">
                    <div className="it_team_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/aziz.jpg"
                        alt="#"
                      />{" "}
                    </div>
                    <div className="team_feature_head">
                      <h4>Yerima Abdel-Aziz Islam</h4>
                      <h6>Back-End Developer</h6>
                    </div>
                    <div className="team_feature_social">
                      <div className="social_icon">
                        <ul className="list-inline">
                          <li>
                            <Link
                              className="fa fa-facebook"
                              to={"https://www.facebook.com/"}
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
                              to="https://twitter.com"
                              title="Twitter"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-linkedin"
                              to="https://www.linkedin.com"
                              title="LinkedIn"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-instagram"
                              to="https://www.instagram.com"
                              title="Instagram"
                              target="_blank"
                            ></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                  <div className="full team_blog_colum">
                    <div className="it_team_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/Michael.jpg"
                        alt="#"
                      />{" "}
                    </div>
                    <div className="team_feature_head">
                      <h4>Michael Adjei</h4>
                      <h6> Frontend & Graphic Designer </h6>
                    </div>
                    <div className="team_feature_social">
                      <div className="social_icon">
                        <ul className="list-inline">
                          <li>
                            <Link
                              className="fa fa-facebook"
                              to="https://www.facebook.com/"
                              title="Facebook"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-google-plus"
                              to="https://plus.google.com/"
                              title="Google+"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-twitter"
                              to="https://twitter.com"
                              title="Twitter"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-linkedin"
                              to="https://www.linkedin.com"
                              title="LinkedIn"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-instagram"
                              to="https://www.instagram.com"
                              title="Instagram"
                              target="_blank"
                            ></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                  <div className="full team_blog_colum">
                    <div className="it_team_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/felix.jpg"
                        alt="#"
                      />{" "}
                    </div>
                    <div className="team_feature_head">
                      <h4>Arthur Wainwright Felix</h4>
                      <h6>Programming Logic & Techniques</h6>
                    </div>
                    <div className="team_feature_social">
                      <div className="social_icon">
                        <ul className="list-inline">
                          <li>
                            <Link
                              className="fa fa-facebook"
                              to="https://www.facebook.com/"
                              title="Facebook"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-google-plus"
                              to="https://plus.google.com/"
                              title="Google+"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-twitter"
                              to="https://twitter.com"
                              title="Twitter"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-linkedin"
                              to="https://www.linkedin.com"
                              title="LinkedIn"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-instagram"
                              to="https://www.instagram.com"
                              title="Instagram"
                              target="_blank"
                            ></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                  <div className="full team_blog_colum">
                    <div className="it_team_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/isaac.jpg"
                        alt="#"
                      />{" "}
                    </div>
                    <div className="team_feature_head">
                      <h4>Mensah Isaac</h4>
                      <h6> Senior Designer </h6>
                    </div>
                    <div className="team_feature_social">
                      <div className="social_icon">
                        <ul className="list-inline">
                          <li>
                            <Link
                              className="fa fa-facebook"
                              to="https://www.facebook.com/"
                              title="Facebook"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-google-plus"
                              to="https://plus.google.com/"
                              title="Google+"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-twitter"
                              to="https://twitter.com"
                              title="Twitter"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-linkedin"
                              to="https://www.linkedin.com"
                              title="LinkedIn"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-instagram"
                              to="https://www.instagram.com"
                              title="Instagram"
                              target="_blank"
                            ></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 mt-3">
                  <div className="full team_blog_colum">
                    <div className="it_team_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/miracle.jpg"
                        alt="#"
                      />{" "}
                    </div>
                    <div className="team_feature_head">
                      <h4>Appiah Kumah Miracle</h4>
                      <h6> Senior Designer & Front-End Devoloper </h6>
                    </div>
                    <div className="team_feature_social">
                      <div className="social_icon">
                        <ul className="list-inline">
                          <li>
                            <Link
                              className="fa fa-facebook"
                              to="https://www.facebook.com/"
                              title="Facebook"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-google-plus"
                              to="https://plus.google.com/"
                              title="Google+"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-twitter"
                              to="https://twitter.com"
                              title="Twitter"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-linkedin"
                              to="https://www.linkedin.com"
                              title="LinkedIn"
                              target="_blank"
                            ></Link>
                          </li>
                          <li>
                            <Link
                              className="fa fa-instagram"
                              to="https://www.instagram.com"
                              title="Instagram"
                              target="_blank"
                            ></Link>
                          </li>
                        </ul>
                      </div>
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

export default About;

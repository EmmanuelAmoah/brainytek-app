import {Link} from 'react-router-dom'
import MyCarousel from './carousel';
import Client from './client_say'


function Home() {
  return (
    <>
    
        <div className="container" style={{backgroundColor:'white'}}>
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
                      <Link className="active" to={"/"}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/services"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="search_icon">
                  <ul>
                    <li>
                      <Link to={"#"} data-toggle="modal" data-target="#search_bar">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
              {/* <!-- menu end --> */}
            </div>
          </div>
        </div>
      {/* <!-- header bottom end --> */}
      <MyCarousel/>
      {/* <!-- section --> */}
      <div className="section padding_layout_1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="main_heading text_align_center">
                  <h2>Why Choose Us</h2>
                  <p className="large">
                    Fastest respose, Quality Client Service and Affordable
                    Pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="full text_align_center margin_bottom_30">
                <div className="center">
                  <div className="icon">
                    {" "}
                    <img src="images/it_service/si1.png" alt="#" />{" "}
                  </div>
                </div>
                <h4 className="theme_color">Fast Services</h4>
                <p>We attend to your needs with just a single Click!!!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="full text_align_center margin_bottom_30">
                <div className="center">
                  <div className="icon">
                    {" "}
                    <img src="images/it_service/si4.png" alt="#" />{" "}
                  </div>
                </div>
                <h4 className="theme_color">Affordable Services</h4>
                <p>
                  Services provided by Brainy Tek Solution is very Affordable,
                  No price beats us!!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="full text_align_center margin_bottom_30">
                <div className="center">
                  <div className="icon">
                    {" "}
                    <img src="images/it_service/si3.png" alt="#" />{" "}
                  </div>
                </div>
                <h4 className="theme_color">Expert Team</h4>
                <p>
                  {" "}
                  Meet our Experienced Team members to make your dreams
                  reality!!{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="full text_align_center margin_bottom_30 margin_0">
                <div className="center">
                  <div className="icon">
                    {" "}
                    <img src="images/it_service/si2.png" alt="#" />{" "}
                  </div>
                </div>
                <h4 className="theme_color">Provide Free Consultation</h4>
                <p>
                  We provide free Consultations when you visit or contact Brainy
                  Tek Solution
                </p>
              </div>
            </div>
          </div>
          {/* <!-- end section --> */}
          {/* <!-- section --> */}
          <div className="section padding_layout_1">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <div className="main_heading text_align_center">
                      <h2>Our Services</h2>
                      <p className="large">
                        We provide quality services to our Clients.. A happy
                        Client is the best Advertizer!!!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                  <div className="product_list">
                    <div className="product_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/webdevelopment.png"
                        alt=""
                      />{" "}
                    </div>
                    <div className="product_detail_btm">
                      <div className="center">
                        <h4>
                          <Link to={"#"}>Web Development</Link>
                        </h4>
                      </div>
                      <div className="product_price">
                        <p><span>Bring your ideas to life on the web - 
                          elevate your online presence with our comprehensive web development solutions.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                  <div className="product_list">
                    <div className="product_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/It_service/andriod.png"
                        alt=""
                      />{" "}
                    </div>
                    <div className="product_detail_btm">
                      <div className="center">
                        <h4>
                          <Link to={"#"}>Android App Development</Link>
                        </h4>
                      </div>
                      <div className="product_price">
                        <p><span>Build innovative and user-friendly mobile apps with ease - 
                          start your Android app development journey today!</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                  <div className="product_list">
                    <div className="product_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/ios.png"
                        alt=""
                      />{" "}
                    </div>
                    <div className="product_detail_btm">
                      <div className="center">
                        <h4>
                          <Link to={"#"}>IOS App Development</Link>
                        </h4>
                      </div>
                      <div className="product_price">
                        <p><span>Create cutting-edge mobile experiences for iOS devices - 
                          unleash your app development potential today!</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
                  <div className="product_list">
                    <div className="product_img">
                      {" "}
                      <img
                        className="img-responsive"
                        src="images/it_service/graphic.png"
                        alt=""
                      />{" "}
                    </div>
                    <div className="product_detail_btm">
                      <div className="center">
                        <h4>
                          <Link to={"#"}>Graphic Design</Link>
                        </h4>
                      </div>
                      <div className="product_price">
                        <p><span>Transform your creative vision into stunning visuals - 
                          unlock your design skills with our expert tools and resources.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end section --> */}
        {/* <!-- Modal --> */}
        {/* <div className="modal fade" id="search_bar" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"><i className="fa fa-close"></i></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8 offset-lg-2 offset-md-2 offset-sm-2 col-xs-10 col-xs-offset-1">
                                        <div className="navbar-search">
                                            <form action="#" method="get" id="search-global-form" className="search-global">
                                                <input type="text" placeholder="Type to search" autocomplete="off" name="s" id="search" value="" className="search-global__input" />
                                                <button className="search-global__btn"><i className="fa fa-search"></i></button>
                                                <div className="search-global__note">Begin typing your search above and press return to search.</div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
        {/* </div> */}
      </div>
      <Client/>
    </>
  );
}

export default Home;

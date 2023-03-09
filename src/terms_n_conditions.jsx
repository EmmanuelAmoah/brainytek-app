import { Link } from 'react-router-dom'
export default function TermsAndConditions() {
  return (
    <>
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
                    <Link to={"/"}>
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
      <div id="inner_banner" className="section inner_banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="title-holder">
                  <div className="title-holder-cell text-left">
                    <h1 className="page-title">Terms and Conditions</h1>
                    <ol className="breadcrumb">
                      <li><Link to={"/"}>Home</Link></li>
                      <li className="active">Terms and Conditions</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section padding_layout_1 it_service_policy">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12">
                  <div className="full">
                    <h3>TERMS OF SERVICE</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>Please read these Terms of Service carefully, BrainyTek Solution provides products and services to help you get an online presence/website, advertise online and more.<br></br>
                        These Terms apply to all clients, users and others who access or want our service. Any new features which are added to the current service shall be also subject to these Terms of Service.<br></br>
                        BrainyTek Solution reserves the right to update and change the terms by posting updates and changes to the brainyteksolution.com website. You are advised to check the Terms of Service from time to time for any updates or changes that may affect you</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>PAYMENT</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>Payment for our services is made in full//Half payment by the client in order to commence web design and other services we provide. On confirmation of payment, a receipt will be issued based on the contact information we are provided with.</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>SUPPLY OF INFORMATION</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>The client is responsible for providing all necessary information in order to execute the project. Such information includes logos, contact information, website content, images/videos, etc. Where there is any delay in providing necessary information, we reserve the right to delay commencement of the respective project until all information has been given.</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>CHANGES/CORRECTION OF PROJECT/SERVICES</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>Website projects are up and running between 4 – 30 days approximately, depending on the package selected, the client is given the opportunity to review and give feedback on his/her project within the period.  However, any major deviations from initially agreed upon or unknown specifications will attract some charges.
                    Upon request to fully manage your website, once you acknowledge and begin administration of the website, any major changes that must be made with our assistance will incur an additional fee.</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                  <h3>NAMES AND TRADEMARKS</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>Clients hereby grant BrainyTek Solution a non-exclusive right to use Client’s trade names and logos as used by Client’s hosted sites, including but not limited to screenshots of Client’s hosted sites and associated photographs appearing on Client’s hosted sites (“Customer Public information and images”), on BrainyTek Solution’s own websites describing and promoting our Services.
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>TERMINATION OF SERVICE</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>BrainyTek Solution Service will continue in effect until Client validly terminates the Service<br></br><br></br>
                      1. The Client will be paying monthly/yearly payment for the hosting; the website will go offline once the client refuse to pay the offered amount for the month/year after the consideration period.<br></br>
                      2. The client upon refusal to pay for a period of 3 month continuously, this mean the client have self-cancelled the service therefor will lose the website content permanently.<br></br>
                      3. The Client may cancel his/her service at any time by emailing <Link to={"mailto:info@brainyteksolution.com"}>
                            info@brainyteksolution.com
                          </Link> and then following the specific instructions indicated to the BrainyTek  response<br></br>
                      4. The Client upon cancellation of service will not be entitled to any refunds of any fees<br></br>
                      5. The Client’s website or advertisement will be taken offline
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>CONSENT</h3>
                    <p style={{wordSpacing:'1px'}}>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>CHANGES TO SERVICES AND PRICING</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>BrainyTek Solution reserves the right at any time, and from time to time, to modify or discontinue a service or any part thereof with or without notice. 
                        BrainyTek Solution will not be liable to the Client or any third party for any modification, price change, suspension or discontinuance of the Service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
import { Link } from 'react-router-dom'
export default function Privacy() {
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
                    <h1 className="page-title">Privacy Policy</h1>
                    <ol className="breadcrumb">
                      <li><Link to={"/"}>Home</Link></li>
                      <li className="active">Privacy Policy</li>
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
                    <h3>GENERAL INFORMATION</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>
                      At BrainyTek Solution, accessible from brainyteksolution.com, one of our main priorities is the privacy of our visitors.<br></br> This Privacy Policy document contains types of information that is collected and recorded by BrainyTek Solution and how we use it.
                      If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                      This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in BrainyTek Solution. This policy is not applicable to any information collected offline or via channels other than this website.
                      Our Privacy Policy was created with the help of the <Link to={'/about'}>BrainyTek Solution Privacy Policy Team.</Link></p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>INFORMATION WE COLLECT</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                      If you contact us directly, we may receive additional information about you such as your name, email address, phone number,
                      the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                      When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>LOG FILES</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>BrainyTek Solution follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site,
                      tracking users’ movement on the website, and gathering demographic information.</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>GDPR DATA PTOTECTION RIGHTS</h3>
                    <p style={{wordSpacing:'1px'}}>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                      <br></br><br></br>
                      The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                      <br></br><br></br>
                      The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                      <br></br><br></br>
                      The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
                      <br></br><br></br>
                      The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
                      <br></br><br></br>
                      The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
                      <br></br><br></br>
                      The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                      <br></br><br></br>
                      If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us
                      </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>THIRD PARTY POLICIES</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>BrainyTek Solution’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
                      It may include their practices and instructions about how to opt-out of certain options.
                      You can choose to disable cookies through your individual browser options.
                      To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites.</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="full">
                    <h3>HOW WE USE YOUR INFORMATION</h3>
                    <p style={{wordSpacing:'1px'}}>We use the information we collect in various ways, including to:<br></br><br></br>
                      <ul>
                        <li>Provide, operate, and maintain our website</li><br></br>
                        <li>Improve, personalize, and expand our website</li><br></br>
                        <li>Understand and analyze how you use our website</li><br></br>
                        <li>Develop new products, services, features, and functionality</li><br></br>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, 
                          to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li><br></br>
                        <li>Send you emails</li><br></br>
                        <li>Find and prevent fraud</li>
                      </ul>
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
                    <h3>CHILDREN'S INFORMATION</h3>
                    <p style={{lineHeight:'2.0', wordSpacing:'1px'}}>Another part of our priority is adding protection for children while using the internet.
                      We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                      BrainTek Solution does not knowingly collect any Personal Identifiable Information from children under the age of 13.
                      If you think that your child provided this kind of information on our website,
                      we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records</p>
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
import {Link} from 'react-router-dom'
function BookAppointment() {
  return (
    <>
      <div id="inner_banner" className="section inner_banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="title-holder">
                  <div className="title-holder-cell text-left">
                    <h1 className="page-title">Book an Appointment</h1>
                    <ol className="breadcrumb">
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li className="active">Book an Appointment</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner page banner --> */}
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
                      <h2>Book an Appointment</h2>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 appointment_form">
                    <div className="form_section">
                      <form className="form_contant" action="/">
                        <fieldset className="row">
                          <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <input
                              className="field_custom"
                              placeholder="First Name*"
                              type="text"
                              required
                            />
                          </div>
                          <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <input
                              className="field_custom"
                              placeholder="Last Name"
                              type="text"
                              required
                            />
                          </div>
                          <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <input
                              className="field_custom"
                              placeholder="Your Email"
                              type="email"
                              required
                            />
                          </div>
                          <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <input
                              className="field_custom"
                              placeholder="Your Phone Number"
                              type="text"
                              required
                            />
                          </div>
                          <div className="field col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <input
                              className="field_custom"
                              placeholder="Subject"
                              type="text"
                              required
                            />
                          </div>
                          <div className="field col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <textarea
                              className="field_custom"
                              placeholder="Description"
                              required
                            ></textarea>
                          </div>
                          <div className="center">
                            <button className="btn main_bt">SUBMIT NOW</button>
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
    </>
  );
}

export default BookAppointment;

import React, { useMemo, useState } from "react";
import TableContainer from "../../components/Common/TableContainer";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Button, Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { customers } from "../../common/data/ecommerce";
import img2 from "../../assets/images/small/img-2.jpg";
import { NavLink } from 'react-router-dom';
import img5 from "../../assets/images/small/img-5.jpg";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const ViewTeam = () => {


  const [ShowVideo, setShowVideo] = useState(false)


  const toggleYouTubeVideo = () => {
    setShowVideo(!ShowVideo); // Toggle the state
  };

  const breadcrumbItems = [
    { title: "User", link: "/" },
    { title: "View User", link: "#" },
  ]

  return (
    <React.Fragment>

      <div className="d-flex align-items-start gap-3 flex">

        <ModalVideo
          videoId="L61p2uyiMSo"
          channel="youtube"
          isOpen={ShowVideo}
          onClose={toggleYouTubeVideo}
        />
        <ModalVideo
          videoId="L61p2uyiMSo"
          channel="youtube"
          isOpen={ShowVideo}
          onClose={toggleYouTubeVideo}
        />
      </div>


      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="View User"
            breadcrumbItems={breadcrumbItems}
          />
          <Card>
            <CardBody>
              <Col xl={12}>


                <Row>
                  <Col lg={5}>
                    <h1 className="text-2xl font-semibold mb-2">
                      Rizwan Sabir
                    </h1>
                    <div
                      className="text-sm text-muted-foreground mb-4 d-flex align-items-center gap-4"
                      style={{ color: '#7C3EFF' }}
                    >
                      <span>Real Estate Agent</span>
                      <div className="d-flex align-items-center gap-3">
                        <i className="ri-mail-send-line"></i>

                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram-square"></i>
                      </div>
                    </div>
                    <h5>About me</h5>

                    <div className="">
                      <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>
                      <p>Designs in balance (or equilibrium) have their parts arrangement planned, keand so asymmetrical or radial distributions of text and graphic elements can achieve balance in a composition.</p>
                    </div>

                  </Col>



                  <Col lg={7}>
                    <Card
                      onClick={toggleYouTubeVideo}
                    >
                      <CardImg className="img-fluid" src={img5} alt="Skote" />
                      <CardImgOverlay
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CardText>
                          <div style={{ color: "#82DFDF", fontSize: "100px" }}>
                            <i className="fas fa-play"></i>
                          </div>
                        </CardText>
                      </CardImgOverlay>
                    </Card>
                  </Col>
                </Row>

                <div className="mt-3">
                  <Row>
                    <Col xs={12} md={12}>
                      <div className="col-xl-12">
                        <section className="box ">
                          <div className="content-body">
                            <div className="blog_post full_blog_post">
                              <div id="comments " className="">

                                <h3>My Recent Complete Project </h3>
                                <Row>
                                  <PropertyCard />
                                  <PropertyCard />
                                  <PropertyCard />
                                  <PropertyCard />

                                </Row>

                              </div>

                              <div className="clearfix"></div><br />
                              <h3>Direct Message</h3>
                              <form className="form row comment-form">
                                <div className="form-group col-12">
                                  <label className="form-label" htmlFor="inputName">Name</label>
                                  <div className="controls">
                                    <input type="text" className=" form-control" id="inputName" />
                                  </div>
                                </div>
                                <div className="form-group col-12">
                                  <label className="form-label" htmlFor="inputEmail">Email</label>
                                  <div className="controls">
                                    <input type="text" className=" form-control" id="inputEmail" />
                                  </div>
                                </div>

                                <div className="form-group col-12">
                                  <label className="form-label" htmlFor="inputComment">Message</label>
                                  <div className="controls">
                                    <textarea className=" form-control" id="inputComment" rows="6"></textarea>
                                  </div>
                                </div>

                                <div className="form-group col-12 mt-4" style={{ 'marginBottom': '0px' }}>
                                  <div className="controls action">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                  </div>
                                </div>
                              </form>

                            </div>
                          </div>
                        </section></div>
                    </Col>
                  </Row>
                </div>
              </Col>

            </CardBody>
          </Card>
        </Container>
      </div>




    </React.Fragment>
  );
};



const PropertyCard = () => {
  return (
    <Col xl={4} className="mt-4">

      <Card>
        <CardImg top className="img-fluid" src={'/singleProperty.jpg'} alt="Skote" />
        <CardBody>
          <div className="">

            <Row className="">
              {/* Left Section */}
              <Col md={8}>
                <div className="d-flex align-items-center ">
                  {/* Price */}
                  <img src="https://eplogproperties.com/Svg/Price.svg" alt="Price Icon" className="me-2" />
                  <h5 className="box-title d-flex align-items-center">
                    <span className="text-[12px]">AED</span>
                    <span className="ms-1">800.00 K</span>
                  </h5>
                </div>
                <div>
                  {/* Property Info */}
                  <p className="text-cyan-500 ">Aura Elegance</p>
                  <p className="text-cyan-500">
                    Aura Infinite Real Estate Development
                  </p>


                </div>
              </Col>
              {/* Right Section */}
              <Col md={4} className="text-end">
                <img
                  src="https://test-crm-pixxicrm.oss-me-east-1.aliyuncs.com/profile/upload/2024/09/11/7b9eb3a5-23f9-42c4-844b-7e849a3f3e71.jpg"
                  className="rounded-xl img-fluid"
                  alt="Profile"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    outline: "1px solid #ccc",
                    padding: "1px",
                    borderRadius: "10px"
                  }}
                />
              </Col>
            </Row>

            {/* Divider */}
            {/* <hr className="" /> */}

           
          </div >
        </CardBody>
      </Card>

    </Col>
  );
};


export default ViewTeam;

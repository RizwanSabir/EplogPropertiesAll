import React, { useMemo } from "react";
import TableContainer from "../../components/Common/TableContainer";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { customers } from "../../common/data/ecommerce";
import img2 from "../../assets/images/small/img-2.jpg";
import { NavLink } from 'react-router-dom';
const ViewPodcast = () => {

  const breadcrumbItems = [
    { title: "Blog", link: "/" },
    { title: "View Blog", link: "#" },
  ]

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="View Blog"
            breadcrumbItems={breadcrumbItems}
          />
          <Card>
            <CardBody>
              <Col xl={12}>

                <h1 className="text-2xl font-semibold  mb-2">
                  Contrast and Similarity in Graphic Design
                </h1>
                <div className="text-sm text-muted-foreground mb-4">
                   May 11, 2024
                </div>

                <p className="blog_info">
                  <i className="mdi mdi-comment-outline"></i> <a href="#comments">3 comments</a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="mdi mdi-tag-outline"></i> <a href="#!">responsive</a> <a href="#!">web</a> <a href="#!">mobile</a>
                </p>

                <Col xl={12}>
                  <Card>
                    <CardBody>


                      <div className="ratio ratio-16x9">
                        <iframe title="video4" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <div className="content">
                  <Row>
                    <Col xs={12} md={12}>







                      <div className="col-xl-12">
                        <section className="box ">

                          <div className="content-body">



                            <div className="blog_post full_blog_post">


                              <div className="blog-content">

                                <p>Graphic design is the art of visual communication through the use of images, words, and ideas to give information to the viewers. Graphic design can be used for advertising, or just for entertainment intended for the mind.</p>



                                <p>Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space). "Balance" is a concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance. A design composition does not have to be symmetrical or linear to be considered balanced, the balance is global to all elements even the absence of content. In this context perfectly symmetrical and linear compositions are not necessarily balanced and so asymmetrical or radial distributions of text and graphic elements can achieve balance in a composition.</p>

                                <p>Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships. For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways. Another way to describe contrast, is to say "a small object next to a large object will look smaller". As contrast in size diminishes, monotony is approached.</p>

                                <p>Making a specific element stand out or draw attention to the eye. Emphasis can be achieved in graphic design by placing elements on the page in positions where the eye is naturally drawn, by using other principles such as contrast, repetition, or movement. Bold and italic type provides emphasis for text. Graphic elements gain emphasis through size, visual weight, color, complexity, uniqueness, placement on the page, and other features.</p>

                              </div>

                              <div id="comments " className="mt-5">

                                <h3>Comments</h3>

                                <div className="card comment-block level-1 p-2 mt-3" style={{ display: 'inline-block' }}>
                                  <div className="row margin-0">
                                    <div className="col-lg-1 col-md-1 col-sm-2 col-3 img-area">
                                      <CardImg src={img2} alt="Nazox" className=" avatar-sm" />


                                    </div>
                                    <div className="col-lg-11 col-md-11 col-sm-10 col-9 text-area">
                                      <h6 className="author">By <a href="#!">Jason</a> on May 12, 2013.</h6>
                                      <div>
                                        <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>



                                <div className="card comment-block level-2 p-2" style={{ display: 'inline-block' }}>
                                  <div className="row margin-0">
                                    <div className="col-lg-1 col-md-1 col-sm-2 col-3 img-area">
                                      <CardImg src={img2} alt="Nazox" className=" avatar-sm" />

                                    </div>
                                    <div className="col-lg-11 col-md-11 col-sm-10 col-9 text-area">
                                      <h6 className="author">By <a href="#!">Jason</a> on May 12, 2013.</h6>
                                      <div>
                                        <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="card comment-block level-1 p-2" style={{ display: 'inline-block' }}>
                                  <div className="row margin-0">
                                    <div className="col-lg-1 col-md-1 col-sm-2 col-3 img-area">
                                      <CardImg src={img2} alt="Nazox" className=" avatar-sm" />

                                    </div>
                                    <div className="col-lg-11 col-md-11 col-sm-10 col-9 text-area">
                                      <h6 className="author">By <a href="#!">Jason</a> on May 12, 2013.</h6>
                                      <div>
                                        <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong in labore pig pork biltong.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>


                              <div className="clearfix"></div><br />
                              <h3>Leave a Comment</h3>
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
                                  <label className="form-label" htmlFor="inputComment">Comment</label>
                                  <div className="controls">
                                    <textarea className=" form-control" id="inputComment" rows="6"></textarea>
                                  </div>
                                </div>

                                <div className="form-group col-12 mt-4" style={{ 'marginBottom': '0px' }}>
                                  <div className="controls action">
                                    <button type="submit" className="btn btn-primary">Post Comment</button>
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

export default ViewPodcast;

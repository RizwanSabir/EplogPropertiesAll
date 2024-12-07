import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Input,
  TabPane,
  Table,
  Label,
  Form,
  FormGroup,
  InputGroup,
} from "reactstrap";
import classnames from "classnames";
// import { isEmpty } from "lodash";
// import EditorComponent from '../Ecommerce/EcommerceProducts/EditorComponent'; // Adjust the path to the file location
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Star Ratings
import StarRatings from "react-star-ratings";

//Import actions
import { getProductDetail } from "../../store/actions";

import Reviews from "../Ecommerce/EcommerceProducts/Reviews";
import { productsData } from "../../common/data";

import Select from "react-select";
import Dropzone from "react-dropzone";
// import FormUpload from "../Ecommerce/EcommerceProducts/FormUpload";
import { Editor } from "react-draft-wysiwyg";
import FormUpload from "./FormUpload";
import EditorComponent from "./EditorComponent";
const optionGroup = [
  {
    label: "Picnic",
    options: [
      { label: "Mustard", value: "Mustard" },
      { label: "Ketchup", value: "Ketchup" },
      { label: "Relish", value: "Relish" }
    ]
  },
  {
    label: "Camping",
    options: [
      { label: "Tent", value: "Tent" },
      { label: "Flashlight", value: "Flashlight" },
      { label: "Toilet Paper", value: "Toilet Paper" }
    ]
  }
];

class EditPodcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      activeDescriptionTab: "description",
      product: {},
      breadcrumbItems: [
        { title: "Podcast", link: "#" },
        { title: "Edit Podcast", link: "#" },



      ],

      selectedGroup: null,
      selectedMulti: null,
      selectedMulti1: null,
      selectedMulti2: null,
      selectedMulti3: null,
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.toggledescription = this.toggledescription.bind(this);
    this.imageShow = this.imageShow.bind(this);
  }

  componentDidMount() {
    const {
      // match: { params },
      match,
      onGetProductDetail,
    } = this.props;
    if (match && match.params && match.params.id) {
      onGetProductDetail(match.params.id);
    }
    // if (params && params.id) {
    //   onGetProductDetail(params.id);
    // }
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  toggledescription(tab) {
    if (this.state.activeDescriptionTab !== tab) {
      this.setState({
        activeDescriptionTab: tab,
      });
    }
  }

  imageShow(img, id) {
    const expandImg = document.getElementById("expandedImg" + id);
    expandImg.src = img;
  }
  //Select
  handleSelectGroup = selectedGroup => {
    this.setState({ selectedGroup });
  };
  handleMulti = selectedMulti => {
    this.setState({ selectedMulti });
  };
  handleMulti1 = selectedMulti1 => {
    this.setState({ selectedMulti1 });
  };

  render() {
    const { product } = this.props;
    const { selectedGroup } = this.state;
    const { selectedMulti } = this.state;
    const { selectedMulti1 } = this.state;


    

    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Edit Blog"
              breadcrumbItems={this.state.breadcrumbItems}
            />

            <Col xl="12">
              <Card>
                <CardBody>
                  <h4 className="card-title">Edit Podcast</h4>
                  <p className="card-title-desc">Edit the Content of the Podcast</p>
                  <form className="needs-validation" >
                    <Row>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="validationCustom01">Podcast title</Label>
                          <input
                            name="firstname"
                            placeholder="Podcast title"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </div>
                      </Col>
                    </Row>


                    <Row>
                      <Col lg="12">
                        <Card>
                          <CardBody>


                            <form>
                              <Row>
                                <Row>
                                  <Col md="6">
                                    <div className="mb-3">
                                      <Label className="form-label" htmlFor="validationCustom01"> Youtube link</Label>
                                      <input
                                        name="firstname"
                                        placeholder="Youtube Link"
                                        type="text"
                                        errorMessage="Enter First Name"
                                        className="form-control"
                                        validate={{ required: { value: true } }}
                                        id="validationCustom01"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Col lg="4">
                                  <div className="mb-3">
                                    <Label className="form-label"> Category</Label>
                                    <Select
                                      value={selectedGroup}
                                      onChange={this.handleSelectGroup}
                                      options={optionGroup}
                                      classNamePrefix="select2-selection"
                                    />

                                  </div>

                                </Col>

                                <Col lg="4">
                                  <div className="mb-3">
                                    <Label className="form-label"> Tags</Label>
                                    <Select
                                      value={selectedMulti}
                                      isMulti={true}
                                      onChange={this.handleMulti}
                                      options={optionGroup}
                                      classNamePrefix="select2-selection"
                                    />
                                  </div>
                                </Col>
                                <Col lg="4">
                                  <Form>
                                    <FormGroup className="mb-4">
                                      <Label>Date Created</Label>
                                      <InputGroup>
                                        <Flatpickr
                                          className="form-control d-block"
                                          placeholder="MM:DD::YYYY"
                                          options={{
                                            altInput: true,
                                            altFormat: "F j, Y",
                                            dateFormat: "Y-m-d"
                                          }}
                                        />
                                      </InputGroup>
                                    </FormGroup>



                                  </Form>
                                </Col>
                              </Row>
                            </form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <EditorComponent />
                    <FormUpload />




                    <Button color="primary" type="submit">Submit form</Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Container>

        </div>
      </React.Fragment>
    );
  }
};

EditPodcast.propTypes = {
  product: PropTypes.object,
  match: PropTypes.object,
  onGetP: PropTypes.func, // Assuming 'onGetP' should be a function, adjust if needed
};


const mapStateToProps = ({ Ecommerce }) => ({
  product: Ecommerce.product,
});

const mapDispatchToProps = (dispatch) => ({
  onGetProductDetail: (id) => dispatch(getProductDetail(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPodcast) ;

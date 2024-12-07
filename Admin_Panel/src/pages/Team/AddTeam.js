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
import FormUpload from "./FormUpload";
import { Editor } from "react-draft-wysiwyg";
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

class AddTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      activeDescriptionTab: "description",
      product: {},
      breadcrumbItems: [
        { title: "Podcast", link: "#" },
        { title: "Add Podcast", link: "#" },
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
              title="Add Member"
              breadcrumbItems={this.state.breadcrumbItems}
            />


            <Col xl="12">
              <Card>
                <CardBody>
                  <h4 className="card-title">New Member</h4>
                  <p className="card-title-desc">Add the new Member</p>
                  <form className="needs-validation" >
                    <Row>
                      <Col md="6">
                        <div className="mb-3">
                          <Label className="form-label" htmlFor="validationCustom01">User Name</Label>
                          <input
                            name="firstname"
                            placeholder="User Name"
                            type="text"
                            errorMessage="Enter First Name"
                            className="form-control"
                            validate={{ required: { value: true } }}
                            id="validationCustom01"
                          />
                        </div>
                      </Col>
                      <Col md="6">

                        <Label className="form-label" htmlFor="validationCustom01">Intoduction Video</Label>


                        <input type="file" className="form-control" id="customFile" />


                      </Col>

                    </Row>

                    <Row>
                      <Col lg="12">
                        <Card>
                          <CardBody>


                            <form>
                              <Row>
                                <Row>

                                </Row>
                                <Col lg="3">
                                  <div className="mb-3">
                                    <Label className="form-label"> Email ID</Label>
                                    <Input type="text" defaultValue="" placeholder="Email ID" id="example-text-input" />
                                  </div>

                                </Col>

                                <Col lg="3">
                                  <div className="mb-3">
                                    <Label className="form-label"> Instagram ID</Label>
                                    <Input type="text" defaultValue="" placeholder="Instagram ID" id="example-text-input" />

                                  </div>
                                </Col>
                                <Col lg="3">
                                  <div className="mb-3">
                                    <Label className="form-label"> Facebook ID</Label>
                                    <Input type="text" defaultValue="" placeholder="Facebook ID" id="example-text-input" />

                                  </div>
                                </Col>
                                <Col lg="3">
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
}

AddTeam.propTypes = {
  product: PropTypes.object,
  match: PropTypes.object,
  onGetProductDetail: PropTypes.func,
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
)(AddTeam);

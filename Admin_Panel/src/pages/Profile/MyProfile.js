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


import avatar4 from "../../assets/images/users/avatar-4.jpg";
//Import Star Ratings
import StarRatings from "react-star-ratings";



//Import actions
import { getProductDetail } from "../../store/actions";

import Reviews from "../Ecommerce/EcommerceProducts/Reviews";
import { productsData } from "../../common/data";

import Select from "react-select";
import Dropzone from "react-dropzone";

import { Editor } from "react-draft-wysiwyg";

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1",
            activeDescriptionTab: "description",
            product: {},
            breadcrumbItems: [
                { title: "Profile", link: "#" },
                { title: "My Profile", link: "#" },
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
                            title="Rizwan Sabir"
                            breadcrumbItems={this.state.breadcrumbItems}
                        />
                        <Col xl="12">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Basic Information</h4>
                                    <p className="card-title-desc">View your basic information</p>
                                    <form className="needs-validation" >
                                        <Row className="justify-content-between align-items-center mb-3">
                                            <Col md="6">
                                                <div className="mb-3">
                                                    <Label className="form-label" htmlFor="validationCustom01">
                                                        User Name
                                                    </Label>
                                                    <input
                                                        name="firstname"
                                                        placeholder="User Name"
                                                        type="text"
                                                        className="form-control"
                                                        id="validationCustom01"
                                                    />
                                                </div>
                                            </Col>
                                            <Col md="auto">
                                                <div className="mt-4 mt-md-0">
                                                    <img className="rounded-circle avatar-xl" alt="Nazox" src={avatar4} />
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

MyProfile.propTypes = {
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
)(MyProfile);

import React, { useState } from "react";
import {
    Row,
    Col,
    Card,
    CardBody,
    TabContent,
    TabPane,
    NavItem,
    NavLink,
    Label,
    Input,
    Form,
    Progress,
    Container,
    FormGroup,
    InputGroup,
    Button
} from "reactstrap";

import Switch from "react-switch";

import classnames from "classnames";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr"

const AddUser = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [activeTabProgress, setActiveTabProgress] = useState(1);
    const [progressValue, setProgressValue] = useState(25);
    const [switch3, setSwitch3] = useState(false);

    const breadcrumbItems = [
        { title: "Forms", link: "#" },
        { title: "Form Wizard", link: "#" },
    ];

    const toggleTabProgress = (tab) => {
        if (activeTabProgress !== tab && tab >= 1 && tab <= 4) {
            setActiveTabProgress(tab);

            const progressValues = {
                1: 25,
                2: 50,
                3: 100,
            };

            setProgressValue(progressValues[tab]);
        }

    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Add User" breadcrumbItems={breadcrumbItems} />

                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <h4 className="card-title mb-4">Add User</h4>

                                    <div id="progrss-wizard" className="twitter-bs-wizard">
                                        <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                                            {[
                                                { id: 1, title: "Basic Information" },
                                                { id: 2, title: "Roles" },
                                                { id: 3, title: "Confirm Detail" },
                                            ].map((step) => (
                                                <NavItem key={step.id}>
                                                    <NavLink
                                                        className={classnames({ active: activeTabProgress === step.id })}
                                                        onClick={() => toggleTabProgress(step.id)}
                                                    >
                                                        <span className="step-number">{`0${step.id}`}</span>
                                                        <span className="step-title">{step.title}</span>
                                                    </NavLink>
                                                </NavItem>
                                            ))}
                                        </ul>

                                        <div id="bar" className="mt-4">
                                            <Progress color="success" striped animated value={progressValue} />
                                        </div>

                                        <TabContent activeTab={activeTabProgress} className="twitter-bs-wizard-tab-content">
                                            <TabPane tabId={1}>
                                                <Form>
                                                    <Col xl="12">
                                                        <Card>
                                                            <CardBody>
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
                                                                            <Label className="form-label" htmlFor="validationCustom01">Profile Picture</Label>
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




                                                                </form>
                                                            </CardBody>
                                                        </Card>
                                                    </Col>
                                                </Form>
                                            </TabPane>
                                            <TabPane tabId={2}>
                                                <Form>
                                                    <Col xl="12">

                                                        <form className="needs-validation" >
                                                            <Row>
                                                                <Col md="6">
                                                                    <div className="mb-3">

                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <h4 className="card-title">Blogs</h4>

                                                                                <PermissionSwitch label="All Permission" />
                                                                                <PermissionSwitch label="Partial Permission" />
                                                                                <PermissionSwitch label="Create Blog" />
                                                                                <PermissionSwitch label="Edit Blog" />
                                                                                <PermissionSwitch label="Delete Blog" />

                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                </Col>


                                                                <Col md="6">
                                                                    <div className="mb-3">

                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <h4 className="card-title">Team</h4>

                                                                                <PermissionSwitch label="All Permission" />
                                                                                <PermissionSwitch label="Partial Permission" />
                                                                                <PermissionSwitch label="Create Team" />
                                                                                <PermissionSwitch label="Edit Team" />
                                                                                <PermissionSwitch label="Delete Team" />

                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                </Col>

                                                                <Col md="6">
                                                                    <div className="mb-3">

                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <h4 className="card-title">Podcast</h4>

                                                                                <PermissionSwitch label="All Permission" />
                                                                                <PermissionSwitch label="Partial Permission" />
                                                                                <PermissionSwitch label="Create Podcast" />
                                                                                <PermissionSwitch label="Edit Podcast" />
                                                                                <PermissionSwitch label="Delete Podcast" />

                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                </Col>

                                                                <Col md="6">
                                                                    <div className="mb-3">

                                                                        <div className="card">
                                                                            <div className="card-body">
                                                                                <h4 className="card-title">User</h4>

                                                                                <PermissionSwitch label="All Permission" />
                                                                                <PermissionSwitch label="Partial Permission" />
                                                                                <PermissionSwitch label="Create User" />
                                                                                <PermissionSwitch label="Edit User" />
                                                                                <PermissionSwitch label="Delete User" />

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </form>

                                                    </Col>
                                                </Form>
                                            </TabPane>

                                            <TabPane tabId={3}>
                                                <div className="row justify-content-center">
                                                    <Col lg="6">
                                                        <div className="text-center">
                                                            <div className="mb-4">
                                                                <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                                                            </div>
                                                            <div>
                                                                <h5>Confirm Detail</h5>
                                                                <p className="text-muted">
                                                                    If several languages coalesce, the grammar of the resulting
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                        <ul className="pager wizard twitter-bs-wizard-pager-link">
                                            <li className={activeTabProgress === 1 ? "previous disabled" : "previous"}>
                                                <Link to="#" onClick={() => toggleTabProgress(activeTabProgress - 1)}>Previous</Link>
                                            </li>
                                            <li className={activeTabProgress === 4 ? "next disabled" : "next"}>
                                                <Link to="#" onClick={() => toggleTabProgress(activeTabProgress + 1)}>Next</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};


const PermissionSwitch = ({ label, defaultState = false, onChange = "" }) => {
    const [switchState, setSwitchState] = useState(defaultState);

    const Offsymbol = () => (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 12,
                color: "#fff",
                paddingRight: 2
            }}
        >
            No
        </div>
    );

    function OnSymbol() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 12,
                    color: "#fff",
                    paddingRight: 2
                }}
            >
                {" "}
                Yes
            </div>
        );
    };
    const handleSwitchChange = () => {
        const newState = !switchState;
        setSwitchState(newState);
        if (onChange) onChange(newState); // Callback if provided
    };

    return (
        <Row className="my-3">
            <Col>
                <Label className="form-check-label card-title-desc me-3" htmlFor="defaultCheck1">
                    {label}
                </Label>
            </Col>
            <Col>
                <Switch
                    uncheckedIcon={<Offsymbol />}
                    checkedIcon={<OnSymbol />}
                    className="me-1 mb-sm-8"
                    onColor="#02a499"
                    onChange={handleSwitchChange}
                    checked={switchState}
                />
            </Col>
        </Row>
    );
};



export default AddUser;

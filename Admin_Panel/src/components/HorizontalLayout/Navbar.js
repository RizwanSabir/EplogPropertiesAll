import React, { Component } from "react";
import { Row, Col, Collapse, Container } from "reactstrap";
import { Link } from "react-router-dom";
import classname from "classnames";

//i18n
import { withTranslation } from "react-i18next";

import { connect } from 'react-redux';
import withRouter from "../Common/withRouter";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({});
        }
    }

    componentDidMount() {
        var matchingMenuItem = null;
        var ul = document.getElementById("navigation");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.router.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;
        if (parent) {
            parent.classList.add("active"); // li
            const parent2 = parent.parentElement;
            parent2.classList.add("active"); // li
            const parent3 = parent2.parentElement;
            if (parent3) {
                parent3.classList.add("active"); // li
                const parent4 = parent3.parentElement;
                if (parent4) {
                    parent4.classList.add("active"); // li
                    const parent5 = parent4.parentElement;
                    if (parent5) {
                        parent5.classList.add("active"); // li
                        const parent6 = parent5.parentElement;
                        if (parent6) {
                            parent6.classList.add("active"); // li
                        }
                    }
                }
            }
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div className="topnav">
                    <Container fluid>
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">

                            <Collapse isOpen={this.props.menuOpen} className="navbar-collapse" id="topnav-menu-content">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            <i className="ri-dashboard-line me-2"></i> {this.props.t('Dashboard')}
                                        </Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link onClick={e => { e.preventDefault(); this.setState({ uiState: !this.state.uiState }); }} className="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-uielement" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className=" fas fa-blog me-2"></i>{this.props.t('Blogs')} <div className="arrow-down"></div>
                                        </Link>

                                        <div className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl", { show: this.state.uiState })}
                                            aria-labelledby="topnav-uielement">
                                            <Row>
                                                <Col lg={4}>
                                                    <div>

                                                        <Link to="/blogs" className="dropdown-item">{this.props.t('All Blogs')}</Link>
                                                        <Link to="/addBlog" className="dropdown-item">{this.props.t('Add Blog')}</Link>

                                                    </div>
                                                </Col>

                                            </Row>

                                        </div>
                                    </li>

                                   

                                  

                                </ul>
                            </Collapse>
                        </nav>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { leftSideBarType, leftSideBarTheme } = state.Layout;
    return { leftSideBarType, leftSideBarTheme };
}

export default withRouter(connect(mapStatetoProps, {})(withTranslation()(Navbar)));

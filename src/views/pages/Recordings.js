/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

// nodejs library that concatenates classes
import classnames from "classnames";
// JavaScript library that creates a callendar with events
import { Recordings } from "@fullcalendar/core";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import CardsHeader from "components/Headers/CardsHeader.js";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Media,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import { events } from "variables/general.js";

const linkStyle = {
  color: "#000",
  textDecoration: "underline",
  ":hover": {
    textDecoration: "none",
  },
};

class RecordingsView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    return (
      <Container className="mt--0" fluid>
        <h1 className="main-page-title">Recordings</h1>
        <Row>
          <Col xl="12">
            <Row>
              <div className="col">
                <Card>
                  <CardHeader className="border-0">
                    <h3 className="mb-0 text-uppercase">Recordings</h3>
                  </CardHeader>
                  <Table
                    className="align-items-center table-flush custom-tabel"
                    responsive
                  >
                    <thead className="thead-light">
                      <tr>
                        <th className="sort" data-sort="name" scope="col">
                          Title
                        </th>
                        <th className="sort" data-sort="budget" scope="col">
                          Date
                        </th>
                        <th className="sort" data-sort="status" scope="col">
                          Duration
                        </th>
                        <th className="sort" data-sort="completion" scope="col">
                          Keywords
                        </th>
                        <th scope="col">PARTICIPANTS</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody className="list">
                      <tr>
                        <th scope="row">
                          <span className="tb-title">
                            <Link to="recording" style={linkStyle}>
                              JavaScript Fundamentals
                            </Link>
                          </span>
                        </th>
                        <td>
                          <span className="tb-title">04/05/2020</span>
                        </td>

                        <td>
                          <span className="tb-title">2:30</span>
                        </td>
                        <td>
                          <span className="tb-title">Null</span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip792717700"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip792717700"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip654289872"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip654289872"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip409131762"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip409131762"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip50788433"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip50788433"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                            <span className="avatar avatar-sm rounded-circle total-avatar">
                              4+
                            </span>
                          </div>
                        </td>
                        <td className="text-right">
                          <i className="ni ni-ui-04 text-muted text-light"></i>{" "}
                          &nbsp; &nbsp; &nbsp;
                          <i className="fas fa-bookmark text-info"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="tb-title">
                            <Link to="recording" style={linkStyle}>
                              Progressive Web App Training
                            </Link>
                          </span>
                        </th>
                        <td>
                          <span className="tb-title">05/01/2020</span>
                        </td>

                        <td>
                          <span className="tb-title">1:00</span>
                        </td>
                        <td>
                          <span className="tb-title">Null</span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip792717700"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip792717700"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip654289872"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip654289872"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip409131762"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip409131762"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip50788433"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip50788433"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                            <span className="avatar avatar-sm rounded-circle total-avatar">
                              4+
                            </span>
                          </div>
                        </td>
                        <td className="text-right">
                          <i className="ni ni-ui-04 text-muted text-light"></i>{" "}
                          &nbsp; &nbsp; &nbsp;
                          <i className="fas fa-bookmark text-light"></i>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="tb-title">
                            <Link to="recording" style={linkStyle}>
                              Office Meeting
                            </Link>
                          </span>
                        </th>
                        <td>
                          <span className="tb-title">04/10/2019</span>
                        </td>

                        <td>
                          <span className="tb-title">1:10</span>
                        </td>
                        <td>
                          <span className="tb-title">Null</span>
                        </td>
                        <td>
                          <div className="avatar-group">
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip792717700"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip792717700"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip654289872"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-2.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip654289872"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip409131762"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-3.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip409131762"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-sm rounded-circle"
                              href="#pablo"
                              id="tooltip50788433"
                              onClick={(e) => e.preventDefault()}
                            >
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-4.jpg")}
                              />
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip50788433"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                            <span className="avatar avatar-sm rounded-circle total-avatar">
                              4+
                            </span>
                          </div>
                        </td>
                        <td className="text-right">
                          <i className="ni ni-ui-04 text-muted text-light"></i>{" "}
                          &nbsp; &nbsp; &nbsp;
                          <i className="fas fa-bookmark text-light"></i>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecordingsView;

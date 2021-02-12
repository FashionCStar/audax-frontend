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
import React from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import classnames from "classnames";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
// reactstrap components
// core components
import CardsHeader from "components/Headers/CardsHeader.js";

import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
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
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";


import {
  chartOptions,
  parseOptions,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7
} from "variables/charts.js";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        
        <Container className="mt--0" fluid>
        <h1 className="main-page-title">Candidates</h1>
        <Row>
            <Col xl="12">
              <Row>
                <div className="col">
                 
                <Card>
                    <CardHeader className="border-0">
                      <h3 className="mb-0 text-uppercase">potential candidates</h3>
                    </CardHeader>
                    <Table
                      className="align-items-center table-flush custom-tabel potential-condidtes-table"
                      responsive
                    >
                      <thead className="thead-light">
                        <tr>
                          <th className="sort" data-sort="name" scope="col">
                            Name
                          </th>
                          <th className="sort" data-sort="budget" scope="col">
                            Job Title
                          </th>
                          <th className="sort" data-sort="status" scope="col">
                            Location
                          </th>
                          <th
                            className="sort"
                            data-sort="completion"
                            scope="col"
                          >
                            Phone
                          </th>
                          <th scope="col">Email</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody className="list">
                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="avatar-group">
                            <img className="avatar avatar-sm rounded-circle"
                                  alt="..."
                                  src={require("assets/img/theme/team-1.jpg")}
                                /> <span className="tb-title">Ryan Tompson</span> 
                            </div>
                          </td>
                          <td>
                            <span className="tb-title">
                              Developer
                            </span>
                          </td>
                          <td>
                            <span className="tb-title">
                              Vancouver
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">+1(123) 555 2356</span>
                          </td>
                          <td>
                            <span className="tb-title">nathanie.jordan@gmail.com</span>
                          </td>
                          <td className="text-right">
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-center mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
                  </Card>   

                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Charts;

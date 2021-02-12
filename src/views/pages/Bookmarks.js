import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
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

// core components
import CardsHeader from "components/Headers/CardsHeader.js";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  chartExample3,
} from "variables/charts.js";

class Bookmarks extends React.Component {
    
    render(){
        return(
            <Container className="mt--0" fluid>
                <h1 className="main-page-title">Bookmarks</h1>
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
                          <th
                            className="sort"
                            data-sort="completion"
                            scope="col"
                          >
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
                              Zoom Meeting 01
                            </span>
                          </th>
                          <td>
                            <span className="tb-title">
                              11/12/2020
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">3:40</span>
                          </td>
                          <td>
                            <span className="tb-title">201</span>
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
                              <span
                                className="avatar avatar-sm rounded-circle total-avatar"
                              >3+</span>
                            </div>
                          </td>
                          <td className="text-right">
                          <i className="ni ni-ui-04 text-muted text-light"></i> &nbsp; &nbsp; &nbsp;
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">
                            <span className="tb-title">
                              Zoom Meeting 01
                            </span>
                          </th>
                          <td>
                            <span className="tb-title">
                              11/12/2020
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">3:40</span>
                          </td>
                          <td>
                            <span className="tb-title">201</span>
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
                              <span
                                className="avatar avatar-sm rounded-circle total-avatar"
                              >2+</span>
                            </div>
                          </td>
                          <td className="text-right">
                          <i className="ni ni-ui-04 text-muted text-light"></i> &nbsp; &nbsp; &nbsp;
                            <i className="fas fa-bookmark text-light"></i>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">
                            <span className="tb-title">
                              Zoom Meeting 01
                            </span>
                          </th>
                          <td>
                            <span className="tb-title">
                              11/12/2020
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">3:40</span>
                          </td>
                          <td>
                            <span className="tb-title">201</span>
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
                              <span
                                className="avatar avatar-sm rounded-circle total-avatar"
                              >5+</span>
                            </div>
                          </td>
                          <td className="text-right">
                          <i className="ni ni-ui-04 text-muted text-light"></i> &nbsp; &nbsp; &nbsp;
                            <i className="fas fa-bookmark text-light"></i>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">
                            <span className="tb-title">
                              Zoom Meeting 01
                            </span>
                          </th>
                          <td>
                           <span className="tb-title">
                              11/12/2020
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">3:40</span>
                          </td>
                          <td>
                            <span className="tb-title">201</span>
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
                              <span
                                className="avatar avatar-sm rounded-circle total-avatar"
                              >3+</span>
                            </div>
                          </td>
                          <td className="text-right">
                          <i className="ni ni-ui-04 text-muted text-light"></i> &nbsp; &nbsp; &nbsp;
                            <i className="fas fa-bookmark text-light"></i>
                          </td>
                        </tr>

                        <tr>
                          <th scope="row">
                            <span className="tb-title">
                              Zoom Meeting 01
                            </span>
                          </th>
                          <td>
                            <span className="tb-title">
                              11/12/2020
                            </span>
                          </td>

                          <td>
                            <span className="tb-title">3:40</span>
                          </td>
                          <td>
                            <span className="tb-title">201</span>
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
                              <span
                                className="avatar avatar-sm rounded-circle total-avatar"
                              >3+</span>
                            </div>
                          </td>
                          <td className="text-right">
                          <i className="ni ni-ui-04 text-muted text-light"></i> &nbsp; &nbsp; &nbsp;
                            <i className="fas fa-bookmark text-info"></i>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>   

                </div>
              </Row>
            </Col>
          </Row>

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
                      </tbody>
                    </Table>
                  </Card>   

                </div>
              </Row>
            </Col>
          </Row>
            </Container>
          
        )
    }
}

export default Bookmarks;
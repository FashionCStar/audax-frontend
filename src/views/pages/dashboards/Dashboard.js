import React from "react";
import classnames from "classnames";
import Chart from "chart.js";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
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

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      user: {},
      meetings: {
        meetings: [],
      },
      users: null,
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  componentDidMount() {
    fetch("http://audax.s3-website.eu-west-2.amazonaws.com/me")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        //console.warn(res);
        this.setState({ user: res });
        fetch("http://audax.s3-website.eu-west-2.amazonaws.com/meetings/" + res.id)
          .then((res) => {
            return res.json();
          })
          .then((res2) => {
            console.warn(res2);
            this.setState({ meetings: res2 });
          });
      });
    fetch("https://reqres.in/api/users").then((resp) => {
      resp.json().then((result) => {
        console.warn(result);
        this.setState({ users: result.data });
      });
    });
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1",
    });
  };
  render() {
    return (
      <>
        <CardsHeader name="Default" parentName="Dashboards" />
        <Container className="mt--6" fluid>
          <Row>
            <Col xl="12">
              {JSON.stringify(this.state.user)}
              <hr></hr>
              {JSON.stringify(this.state.meetings)}
              {console.log(this.state.user)}
              {console.log(this.state.meetings)}
              <h1>
                Full Name: {this.state.user.first_name}{" "}
                {this.state.user.last_name}
              </h1>
              <h1>Email: {this.state.user.email}</h1>

              {/* <hr></hr>
<h1>All Meeting List</h1>

<a href={this.state.user.personal_meeting_url} className="btn btn-success" target="_blank">Personal Meeting</a>
{JSON.stringify(this.state.meetings)} */}

              {/* <h1>{this.state.meetings}</h1> */}
              {/* 
{JSON.stringify(this.state.meetings)}
{console.log(this.state.meetings)}
{console.log(this.state.users)} */}

              <br></br>
              <br></br>

              <Row>
                <div className="col">
                  <Card>
                    <CardHeader className="border-0">
                      <h3 className="mb-0 text-uppercase">All Meetings</h3>
                    </CardHeader>
                    <Table
                      className="align-items-center table-flush custom-tabel"
                      responsive
                    >
                      <thead className="thead-light">
                        <tr>
                          <th className="sort" data-sort="name" scope="col">
                            Topic
                          </th>
                          <th className="sort" data-sort="budget" scope="col">
                            Start Time
                          </th>
                          <th className="sort" data-sort="status" scope="col">
                            Duration
                          </th>
                          <th
                            className="sort"
                            data-sort="completion"
                            scope="col"
                          >
                            Timezone
                          </th>

                          <th scope="col">Created at</th>
                          <th scope="col">Meeting Url</th>
                        </tr>
                      </thead>
                      <tbody className="list">
                        {this.state.meetings.meetings
                          ? this.state.meetings.meetings.map((item, i) => (
                              <tr>
                                <td>{item.topic}</td>
                                <td>{item.start_time}</td>
                                <td>{item.duration}</td>
                                <td>{item.timezone}</td>
                                <td>{item.created_at}</td>
                                <td>
                                  <a
                                    href={item.join_url}
                                    className="btn btn-primary btn-sm"
                                  >
                                    Start Meeting
                                  </a>
                                </td>
                              </tr>
                            ))
                          : null}
                      </tbody>
                    </Table>
                  </Card>
                </div>
              </Row>

              <Card className="main-charts">
                <CardHeader>
                  <Row className="align-items-center">
                    <div className="col">
                      <h5 className="h3 mb-0 text-uppercase">
                        Monthly Recordings
                      </h5>
                      <h6 className="text-light text-uppercase ls-1 mb-1 mt-3 recording-title">
                        <span className="text-round-circle">● </span>Recordings
                      </h6>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem className="mr-2 mr-md-0">
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1,
                            })}
                            href="#pablo"
                            onClick={(e) => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Month</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2,
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={(e) => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Week</span>
                            <span className="d-md-none">W</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      id="chart-sales-dark"
                      className="chart-canvas"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row></Row>
          <Row>
            <Col xl="12">
              <Row>
                <div className="col">
                  <Card>
                    <CardHeader className="border-0">
                      <h3 className="mb-0 text-uppercase">Future Recordings</h3>
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
                            Time Zone
                          </th>
                          <th scope="col">CREATED AT</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody className="list">


                      {this.state.meetings.meetings
                          ? this.state.meetings.meetings.map((item, i) => (
                              <tr>
                                <td><span className="tb-title">{item.topic}</span></td>
                                <td><span className="tb-title">{item.start_time}</span></td>
                                <td><span className="tb-title">{item.duration}</span></td>
                                <td><span className="tb-title">{item.timezone}</span></td>
                                <td><span className="tb-title">{item.created_at}</span></td>
                                <td>
                                  <a
                                    href={item.join_url}
                                    className="btn btn-primary btn-sm"
                                  >
                                    Start Meeting
                                  </a>
                                </td>
                              </tr>
                            ))
                          : null}                          
                        <tr>
                          <th scope="row">
                            <span className="tb-title">Zoom Meeting 01</span>
                          </th>
                          <td>
                            <span className="tb-title">11/12/2020</span>
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
                              <span className="avatar avatar-sm rounded-circle total-avatar">
                                3+
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
                            <span className="tb-title">Zoom Meeting 01</span>
                          </th>
                          <td>
                            <span className="tb-title">11/12/2020</span>
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
                              <span className="avatar avatar-sm rounded-circle total-avatar">
                                2+
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
                            <span className="tb-title">Zoom Meeting 01</span>
                          </th>
                          <td>
                            <span className="tb-title">11/12/2020</span>
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
                              <span className="avatar avatar-sm rounded-circle total-avatar">
                                5+
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
                            <span className="tb-title">Zoom Meeting 01</span>
                          </th>
                          <td>
                            <span className="tb-title">11/12/2020</span>
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
                              <span className="avatar avatar-sm rounded-circle total-avatar">
                                3+
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
                            <span className="tb-title">Zoom Meeting 01</span>
                          </th>
                          <td>
                            <span className="tb-title">11/12/2020</span>
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
                              <span className="avatar avatar-sm rounded-circle total-avatar">
                                3+
                              </span>
                            </div>
                          </td>
                          <td className="text-right">
                            <i className="ni ni-ui-04 text-muted text-light"></i>{" "}
                            &nbsp; &nbsp; &nbsp;
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
      </>
    );
  }
}

export default Dashboard;

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
import React, { useState } from 'react';
// nodejs library that concatenates classes
import classnames from "classnames";
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
import CardsHeader from "components/Headers/CardsHeader.js";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Modal,
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Nav, 
  NavItem, 
  NavLink, 
  TabContent, 
  TabPane,
  CardFooter
} from "reactstrap";
// core components

import { events } from "variables/general.js";


class CalendarView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }
  render() {
    return (
      <>
        <Container className="mt-0" fluid>
        <h1 className="main-page-title">Recordings</h1>
        </Container>
        <Container className="mt-0" fluid>
          <h2 className="BigTitle">Zoom Meeting 01</h2>
        <Row>
                <Col md="6" xl="3">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase mb-0"
                          >
                            Date
                          </CardTitle>
                          <span className="h2 font-weight-bold zoom-meeting-top-title">
                            11/12/2020
                          </span>
                        </div>
                    
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="64" xl="3">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase mb-0"
                          >
                            duration
                          </CardTitle>
                          <span className="h2 font-weight-bold zoom-meeting-top-title">
                            3:40
                          </span>
                        </div>
                        
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" xl="3">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase mb-0"
                          >
                            Sentiment
                          </CardTitle>
                          <span className="h2 font-weight-bold zoom-meeting-top-title green-title-main">0.5</span>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" xl="3">
                  
                </Col>
              </Row>
              <Row className="all-participant-outer-row">
              <Col md="12" xl="12">
                <div className="participants-row">
                <div className="participatnt-column">
                  <strong>PARTICIPANTS</strong>
                </div>
                <div className="participatnt-column">
                  <div className="avatar-group">
                    <img className="avatar avatar-md rounded-circle"
                          alt="..."
                          src={require("assets/img/theme/team-1.jpg")}
                        /> <span className="tb-title">Ryan Tompson</span> 
                  </div>
                </div>
                <div className="participatnt-column">
                  <div className="avatar-group">
                    <img className="avatar avatar-md rounded-circle"
                          alt="..."
                          src={require("assets/img/theme/team-2.jpg")}
                        /> <span className="tb-title">Vicky Brown</span> 
                  </div>
                </div>
                <div className="participatnt-column">
                  <div className="avatar-group">
                    <img className="avatar avatar-md rounded-circle"
                          alt="..."
                          src={require("assets/img/theme/team-3.jpg")}
                        /> <span className="tb-title">Kevin Miller</span> 
                  </div>
                </div>
                <div className="participatnt-column">
                  <div className="avatar-group">
                    <img className="avatar avatar-md rounded-circle"
                          alt="..."
                          src={require("assets/img/theme/team-4.jpg")}
                        /> <span className="tb-title">Mike Abreu</span> 
                  </div>
                </div>
                <div className="participatnt-column">
                  <div className="avatar-group">
                    <img className="avatar avatar-md rounded-circle"
                          alt="..."
                          src={require("assets/img/theme/team-5.jpg")}
                        /> <span className="tb-title">John Adams</span> 
                  </div>
                </div>
                <div className="participatnt-column">
                  <div className="avatar-group">
                    <img className="avatar avatar-md rounded-circle"
                          alt="..."
                          src={require("assets/img/theme/team-1.jpg")}
                        /> <span className="tb-title">Carlos Arias</span> 
                  </div>
                </div>
                </div>
                </Col>
              </Row>
              <Row>
                <Col md="9" xl="9">
                <Nav tabs className="left-custom-tabs">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              Transcript
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              Media File
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            { this.state.activeTab == 1 ? 
            

            <div className="tab-inner-content">
              <Row className="transcript_row">
                <Col xl="2">
                  <div className="transcript-left-col">
                  <div className="avatar-group">
                    <img className="avatar avatar-sm rounded-circle"
                          alt="..."
                          src={require("assets/img/theme/team-1.jpg")}
                        /> <span className="transcript-user-title">Ryan Tompson</span> 
                  </div>
                  <span className="transcript-time">Time: <strong>00:05 -00:37</strong></span>
                  <span className="sentiment-title">Sentiment</span>
                  <ul className="sentiment-progress-bar">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li><span>0.5</span></li>
                  </ul>
                  </div>
                
                </Col>
                <Col xl="10">
                  <p className="color-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <span className="badge-warning"> when an unknown printer took a galley of type and scrambled it</span> to make a type specimen book. It has survived not only five centuries, <span className="badge-success">but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</span> containing Lorem Ipsum passages, and more recently with desktop publishing software <span className="badge-primary">like Aldus PageMaker including</span> versions of Lorem Ipsum.</p>
                </Col>
              </Row>

              <Row className="transcript_row">
                <Col xl="2">
                  <div className="transcript-left-col">
                  <div className="avatar-group">
                    <img className="avatar avatar-sm rounded-circle"
                          alt="..."
                          src={require("assets/img/theme/team-2.jpg")}
                        /> <span className="transcript-user-title">Ryan Tompson</span> 
                  </div>
                  <span className="transcript-time">Time: <strong>00:05 -00:37</strong></span>
                  <span className="sentiment-title">Sentiment</span>
                  <ul className="sentiment-progress-bar">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li><span>0.5</span></li>
                  </ul>
                  </div>
                
                </Col>
                <Col xl="10">
                  <p className="color-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <span className="badge-warning"> when an unknown printer took a galley of type and scrambled it</span> to make a type specimen book. It has survived not only five centuries, <span className="badge-success">but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</span> containing Lorem Ipsum passages, and more recently with desktop publishing software <span className="badge-primary">like Aldus PageMaker including</span> versions of Lorem Ipsum.</p>
                </Col>
              </Row>

              <Row className="transcript_row">
                <Col xl="2">
                  <div className="transcript-left-col">
                  <div className="avatar-group">
                    <img className="avatar avatar-sm rounded-circle"
                          alt="..."
                          src={require("assets/img/theme/team-3.jpg")}
                        /> <span className="transcript-user-title">Ryan Tompson</span> 
                  </div>
                  <span className="transcript-time">Time: <strong>00:05 -00:37</strong></span>
                  <span className="sentiment-title">Sentiment</span>
                  <ul className="sentiment-progress-bar">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li><span>0.5</span></li>
                  </ul>
                  </div>
                
                </Col>
                <Col xl="10">
                  <p className="color-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <span className="badge-warning"> when an unknown printer took a galley of type and scrambled it</span> to make a type specimen book. It has survived not only five centuries, <span className="badge-success">but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</span> containing Lorem Ipsum passages, and more recently with desktop publishing software <span className="badge-primary">like Aldus PageMaker including</span> versions of Lorem Ipsum.</p>
                </Col>
              </Row>
            </div>



            : null }
          </TabPane>
          <TabPane tabId="2">
            { this.state.activeTab == 2 ? 
            

<div className="tab-inner-content">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/jbPpdyn16sY"  allowfullscreen></iframe>
              </div>
              <span>CAPTIONS</span>
              <h4>Anna Lee</h4> 
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>


            
            : null }
          </TabPane>
        </TabContent>
                </Col>
                <Col md="3" xl="3">
                  <div className="custom-sidebar">
                    <div className="custom-sidebra-header">
                      <ul>
                        <li className="li-active">All</li>
                        <li>Comments</li>
                        <li>Highlight</li>
                      </ul>
                      <div className="custom-card">
                       <div className="custom-card-body">
                       <i className="fas fa-ellipsis-v"></i>
                          <span>Anna Lee</span>
                          <p>Lorem Ipsum is simply dummy text of the printing ..</p>
                       </div>
                        <span className="custom-card-footer">Highlighted - 6:30PM Nov 11</span>
                      </div>
                      <div className="custom-card">
                       <div className="custom-card-body">
                       <i className="fas fa-ellipsis-v"></i>
                          <span>Anna Lee</span>
                          <p>Lorem Ipsum is simply dummy text of the printing ..</p>
                       </div>
                        <span className="custom-card-footer">Highlighted - 6:30PM Nov 11</span>
                      </div>
                      <div className="custom-card highlight-card">
                       <div className="custom-card-body">
                       <i className="fas fa-ellipsis-v"></i>
                          <span>Anna Lee</span>
                          <p>Lorem Ipsum is simply dummy text of the printing ..</p>
                       </div>
                        <span className="custom-card-footer">Commented - 6:30PM Nov 11</span>
                      </div>
                      <div className="custom-card highlight-card">
                       <div className="custom-card-body">
                       <i className="fas fa-ellipsis-v"></i>
                          <span>Anna Lee</span>
                          <p>Lorem Ipsum is simply dummy text of the printing ..</p>
                       </div>
                        <span className="custom-card-footer">Commented - 6:30PM Nov 11</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
        </Container>
      </>
    );
  }
}

export default CalendarView;


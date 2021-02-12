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
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class CardsHeader extends React.Component {
  render() {
    return (
      <>
        <div className="header pb-6">
          <Container fluid>
            <div className="header-body">
              
            
                  <h1 className="main-page-title">Dashboard</h1>
                  {/* <h6 className="h2 d-inline-block mb-0">
                    {this.props.name}
                  </h6>{" "} */}
          
            

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
                            # OFF RECORDINGS
                          </CardTitle>
                          <span className="h2 font-weight-bold information-title">
                            9,235
                          </span>
                        </div>
                    
                      </Row>
                      <p className="mb-0 text-sm">
                        <span className="text-success mr-2 triangle">
                        <i className="fas fa-sort-down text-success"></i> 
                        </span>{" "}
                        <span className="text-nowrap">12% Since last month</span>
                      </p>
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
                            # OFF CANDIDATES
                          </CardTitle>
                          <span className="h2 font-weight-bold information-title">
                            4,741
                          </span>
                        </div>
                        
                      </Row>
                      <p className="mb-0 text-sm">
                        <span className="text-success mr-2 triangle">
                        <i className="fas fa-sort-up text-danger sm-icon"></i> 
                        </span>{" "}
                        <span className="text-nowrap">3.48% Since last month</span>
                      </p>
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
                            avg. recording duration
                          </CardTitle>
                          <span className="h2 font-weight-bold information-title">00:04:50</span>
                        </div>
                      </Row>
                      <p className="mb-0 text-sm">
                        <span className="text-success mr-2 triangle">
                        <i className="fas fa-sort-down text-success"></i> 
                        </span>{" "}
                        <span className="text-nowrap">12% Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" xl="3">
                  <Card className="card-stats total-record-duration">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase mb-0"
                          >
                            Total. recording duration
                          </CardTitle>
                          <span className="h2 font-weight-bold information-title">
                            3:45:10
                          </span>
                        </div>
                      </Row>
                      <p className="mb-0 text-sm">
                        <span className="text-success mr-2 triangle">
                        <i className="fas fa-sort-up text-white sm-icon"></i> 
                        </span>{" "}
                        <span className="text-nowrap">12% Since last month</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

CardsHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string
};

export default CardsHeader;

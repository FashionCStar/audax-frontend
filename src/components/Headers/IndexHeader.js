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
// react library for routing
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

class IndexHeader extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-info pt-5 pb-7">
          <Container>
            <div className="header-body">
              <Row className="align-items-center">
                <Col lg="12">
                  <div className="pr-5">
                    <h1 className="display-2 text-white font-weight-bold mb-0">
                      Welcome To Audex
                    </h1>
                  
                    <p className="text-white mt-4">
                    Audax analyzes the conversation between interviewers and potential candidates to help recruiting teams learn more about candidates before making a hire. Teams that use Audax spend less time qualifying candidates and more time finding the right fit for their organization.
                    </p>
                    <p className="text-white mt-4">
                    With 10,000+ hours of audio/video recording processed to date, our partners leverage Audax to:
                    </p>  
  <ul className="text-white mt-4">
	<li>Analyze the candidates interest in your role/company with proprietary analytics</li>
	<li>Quickly review questions and answers by candidate, role, and interviewer</li>
	<li>Evaluate key characteristics like candor, enthusiasm, confidence, and leadership qualities of the candidate</li>
	<li>Research obscure references, acronyms, and technical jargon quickly and easily</li>
	<li>Collaborate with your internal teams to watch/listen to the interview and read transcripts</li>
	<li>Annotate and share notes/comments at specific times in the audio/video recording</li>
</ul>                
                    <p className="text-white mt-4">Get started today with our pay-as-you-go pricing.</p>                
                    <div className="mt-2">
                      <Button
                        className="btn-neutral my-2"
                        color="default"
                        to="/auth/register"
                        tag={Link}
                      >
                        Register
                      </Button>
                      <Button
                        className="btn-lgmy-2"
                        color="default"
                        to="/auth/login"
                        tag={Link}
                      >
                       Login
                      </Button>
                    </div>
                  </div>
                </Col>
          
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
      </>
    );
  }
}

export default IndexHeader;

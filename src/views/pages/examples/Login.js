import React, {useState, useEffect, useRef} from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from 'react-redux'
import { signin, clearSigninError } from '../../../store/users/actions';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import AuthHeader from "components/Headers/AuthHeader.js";
import NotificationSystem from 'react-notification-system';

function Login({ history }) {
  const [email, setEmail] = useState('toptaldev123@gmail.com');
  const [password, setPassword] = useState('comet123');
  const dispatch = useDispatch();
  const notificationSystem  = useRef(null);

  const token = useSelector((state) => state.users.token);
  const signinError = useSelector((state) => state.users.signinError);

  useEffect(() => {
    if (signinError != '') {
      const notification = notificationSystem.current;
      
      notification.addNotification({
        title: 'Signin Error',
        message: signinError,
        level: 'error',
      });

      setEmail('');
      setPassword('');

      dispatch(clearSigninError());

      return;
    }
  }, [signinError])

  if (token) history.push('/admin')

  const handleSubmit = e => {
    e.preventDefault();

    const reg = /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(email)) {
      const notification = notificationSystem.current;
      notification.addNotification({
        title: 'Form Error',
        message: 'Input correct email!',
        level: 'error',
      });
      return;
    }

    if(!password) {
      const notification = notificationSystem.current;
      notification.addNotification({
        title: 'Form Error',
        message: 'Password is required',
        level: 'error',
      });
      return;
    }

    dispatch(signin({email, password}));
  }

  return (
    <>
      <AuthHeader
        title=""
      />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-secondary border-0 mb-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <h1>Login</h1>
                </div>
                <Form role="form">
                  <FormGroup
                    className={classnames("mb-3")}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        value={email}
                        placeholder="Email"
                        type="email"
                        required
                        onChange={e => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        value={password}
                        placeholder="Password"
                        type="password"
                        required
                        onChange={e => setPassword(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="text-center">
                    <Button className="my-4" color="info" type="button" onClick={e => handleSubmit(e)}>
                      Sign in
                      </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="12">
                <a
                  className="text-light"
                  href="register"
                  to="/auth/register"

                >
                  <small>Create new account</small>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <NotificationSystem ref={notificationSystem} />
    </>
  );
}

export default Login;


import React, { useState, useEffect, useRef} from "react";
import classnames from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { register, clearSigninError } from '../../../store/users/actions';
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
// core components
import AuthHeader from "components/Headers/AuthHeader.js";
import NotificationSystem from 'react-notification-system';

function Register({ history }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const notificationSystem  = useRef(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.users.token);
  const signinError = useSelector((state) => state.users.signinError);

  useEffect(() => {
    if (signinError != '') {
      const notification = notificationSystem.current;
      
      notification.addNotification({
        title: 'Register Error',
        message: signinError,
        level: 'error',
      });

      setEmail('');
      setPassword('');

      dispatch(clearSigninError());

      return;
    }
  }, [signinError])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name) {
      const notification = notificationSystem.current;

      notification.addNotification({
        title: 'Form Error',
        message: 'Name is required!',
        level: 'error',
      });
      return;
    }
    
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


    dispatch(register(
      {
        name,
        email,
        password
      }
    ))
  }

  if (token) {
    history.push('/admin')
  }
  return (
    <>
      <AuthHeader
        title="Welcome to Audex" />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary border-0">

              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <h1>Register</h1>
                </div>
                <Form role="form" onSubmit={event => this.handleSubmit(event)}>
                  <FormGroup>
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText >
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Name"
                        type="text"
                        name="username"
                        value={name}
                        onChange={e => setName(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup

                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input

                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup

                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="text-center">
                    <Button className="mt-4" color="info" type="submit" onClick={e => handleSubmit(e)}>
                      Create account
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <NotificationSystem ref={notificationSystem} />
    </>
  );
}

export default Register;

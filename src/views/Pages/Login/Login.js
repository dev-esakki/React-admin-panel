import React, { Component } from 'react';
import { Alert, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormText } from 'reactstrap';
import * as AuthenticateAPI from '../../../services/AuthenticationAPI';

//import useForm from 'react-hook-form'




export class Login extends Component  {
  //const {register, handleSubmit, errors, watch} = useForm()
  //const watchYes = watch("yes", false);

    constructor(props) {
      super(props)
    
      this.state = {
        fields : {},
        errors : {},
        visible: false,
        MsgContent : '',
        Batch : ''
      }
    }

    onDismiss = () => {
      this.setState({ visible: false });
    }

    handleChange = (e) => {       
      let fields = this.state.fields;        
      fields[e.target.name] = e.target.value;        
      this.setState({
          fields
      })      
    }
    

    onSubmit = () => { 
      if (this.validateForm()) {
       /*  AuthenticateAPI.postData('/login',this.state.fields).then((res)=>{ 
          console.log("res",res)   
          if(res.status === 200) {
            this.setState({
              visible: true,
              MsgContent : res.Msg,
              Batch : 'success'
            })
            localStorage.setItem("Token", "1");
            this.props.history.push('/dashboard')
          } else {
            this.setState({
              visible: true,
              MsgContent : res.Msg,
              Batch : 'danger'              
            })
          }

        })  */
        this.props.history.push('/dashboard')
      }
    }

    validateForm() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }   

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }   

      this.setState({
        errors: errors
      });

      return formIsValid;
    }


    render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <Alert color={this.state.Batch} isOpen={this.state.visible} toggle={this.onDismiss}>
                      {this.state.MsgContent}
                      </Alert>
                      <p className="text-muted">Sign In to your account</p><pre>{process.env.REACT_APP_SECRET_NAME}</pre>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input  type="text" placeholder="Username" name="username" autoComplete="off" value={this.state.fields.username || ''} onChange={this.handleChange} />                        
                      </InputGroup>
                      <FormText color="danger">{this.state.errors.username}</FormText>

                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input  type="password" placeholder="password" name="password" autoComplete="off" value={this.state.fields.password || ''} onChange={this.handleChange} /> 
                      </InputGroup>
                      <FormText color="danger">{this.state.errors.password}</FormText>
                                         
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.onSubmit}>Login</Button>
                         
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                      
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      {/* <h2>Sign up</h2> */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      {/* <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link> */}
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
   }
}

export default Login;

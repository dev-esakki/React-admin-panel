import React, { Component } from 'react'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    Alert,
    FormText
  } from 'reactstrap';


export class ChangePwd extends Component {
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

    reset = () => {
        this.setState({
            fields : {},
            errors : {},
        })
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
            this.setState({
                visible: true,
                MsgContent : "Password updated Succesfully",
                Batch : 'success'
              })
        }
    }

    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(!fields["oldPassword"]) {
            formIsValid = false;
            errors["oldPassword"] = "*Please enter your old password.";
        }

        if(!fields["newPassword"]) {
            formIsValid = false;
            errors["newPassword"] = "*Please enter your new password.";
        }

        if(!fields["confirmPassword"]) {
            formIsValid = false;
            errors["confirmPassword"] = "*Please enter your Confirm password.";
        }        

        if(fields["newPassword"] !== fields["confirmPassword"]) {
            formIsValid = false;
            errors["confirmPassword"] = "*Confirm password is not matched";
        }

        this.setState({
            errors: errors
        });

        return formIsValid;
    }
    
    render() {
        return (
            <div>
                  <Row>
                    <Col xs="12" md="12">
                        <Card>
                        <CardHeader>
                            <strong>Basic Form</strong> Elements
                            <Alert color={this.state.Batch} isOpen={this.state.visible} toggle={this.onDismiss}>
                            {this.state.MsgContent}
                            </Alert>
                        </CardHeader>
                        <CardBody>
                            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                           
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="text-input">Old Password</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="text-input" name="oldPassword" placeholder="Old Password" value={this.state.fields.oldPassword || ''} onChange={this.handleChange}/>
                                <FormText color="danger">{this.state.errors.oldPassword}</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="text-input">New Password</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="text-input" name="newPassword" placeholder="New Password" value={this.state.fields.newPassword || ''} onChange={this.handleChange}/>
                                <FormText color="danger">{this.state.errors.oldPassword}</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="text-input">Confirm Password</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="text-input" name="confirmPassword" placeholder="Confirm Password" value={this.state.fields.confirmPassword || ''} onChange={this.handleChange}/>
                                <FormText color="danger">{this.state.errors.confirmPassword}</FormText>
                                </Col>
                            </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" outline color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>&nbsp;&nbsp;&nbsp;
                            <Button type="reset" outline color="danger" onClick={this.reset}><i className="fa fa-ban"></i> Reset</Button>
                        </CardFooter>
                        </Card>
                      
                    </Col>                   
                    </Row>
            </div>
        )
    }
}

export default ChangePwd

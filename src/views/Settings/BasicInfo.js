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
    FormText,
    Input,
    Label,
    Row,
    Alert
  } from 'reactstrap';




export class BasicInfo extends Component {
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

    onSubmit = () => { 
        if (this.validateForm()) {
            this.setState({
                visible: true,
                MsgContent : "Basic info updated Succesfully",
                Batch : 'success'
              })
        }
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

    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(!fields["text"]) {
            formIsValid = false;
            errors["text"] = "*Please enter your text.";
        }
        if(!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email.";
        }
        if(!fields["textarea"]) {
            formIsValid = false;
            errors["textarea"] = "*Please enter your textarea.";
        }
        if(fields["select"] === '0' || typeof fields["select"] === 'undefined') {
            formIsValid = false;
            errors["select"] = "*Please select your option.";
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
                                <Label>Username</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <p className="form-control-static">Username</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="text-input">Text Input</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="text-input" name="text" placeholder="Text" value={this.state.fields.text || ''} onChange={this.handleChange} />
                                <FormText color="danger">{this.state.errors.text}</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="email-input">Email Input</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="email-input" name="email" placeholder="email" value={this.state.fields.email || ''} onChange={this.handleChange} />
                                <FormText color="danger">{this.state.errors.email}</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="textarea-input">Textarea</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="textarea" id="textarea-input" name="textarea" placeholder="textarea" rows="9" value={this.state.fields.textarea || ''} onChange={this.handleChange} />
                                <FormText color="danger">{this.state.errors.textarea}</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="select">Select</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="select" name="select" id="select" onChange={this.handleChange}>
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </Input>
                                <FormText color="danger">{this.state.errors.select}</FormText>
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

export default BasicInfo

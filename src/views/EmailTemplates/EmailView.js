import React, { Component } from 'react'
import CKEditor from "react-ckeditor-component";
import Templates from './Templates'
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, FormText, Button, Alert } from 'reactstrap';


export class EmailView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            content: '',
            fields : {},
            errors : {},
            visible: false,
            MsgContent : '',
            Batch : ''
        }
    }

    componentDidMount() {
        const EmailDetails = Templates.find( email => email.id.toString() === this.props.match.params.id)
        if(EmailDetails) {
            this.setState({
                content: EmailDetails.content
            })
        }

    }

    onDismiss = () => {
        this.setState({ visible: false });
    }

    cancel = () => {
        this.props.history.push('/templates')
    }

    updateContent = (newContent) => {
        this.setState({
            content: newContent
        })
    }
    
    onChange = (evt) => {
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        this.setState({
          content: newContent
        })
      }
    
     onSubmit = () => { 
        if (this.validateForm()) {
            this.setState({
                visible: true,
                MsgContent : "Email Template updated Succesfully",
                Batch : 'success'
              })
        }
    }

    validateForm = () => {
        let content = this.state.content;
        let errors = {};
        let formIsValid = true;
        if(!content) {
            formIsValid = false;
            errors["content"] = "*Please enter Email content.";
        }
        this.setState({
            errors: errors
        });

        return formIsValid;
    }
      
    onBlur = (evt) => {
    console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste = (evt) => {
    console.log("afterPaste event called with event info: ", evt);
    }

    render() {
        const EmailDetails = Templates.find( email => email.id.toString() === this.props.match.params.id)

        const EmailNotFound = EmailDetails ? Object.entries(EmailDetails) : [['', (<span> Not found</span>)]]

        if(EmailDetails || typeof EmailDetails !== 'undefined') {

            return (
                <div className="animated fadeIn">
                    <Row>
                        <Col lg={12}>
                            <Card>
                            <CardHeader>
                                <strong><i className="icon-info pr-1"></i>Template Name: {EmailDetails.name}</strong>
                                <Alert color={this.state.Batch} isOpen={this.state.visible} toggle={this.onDismiss}>
                                {this.state.MsgContent}
                                </Alert>
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                <FormGroup row>
                                    <Col md="3">
                                    <Label htmlFor="text-input">Name</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                    <Input type="text" id="text-input" name="Name" placeholder="Name" value={EmailDetails.name}  disabled/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                    <Label htmlFor="text-input">Template</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <CKEditor 
                                            activeClass="p10" 
                                            content={this.state.content} 
                                            events={{
                                                "blur": this.onBlur,
                                                "afterPaste": this.afterPaste,
                                                "change": this.onChange
                                            }}
                                        />
                                        <FormText color="danger">{this.state.errors.content}</FormText> 
                                    </Col>
                                </FormGroup>     
                                <FormGroup row>
                                    <Col md="3">
                                    
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Button  outline color="primary" onClick={this.onSubmit}><i className="fa fa-dot-circle-o"></i> Submit</Button>&nbsp;&nbsp;&nbsp;
                                        <Button type="reset" outline color="danger" onClick={this.cancel}><i className="fa fa-ban"></i> Cancel</Button>
                                    </Col>
                                </FormGroup>                              
                                </Form>
                            </CardBody>
                            </Card>
                        </Col>
                        </Row>                 
                </div>
            )
       } else {
           return (
            <div className="animated fadeIn">
                <Row>
                    <Col lg={12}>
                        <Card>
                            <CardHeader>
                                <strong> <Alert color="danger" isOpen={true} >
                                {EmailNotFound} 
                                </Alert> </strong>                               
                            </CardHeader>
                        </Card>
                    </Col>
                </Row>
            </div>
           )
       }
    }
}

export default EmailView

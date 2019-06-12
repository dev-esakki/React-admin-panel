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
  } from 'reactstrap';




export class BasicInfo extends Component {
    render() {
        return (
            <div>
                 <Row>
                    <Col xs="12" md="12">
                        <Card>
                        <CardHeader>
                            <strong>Basic Form</strong> Elements
                        </CardHeader>
                        <CardBody>
                            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <FormGroup row>
                                <Col md="3">
                                <Label>Static</Label>
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
                                <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                                <FormText color="muted">This is a help text</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="email-input">Email Input</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                                <FormText className="help-block">Please enter your email</FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="textarea-input">Textarea</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                                        placeholder="Content..." />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="select">Select</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="select" name="select" id="select">
                                    <option value="0">Please select</option>
                                    <option value="1">Option #1</option>
                                    <option value="2">Option #2</option>
                                    <option value="3">Option #3</option>
                                </Input>
                                </Col>
                            </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                        </CardFooter>
                        </Card>
                      
                    </Col>                   
                    </Row>
            </div>
        )
    }
}

export default BasicInfo

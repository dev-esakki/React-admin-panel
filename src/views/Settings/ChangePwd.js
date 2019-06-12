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
  } from 'reactstrap';


export class ChangePwd extends Component {
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
                                <Label htmlFor="text-input">Old Password</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="text-input" name="text-input" placeholder="Old Password" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="text-input">New Password</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="text-input" name="text-input" placeholder="New Password" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="text-input">Confirm Password</Label>
                                </Col>
                                <Col xs="12" md="9">
                                <Input type="text" id="text-input" name="text-input" placeholder="Confirm Password" />
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

export default ChangePwd

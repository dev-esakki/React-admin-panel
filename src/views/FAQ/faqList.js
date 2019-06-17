import React, { Component } from 'react'
import { Badge, Button, Card, CardBody,  CardHeader, Col, Collapse,  Row } from 'reactstrap';
import faqs from './faq'


export class faqList extends Component {
    constructor(props) {
        super(props);
        this.toggleCustom = this.toggleCustom.bind(this);
        this.state = {
          collapse: false,
          accordion: [true, false, false, false, false],
          custom: [true, false, false, false],
          status: 'Closed',
          fadeIn: true,
          timeout: 300,
        };
    }
    toggleCustom(tab) { 
        const prevState = this.state.custom;
        const state = prevState.map((x, index) => tab === index ? !x : false);

        this.setState({
            custom: state,
        });
    }

    editFaq = (_id) => {
        const navigation = `/faqView/${_id}`
        this.props.history.push(navigation)
    }

    toggleAccordion(tab) {

        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => tab === index ? !x : false);
    
        this.setState({
          accordion: state,
        });
      }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                <Col xl="6">
                    <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> FAQ <small></small>
                        <div className="card-header-actions">
                        <Badge>NEW</Badge>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div id="exampleAccordion" data-children=".item">
                            {
                                faqs.map((faq, index) =>
                                

                                <Card className="mb-0"  key={faq.id}>
                                    <CardHeader id="headingOne">
                                    <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(index)} aria-expanded={this.state.accordion[index]} aria-controls="collapseOne">
                                        <h5 className="m-0 p-0">{faq.name}  #{index}</h5>
                                    </Button>
                                    </CardHeader>
                                    <Collapse isOpen={this.state.accordion[index]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                                    <CardBody>
                                    {faq.content.slice(0, 300)}<span style={{"color" : "#20a8d8", "cursor" : "pointer"}}  onClick={() => this.editFaq(faq.id)}>edit</span>
                                    </CardBody>
                                    </Collapse>
                                </Card>
                                )
                            }                             

                            {/* <div className="item">
                                <Button className="m-0 p-0" color="link" onClick={() => this.toggleCustom(0)} aria-expanded={this.state.custom[0]} aria-controls="exampleAccordion1">
                                Toggle item
                                </Button>
                                <Collapse isOpen={this.state.custom[0]} data-parent="#exampleAccordion" id="exampleAccordion1">
                                <p className="mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget
                                    tristique massa. Aliquam lacinia rhoncus nibh quis ornare.
                                </p>
                                </Collapse>
                            </div>
                            <div className="item">
                                <Button className="m-0 p-0" color="link" onClick={() => this.toggleCustom(1)} aria-expanded={this.state.custom[1]} aria-controls="exampleAccordion2">
                                Toggle item 2
                                </Button>
                                <Collapse isOpen={this.state.custom[1]} data-parent="#exampleAccordion" id="exampleAccordion2">
                                <p className="mb-3">
                                    Donec at ipsum dignissim, rutrum turpis scelerisque, tristique lectus. Pellentesque habitant morbi tristique senectus et netus et
                                    malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci varius natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus.
                                </p>
                                </Collapse>
                            </div> */}
                        </div>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
            </div>
        )
    }
}

export default faqList

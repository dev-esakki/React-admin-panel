import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import Templates from './Templates'


function TemplateView(props) {
    const email = props.email
    const EmailLink = `/templateView/${email.id}`
  
    const getBadge = (status) => {
      return status === 'Active' ? 'success' :
        status === 'Inactive' ? 'secondary' :
          status === 'Pending' ? 'warning' :
            status === 'Banned' ? 'danger' :
              'primary'
    }
  
    return (
      <tr key={email.id.toString()}>
        <th scope="row"><Link to={EmailLink}>{email.id}</Link></th>
        <td><Link to={EmailLink}>{email.name}</Link></td>
        <td>{email.registered}</td>
        <td><Link to={EmailLink}><Badge color={getBadge(email.status)}>{email.status}</Badge></Link></td>
      </tr>
    )
  }



export class EmailList extends Component {
    render() {
        return (
            <div className="animated fadeIn">
            <Row>
            <Col xl={6}>
                <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
                </CardHeader>
                <CardBody>
                    <Table responsive hover>
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Template</th>
                        <th scope="col">Created-Date</th>
                        <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Templates.map((email, index) =>
                        <TemplateView key={index} email={email}/>
                        )}
                    </tbody>
                    </Table>
                </CardBody>
                </Card>
            </Col>
            </Row>
        </div>
        )
    }
}

export default EmailList

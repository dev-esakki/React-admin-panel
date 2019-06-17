import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import contactsList from './Contacts'

function ContactsView(props) {
    const contact = props.contact
    const contactLink = `/contact/${contact.id}`
  
    const getBadge = (status) => {
      return status === 'Active' ? 'success' :
        status === 'Inactive' ? 'secondary' :
          status === 'Pending' ? 'warning' :
            status === 'Banned' ? 'danger' :
              'primary'
    }
  
    return (
      <tr key={contact.id.toString()}>
        <th scope="row"><Link to={contactLink}>{contact.id}</Link></th>
        <td><Link to={contactLink}>{contact.name}</Link></td>
        <td>{contact.registered}</td>
        <td><Link to={contactLink}><Badge color={getBadge(contact.status)}>{contact.status}</Badge></Link></td>
      </tr>
    )
}


export class ContactList extends Component {
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
                            <th scope="col">Name</th>
                            <th scope="col">Created-Date</th>
                            <th scope="col">status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactsList.map((contact, index) =>
                            <ContactsView key={index} contact={contact}/>
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

export default ContactList

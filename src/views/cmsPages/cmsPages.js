import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import cmsPagesList from './cmsList'


function CMSView(props) {
    const cms = props.cms
    const cmsLink = `/cmsView/${cms.id}`
  
    const getBadge = (status) => {
      return status === 'Active' ? 'success' :
        status === 'Inactive' ? 'secondary' :
          status === 'Pending' ? 'warning' :
            status === 'Banned' ? 'danger' :
              'primary'
    }
  
    return (
      <tr key={cms.id.toString()}>
        <th scope="row"><Link to={cmsLink}>{cms.id}</Link></th>
        <td><Link to={cmsLink}>{cms.name}</Link></td>
        <td>{cms.registered}</td>
        <td><Link to={cmsLink}><Badge color={getBadge(cms.status)}>{cms.status}</Badge></Link></td>
      </tr>
    )
  }

export class cmsPages extends Component {
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
                        {cmsPagesList.map((cms, index) =>
                        <CMSView key={index} cms={cms}/>
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

export default cmsPages

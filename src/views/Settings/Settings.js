import React, { Component } from 'react';
import {  Col, Row, TabPane, Nav, NavItem, NavLink, TabContent } from 'reactstrap';
import  SiteConfig from './SiteConfig'
import BasicInfo from './BasicInfo'
import ChangePwd from './ChangePwd'

class Settings extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          <BasicInfo />
        </TabPane>
        <TabPane tabId="2">
         <ChangePwd />
        </TabPane>
        <TabPane tabId="3">
            <SiteConfig />
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
         <Row>
          <Col xs="12" md="12" className="mb-12">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Basic Info
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Change Password
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Site Config
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Settings;

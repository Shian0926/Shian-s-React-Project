import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { LinkContainer } from "react-router-bootstrap";
// import { increaseCounter, decreaseCounter } from '../../actions/actionDemo'

const Link = (props) => {
  return (
    <LinkContainer to={props.to}>
      <NavItem eventKey={props.eventKey}>
        {props.children}
      </NavItem>
    </LinkContainer>
  )
}

class _Navbar extends React.Component {

  handleSelect(selectedKey) {
    // this.props.changePage(selectedKey);
    console.log(selectedKey)
  }
  handleLoginLogout(selectedKey) {
    // this.props.changeUser(selectedKey);
    console.log(selectedKey)
  }

  render() {
    const user = this.props.login ? (
      <Navbar.Text>this.props.username</Navbar.Text>
    ) : (
        <Navbar.Text>Guest</Navbar.Text>
      );
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            Shian's React Project
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav
            activeKey={'ORDERS'}
            onSelect={key => this.handleSelect(key)}
          >
            <Link to='/' eventKey='HOME'>HOME</Link>
            <Link to='/orders' eventKey='ORDERS'>ORDERS</Link>
            <Link to='/product' eventKey='PRODUCT'>PRODUCT</Link>
          </Nav>
          <Nav
            pullRight
            onSelect={key => this.handleLoginLogout(key)}
          >
            {user}
            {this.props.login ?
              <NavItem eventKey='LOGOUT'>Logout</NavItem> :
              <NavItem eventKey='LOGIN'>Login</NavItem>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

// 將store中的items值傳綁到props上
const mapStateToProps = store => ({
  login: store.user && store.user.login,
  username: store.user && store.user.name,
  eventKey: store.nav && store.nav.eventKey,
})

// 準備綁定用的DispatchToProps方法，
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  }, dispatch)
)

//匯出TodoList模組
export default connect(mapStateToProps, mapDispatchToProps)(_Navbar)
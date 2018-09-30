import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { increaseCounter, decreaseCounter } from '../../actions/actionDemo'
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap'

class Header extends React.Component {
  //   handleIncreaseCounter = (e) => {
  //     this.props.increaseCounter(1);
  //   }
  //   handleDecreaseCounter = (e) => {
  //     this.props.decreaseCounter(1);
  //   }

  render() {
    return (
      <Row>
        <Col className='col-align' md={6} xs={12}>
          <h2><strong>OVERVIEW</strong></h2>
        </Col>
        <Col className='col-align col-align--bottom' md={2} xs={6}>
          <FormGroup>
            <FormControl className='arrow-right' type='date'></FormControl>
          </FormGroup>
        </Col>
        <Col className='col-align col-align--bottom' md={2} xs={6}>
          <FormGroup>
            <FormControl type='date'></FormControl>
          </FormGroup>
        </Col>
        <Col className='col-align col-align--bottom' md={2} xs={12}>
          <FormGroup>
            <FormControl componentClass='select' placeholder='select'>
              <option value='Daily'>Daily</option>
              <option selected value='Weekly'>Weekly</option>
              <option value='Monthly'>Monthly</option>
              <option value='Yearly'>Yearly</option>
            </FormControl>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

// 將store中的items值傳綁到props上
const mapStateToProps = store => ({
  // ...store.demo
})

// 準備綁定用的DispatchToProps方法，
// 只需要onItemFilterOut與onItemSort這個方法
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    // increaseCounter,
    // decreaseCounter
  }, dispatch)
)

//匯出TodoList模組
export default connect(mapStateToProps, mapDispatchToProps)(Header)
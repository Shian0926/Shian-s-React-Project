import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { increaseCounter, decreaseCounter } from '../../actions/actionDemo'
import { Row, Col, Well } from 'react-bootstrap'

class IncomeAndExp extends React.Component {
  //   handleIncreaseCounter = (e) => {
  //     this.props.increaseCounter(1);
  //   }
  //   handleDecreaseCounter = (e) => {
  //     this.props.decreaseCounter(1);
  //   }

  render() {
    const totalCost = Math.round(Math.random() * 50000).toLocaleString(navigator.language);
    const totalRevenue = Math.round(Math.random() * 50000).toLocaleString(navigator.language);
    const netIncome = Math.round(Math.random() * 50000).toLocaleString(navigator.language);
    
    return (

      <Row>
        <Col md={4}>
          <Well className='bg-white'>
            <h4 className='text-center'>
              <span className='fa fa-hand-holding-usd fa-lg' />&nbsp;TOTAL REVENUE
              </h4>
            <h1 className='text-center text-limegreen'><strong>{totalRevenue}</strong></h1>
          </Well>
        </Col>
        <Col md={4}>
          <Well className='bg-white'>
            <h4 className='text-center'>
              <span className='fa fa-money-check fa-lg' />&nbsp;TOTAL COST
              </h4>
            <h1 className='text-center text-danger'><strong>{totalCost}</strong></h1>
          </Well>
        </Col>
        <Col md={4}>
          <Well className='bg-white'>
            <h4 className='text-center'>
              <span className='fa fa-money-bill fa-lg' />&nbsp;NET INCOME
              </h4>
            <h1 className='text-center text-primary'><strong>{netIncome}</strong></h1>
          </Well>
        </Col>
      </Row>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(IncomeAndExp)
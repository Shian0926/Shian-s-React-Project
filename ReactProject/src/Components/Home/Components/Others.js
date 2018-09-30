import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { increaseCounter, decreaseCounter } from '../../actions/actionDemo'
import { Row, Col, Well, Table } from 'react-bootstrap'

class Others extends React.Component {
  //   handleIncreaseCounter = (e) => {
  //     this.props.increaseCounter(1);
  //   }
  //   handleDecreaseCounter = (e) => {
  //     this.props.decreaseCounter(1);
  //   }

  render() {
    const isIncrease=undefined;
    return (
      <Row>
        <Col md={6}>
          <Well className='bg-white'>
            <h2><strong>Transaction Website</strong></h2>
            <Table>
              <tr>
                <td><span className='fab fa-facebook fa-4x'></span></td>
                <td><span className='text-center text-muted'>facebook.com</span></td>
                <td><h4><strong className='text-center'>{Math.round(Math.random()*5000).toLocaleString(navigator.language)}</strong></h4></td>
                <td>
                  <strong className={`text-${isIncrease === undefined ? 'limegreen' : 'danger'}`}>
                  <h4><span className={`fa fa-arrow-${isIncrease === undefined ? 'up' : 'down'}`}></span>20%</h4>
                  </strong>
                </td>
              </tr>
            </Table>
          </Well>
        </Col>
        <Col md={6}>
          <Well className='bg-white'>
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
export default connect(mapStateToProps, mapDispatchToProps)(Others)
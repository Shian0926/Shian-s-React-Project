import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { increaseCounter, decreaseCounter } from '../../actions/actionDemo'
import { Row, Col, Well, FormGroup, FormControl } from 'react-bootstrap'
import {version, license, author} from '../../../package.json'

class Footer extends React.Component {
  //   handleIncreaseCounter = (e) => {
  //     this.props.increaseCounter(1);
  //   }
  //   handleDecreaseCounter = (e) => {
  //     this.props.decreaseCounter(1);
  //   }

  render() {

    return (
      <footer className='footer'>
        <Col xs={12}>
          <p className='text-center'>Code licensed {license}. Maintained by {author}. Current version {version}</p>
        </Col>
      </footer>
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer)
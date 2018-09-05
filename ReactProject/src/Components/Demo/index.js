// Demo.js
import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from '../../actions/actionDemo'

class Demo extends React.Component  {
  handleIncreaseCounter = (e) => {
    this.props.increaseCounter(1);
  }
  handleDecreaseCounter = (e) => {
    this.props.decreaseCounter(1);
  }

  render() {
    return (
        <div>
            <h2>Shian's React Project</h2>
            <button onClick={this.handleIncreaseCounter}>+1</button>
            <button onClick={this.handleDecreaseCounter}>-1</button>
            <p>Counter:{this.props.counter}</p>
            <p>Demo.</p>
            <p>Demo.</p>
        </div>
    );
  }
}

// 將store中的items值傳綁到props上
const mapStateToProps = store => ({
  ...store.demo
})

// 準備綁定用的DispatchToProps方法，
// 只需要onItemFilterOut與onItemSort這個方法
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    increaseCounter,
    decreaseCounter
  }, dispatch)
)

//匯出TodoList模組
export default connect(mapStateToProps, mapDispatchToProps)(Demo)
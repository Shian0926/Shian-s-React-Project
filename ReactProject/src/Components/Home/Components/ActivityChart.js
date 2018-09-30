import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { increaseCounter, decreaseCounter } from '../../actions/actionDemo'
import { Row, Col, Well } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'

class ActivityChart extends React.Component {
  //   handleIncreaseCounter = (e) => {
  //     this.props.increaseCounter(1);
  //   }
  //   handleDecreaseCounter = (e) => {
  //     this.props.decreaseCounter(1);
  //   }

  render() {
    const labels=[];
    const data_obj={1:[],2:[],3:[]};
    for(let i = 0; i<7; i++) {
      labels.push(`${6+i} Jun`);
      data_obj['1'].push(Math.round(Math.random()*7000));
      data_obj['2'].push(Math.round(Math.random()*7000));
      data_obj['3'].push(Math.round(Math.random()*7000));
    }
    const data = {
      labels: labels,
      datasets: [
        {
          // label: 'My First dataset',
          fill: false,
          // lineTension: 0.1,
          borderColor: 'limegreen',
          backgroundColor: '#12ad12',
          // borderCapStyle: 'butt',
          // borderDash: [],
          // borderDashOffset: 0.0,
          // borderJoinStyle: 'miter',
          pointBorderColor: 'limegreen',
          pointBackgroundColor: '#12ad12',
          // pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBorderColor: 'limegeen',
          pointHoverBackgroundColor: '#12ad12',
          pointHoverBorderWidth: 2,
          // pointRadius: 1,
          // pointHitRadius: 10,
          data: data_obj['1']
        },
        {
          fill: false,
          borderColor: '#a94442',
          backgroundColor: '#892422',
          pointBorderColor: '#a94442',
          pointBackgroundColor: '#892422',
          pointHoverRadius: 5,
          pointHoverBorderColor: '#a94442',
          pointHoverBackgroundColor: '#892422',
          pointHoverBorderWidth: 2,
          data: data_obj['2']
        },
        {
          fill: false,
          borderColor: '#337ab7',
          backgroundColor: '#135a97',
          pointBorderColor: '#337ab7',
          pointBackgroundColor: '#135a97',
          pointHoverRadius: 5,
          pointHoverBorderColor: '#337ab7',
          pointHoverBackgroundColor: '#135a97',
          pointHoverBorderWidth: 2,
          data: data_obj['3']
        }
      ]
    };
    const options = {
      legend: {
        display: false,
      },
      scales:{
        gridLines:{
          display: false,
          offsetGridLines: true
        }
      },
      maintainAspectRatio: false
    }

    return (
      <Row>
        <Col xs={12}>
          <Well className='bg-white p'>
            <h2><strong>Activity</strong></h2>
            <div>
              <Line data={data} options={options} width='90%' height='300px'/>
            </div>
          </Well>
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
export default connect(mapStateToProps, mapDispatchToProps)(ActivityChart)
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: this.props.cryptoCurrencyDate,
        datasets: [
          {
            label: 'BTC Price',
            data: this.props.cryptoCurrencyData,
              backgroundColor: [
                'Red', 'Blue', 'Purple', 'Yellow', 'Green'
              ]
          }
        ]
      }
    }
  }
  

  render () {
      return (
        <div className='chart'>
        {console.log(this.props)}
        <Bar
          data={this.state.chartData}
          // options={{ maintainAspectRatio: false }}
        />
        </div>
      )
  }
}

export default Chart;
import React from 'react';
import Chart from 'chart.js';
// import Cryptocurrencydata from './CryptoCurrencyData.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoCurrencyDate: [],
      cryptoCurrencyData: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/cryptocurrencydata')
      .then(response => response.json())
      .then((cryptoCurrency) => {
        const cryptoCurrencyDate = [];
        const cryptoCurrencyData = [];
        for (var date in cryptoCurrency) {
          cryptoCurrencyDate.push(date);
          cryptoCurrencyData.push(cryptoCurrency[date]);
        };
        this.setState({ cryptoCurrencyDate, cryptoCurrencyData })
      })
      .catch(error => console.log(error));
  }


  render () {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>
 
          {/* <Cryptocurrencydata currencyData={this.state.cryptoCurrencyData} /> */}
        </div>
    )
  }
}

export default App;
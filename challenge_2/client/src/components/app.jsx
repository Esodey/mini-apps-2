import React from 'react';
import $ from 'jquery';
import Cryptocurrencydata from './CryptoCurrencyData.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoCurrencyData: []
    }
  }

  componentDidMount() {
    // $.ajax({
    //   type: 'GET',
    //   url: '/cryptocurrencydata',

    //   sucess: (cryptoCurrencyData) => {
    //     console.log(cryptoCurrencyData);
    //     this.setState({
    //       cryptoCurrencyData
    //     });
    //   }
    // })
    fetch('http://localhost:3000/cryptocurrencydata')
      .then(response => response.json())
      .then((cryptoCurrencyData) => {
        // console.log(cryptoCurrencyData)
        // const cryptoCurrencyData = [];
        // for (var date in cryptoCurrency) {
        //   cryptoCurrencyData.push({[date]: cryptoCurrency[date]})
        // };
        this.setState({ cryptoCurrencyData })
      })
      .catch(error => console.log(error));
  }


  render () {
    return (
      <div>
        <h1>Cryptocurrency Charting Tool</h1>
        {JSON.stringify(this.state.cryptoCurrencyData)}
          <Cryptocurrencydata currencyData={this.state.cryptoCurrencyData} />
        </div>
    )
  }
}

export default App;
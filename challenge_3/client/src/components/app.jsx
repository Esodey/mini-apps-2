import React from 'react';
import Table from './Table.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: ['Player',0,0,0,0,0,0,0,0,0,0],
      currentFrame : 1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    const target = event.target;
    const value = target.value;
    let currentScore = this.state.player;
    currentScore[this.state.currentFrame] = value;
    this.setState({
      player: currentScore,
      currentFrame : this.state.currentFrame + 1
    })
  }

  render () {
    return (
      <div>
        <h1>Bowling</h1>
        <div>
          <button value={1} onClick={this.handleClick}>1</button>
          <button value={2} onClick={this.handleClick}>2</button>
          <button value={3} onClick={this.handleClick}>3</button>
        </div>
        <div>
          <button value={4} onClick={this.handleClick}>4</button>
          <button value={5} onClick={this.handleClick}>5</button>
          <button value={6} onClick={this.handleClick}>6</button>
        </div>
        <div>
          <button value={7} onClick={this.handleClick}>7</button>
          <button value={8} onClick={this.handleClick}>8</button>
          <button value={9} onClick={this.handleClick}>9</button>
        </div>
        <div>
          <button value={0} onClick={this.handleClick}>0</button>
          <button value={10} onClick={this.handleClick}>10</button>
        </div>
        <div>
          <Table score={this.state.player} />
        </div>
      </div>
    )
  }
}

export default App;
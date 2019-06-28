import React from 'react';
import Table from './Table.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: ['Player',[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
      currentFrame : 1,
      bowledPerRound: 0,
      totalScore: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.addTotalScore = this.addTotalScore.bind(this);
  }

  handleClick (event) {
    const target = event.target;
    const value = Number(target.value);
    let currentScore = this.state.player;
    if (currentScore[this.state.currentFrame][0] === 0) {
      currentScore[this.state.currentFrame][0] = value;
      this.setState({
        player: currentScore,
        bowledPerRound : this.state.bowledPerRound + 1
      }, this.addTotalScore())
    } else  if (currentScore[this.state.currentFrame][0] + currentScore[this.state.currentFrame][0] === 10) {
      const target = event.target;
      const value = Number(target.value);
      let currentScore = this.state.player;
        currentScore[this.state.currentFrame][1] = value;
          this.setState({
            player: currentScore,
            bowledPerRound : 0,
            currentFrame: this.state.currentFrame + 1,
          }, this.addTotalScore())
        } else {
          const target = event.target;
          const value = Number(target.value);
          let currentScore = this.state.player;
          currentScore[this.state.currentFrame][1] = value;
          this.setState({
            player: currentScore,
            bowledPerRound : 0,
            currentFrame: this.state.currentFrame + 1,
          }, this.addTotalScore())
        }
  }

  addTotalScore() {
    let score = this.state.player.slice(1);
    let ts = 0;
    for (var i = 0; i < score.length; i++) {
      ts += Number(score[i][0] + score[i][1]);
    }
    this.setState({
      totalScore: ts
    })
  }

  render () {
    if (this.state.currentFrame > 10) {
      return (
        <div>
          <h1>Thank You For Playing</h1>
          <h3>Your total score is : {this.state.totalScore} </h3>
        </div>
      )
    }
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
          <Table score={this.state.player} totalScore={this.state.totalScore} />
          <div className='totalScore'> Total Score:
            {this.state.totalScore}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
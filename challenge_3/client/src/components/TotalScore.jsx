import React from 'react';

class TotalScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.addTotalScore = this.addTotalScore.bind(this);
  }

  addTotalScore() {
    let totalScore = 0;
    // console.log(this.props.score);
    for (var i = 0; i < this.props.score.length; i++) {
      totalScore = totalScore + this.props.score[i];
      console.log(this.props.score[i]);
    }
    return totalScore;
  }

  render () {
    return (
      <div className='score' >Total Score :
        {this.addTotalScore()}
      </div>
    )
  }
}

export default TotalScore;
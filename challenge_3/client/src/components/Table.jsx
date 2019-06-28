import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = {
         player: this.props.score
      }
      this.renderScoreData = this.renderScoreData.bind(this);
      this.renderScoreHeader = this.renderScoreHeader.bind(this);
   }

   renderScoreHeader() {
      let header = ['Frame:',1,2,3,4,5,6,7,8,9,10];
      return header.map((key, index) => {
        return <th key={index}>{key}</th>
      })
    }

   renderScoreData() {
       return (
          <tr>
             <td>{this.state.player[0][0] + ' ' + this.state.player[0][1]}</td>
             <td>{this.state.player[1][0] + ' ' + this.state.player[1][1]}
                <div>{this.props.totalScore}</div>
             </td>
             <td>{this.state.player[2][0] + ' ' + this.state.player[2][1]}
                <div>{this.props.totalScore}</div>
             </td>
             <td>{this.state.player[3][0] + ' ' + this.state.player[3][1]}
                <div>{this.props.totalScore}</div>
             </td>
             <td>{this.state.player[4][0] + ' ' + this.state.player[4][1]}
                <div>{this.props.totalScore}</div>
             </td>
             <td>{this.state.player[5][0] + ' ' + this.state.player[5][1]}
                <div>{this.props.totalScore}</div>
             </td>
             <td>{this.state.player[6][0] + ' ' + this.state.player[6][1]}
                <div>{this.props.totalScore}</div>
             </td>
             <td>{this.state.player[7][0] + ' ' + this.state.player[7][1]}
                <div>{this.props.totalScore}</div>
             </td>
             <td>{this.state.player[8][0] + ' ' + this.state.player[8][1]}
                <div>{this.props.totalScore}</div>
             </td>
             <td>{this.state.player[9][0] + ' ' + this.state.player[9][1]}
                <div>{this.props.totalScore}</div>
             </td>
             <td>{this.state.player[10][0] + ' ' + this.state.player[10][1]}
                <div>{this.props.totalScore}</div>
             </td>
          </tr>
       )
    }


   render() {
      return (
         <div>
            <h1>Bowling Scores</h1>
            <table>
              <tbody>
                <tr>{this.renderScoreHeader()}</tr>
                {this.renderScoreData()}
              </tbody>
            </table>
         </div>
      )
   }
}

export default Table
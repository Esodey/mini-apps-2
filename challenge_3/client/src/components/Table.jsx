import React, { Component } from 'react'
import TotalScore from './TotalScore.jsx'

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
      let header = ['Frame:',1,2,3,4,5,6,7,8,9,10]
      return header.map((key, index) => {
        return <th key={index}>{key}</th>
      })
    }

   renderScoreData() {
       return (
          <tr>
             <td>{this.state.player[0]}</td>
             <td>{this.state.player[1]}</td>
             <td>{this.state.player[2]}</td>
             <td>{this.state.player[3]}</td>
             <td>{this.state.player[4]}</td>
             <td>{this.state.player[5]}</td>
             <td>{this.state.player[6]}</td>
             <td>{this.state.player[7]}</td>
             <td>{this.state.player[8]}</td>
             <td>{this.state.player[9]}</td>
             <td>{this.state.player[10]}</td>
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
            <TotalScore score={this.state.player.slice(1)} />
         </div>
      )
   }
}

export default Table
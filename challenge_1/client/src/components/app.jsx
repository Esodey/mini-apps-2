import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          searchValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    render() {
    return (
        <div>
            <h1>Historical Events Finder</h1>
            <input onChange={this.handleChange}></input>
            <button>Search</button>
         </div>
    )
   }
}

export default App;
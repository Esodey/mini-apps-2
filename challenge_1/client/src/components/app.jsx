import React from 'react';
import $ from 'jquery';
import Events from './Events.jsx'
import ReactPaginate from 'react-paginate';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          searchValue: '',
          events: [],
          pageCount: 0
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    handleSearch() {
        let queryString = this.state.searchValue;
        console.log(queryString)
        $.ajax({
            type: 'GET',
            url: `/events/?q=${queryString}&_page=${this.state.offset}`,
            success: (events) => {
                console.log(events);
                this.setState({
                    events: events,
                    pageCount: (events.length / 10)
                })
            }
        })
    }

    render() {
    return (
        <div>
            <h1>Historical Events Finder</h1>
            <input onChange={this.handleChange}></input>
            <button onClick={this.handleSearch}>Search</button>
            <Events events={this.state.events} />
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
        />
         </div>
    )
   }
}

export default App;
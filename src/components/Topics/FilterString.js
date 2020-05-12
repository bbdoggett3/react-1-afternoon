import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            movies: ["Back To The Future", "Star Wars", "Indiana Jones", "Tron"],
            userInput: "",
            filteredMovies: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterAMovie(userInput) {
        let movies = this.state.movies;
        let filteredMovies = [];

        for(let i = 0; i < movies.length; i++) {
            if(movies[i].includes(userInput)) {
                filteredMovies.push(movies[i]);
            }
        }
        this.setState ({filteredMovies: filteredMovies });
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"> 80's Movies: { JSON.stringify(this.state.movies, null, 10) }</span>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterAMovie(this.state.userInput)}> Filter</button>
                <span className="resultsBox filterStringRB">  { JSON.stringify(this.state.filteredMovies, null, 10) }</span>
            </div>
        )
        
    };
};

export default FilterString;
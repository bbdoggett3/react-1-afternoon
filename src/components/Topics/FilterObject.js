import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArrayMotorcycles: [
                {
                    name: "Black Betty",
                    model: "Triumph",
                    make: "Bonnivelle T-120",
                    color: "Black"
                },
                {
                    name: "Yellow Hornet",
                    color: "Yellow",
                    model: "Honda",
                    year: "1998"
                },
                {
                    name: "Fat Albert",
                    model: "Iron 883",
                    year: "2020"
                }
        ],

        userInput: '',
        filteredMotorcycles: []
        }
    }

    //Connected to my input tag
    handleChange(val) {
        this.setState({ userInput: val });
      }

    //Connected to my onclick
    filtersAMotorcycle(prop) {
        let motorcycle = this.state.unFilteredArrayMotorcycles;
        let filterMotor = [];
    
        for ( let i = 0; i < motorcycle.length; i++ ) {
          if ( motorcycle[i].hasOwnProperty(prop) ) {
            filterMotor.push(motorcycle[i]);
          }
        }
    
        this.setState({ filteredMotorcycles: filterMotor });
      }

    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span   className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArrayMotorcycles, null, 10) } </span>
                <input  className="inputLine" onChange={ (event) => this.handleChange(event.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filtersAMotorcycle(this.state.userInput) }> Filter</button>
                <span   className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredMotorcycles, null, 10) }</span>
            </div>
        )
        
    };
};

export default FilterObject;
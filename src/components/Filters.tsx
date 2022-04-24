import React, { Component } from "react";

export class Filters extends Component {
    render() {
        return(
            <div className="filters-group">
                <div className="wrapper">
                    <h3>Filters</h3>
                    <button className="btn-filters red">Red</button>
                    <button className="btn-filters green">Green</button>
                    <button className="btn-filters blue">Blue</button>
                </div>
            </div>
        )
    }
}
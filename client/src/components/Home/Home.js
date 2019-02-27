import React, { Component } from "react";
import "./Home.css";
import RoomSearch from "../RoomSearch/RoomSearch";
import Results from "../Results/Results";
import Saved from "../Saved/Saved";

class Home extends Component {

    render () {
        return (
            <div className="App">
                <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Name Holder</h1>
                    <p class="lead">Smaller test for some coold sentence.</p>
                </div>
                </div>
                <RoomSearch />
                <Results />
                <Saved />
            </div>
        );
    }
}

export default Home;
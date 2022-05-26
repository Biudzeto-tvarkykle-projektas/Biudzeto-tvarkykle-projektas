
import Form from './Form';
import React, { Component, useState, useEffect } from 'react';
import Total from './Total';
import Table from './Table';
import * as RecordsAPI from './ReacordsAPI';
// import Login from './Login';

// import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import AuthService from "../services/auth.service";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";
import BoardUser from "./BoardUser";
// import BoardModerator from "../components/BoardModerator";
// import BoardAdmin from "../components/BoardAdmin";
// import App from "../components/App";

// ----------------------------------------
class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            error: null,
            records: []
        }
    }
  
    componentDidMount() {
        RecordsAPI.getAll()
            .then(
                response => this.setState({
                    records: response.data,
                    isLoaded: true
                })
            ).catch(
                error => this.setState({
                    isLoaded: true,
                    error: error
                })
            )
    }

    addRecord(r) {
        let newRecords = [...this.state.records, r];
        this.setState({
            records: newRecords
        });
    }

    deleteRecord(r) {
        const recordIndex = this.state.records.indexOf(r);
        const newRecords = this.state.records.filter((record, index) => index !== recordIndex);

        this.setState({
            records: newRecords
        });
    }

    updateRecord(oldNew) {
        const recordIndex = this.state.records.indexOf(oldNew.old);
        let newRecords = this.state.records.map(
            (record, index) => {
                if (index === recordIndex) {
                    return oldNew.new;
                } else {
                    return record;
                }
            }
        );

        this.setState({
            records: newRecords
        });
    }

    credits() {
        let c = this.state.records.reduce((preVal, curItem) => {
            if (curItem.amount > 0) {
                return preVal += curItem.amount;
            } else {
                return preVal;
            }
        }, 0);
        return c;
    }

    debits() {
        return this.state.records.reduce((preVal, curItem) => {
            if (curItem.amount < 0) {
                return preVal += curItem.amount;
            } else {
                return preVal;
            }
        }, 0);
    }

    balance() {
        return this.credits() + this.debits();
    }

    render() {
        const { isLoaded, error, records } = this.state;
        let TablePlaceholder;
        if (error) {
            TablePlaceholder = <div className="alert alert-danger" role="alert"> Error: {error.message} </div>;
        } else if (!isLoaded) {
            TablePlaceholder = <div className="alert alert-primary" role="alert">Loading...</div>;
        } else {
            TablePlaceholder = <Table entries={records}
                handleUpdateRecord={this.updateRecord.bind(this)}
                handleDeleteRecord={this.deleteRecord.bind(this)} />;
        }

        return (

            
            <div className="container">
                <h2>Išlaidų sekimo sistema</h2>

                <br />

                <div className="row mb-3">
                    <Total text="Įplaukos" type="success" amount={this.credits()} />
                    <Total text="Išlaidos" type="danger" amount={this.debits()} />
                    <Total text="Turimos lėšos" type="info" amount={this.balance()} />
                </div>
                <br />
                <Form handleAddRecord={this.addRecord.bind(this)} />

                <label>Išlaidų paieška: </label>
                <form className="form-inline mb-3">
                    <label className='mr-2 '>Data nuo: </label>
                    <div className="form-group mr-1">
                        <input type="date" className="form-control mr-2" />
                    </div>
                    <label className='mr-2'>Data iki: </label>
                    <div className="form-group mr-1">
                        <input type="date" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary ">Išsaugoti</button>


                </form>

                {TablePlaceholder}
            </div>
        );
    }
}

export default App;

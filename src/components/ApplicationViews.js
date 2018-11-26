import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/animalList'
import LocationList from './location/locationList'
import EmployeeList from './employee/employeeList'
import OwnersList from './owners/owners'
import apiCalls from "../modules/apiCalls"

import AnimalManager from "../modules/AnimalManager"
import OwnerManager from "../modules/OwnerManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"

import AnimalDetail from './animals/AnimalDetail'
import AnimalForm from './animals/AnimalForms'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owners/OwnerDetail'
import APIManager from '../modules/apiCalls';


class ApplicationViews extends Component {

  state = {
    locations: [],
    animals: [],
    employees: [],
    owners: []
  }


  componentDidMount() {
    const newState = {}

    AnimalManager.getAllAnimals()
      .then(allAnimals => {
        this.setState({
          animals: allAnimals
        })
      })
      .then(EmployeeManager.getAllEmployees()
        .then(allEmployees => {
          this.setState({
            employees: allEmployees
          })
        }))
      .then(LocationManager.getAllLocations()
        .then(allLocations => {
          this.setState({
            locations: allLocations
          })
        }))
      .then(OwnerManager.getAllOwners()
        .then(allOwners => {
          this.setState({
            owners: allOwners
          })
        }))


    // apiCalls.getAll("animals")
    //   .then (animals => newState.animals = animals)
    //   .then(() => apiCalls.getAll("employees"))
    //   .then (employees => newState.employees = employees)
    //     .then(() => apiCalls.getAll("locations")
    //      .then (locations => newState.locations = locations))
    //         .then(() => apiCalls.getAll("owners")
    //         .then (owners => newState.owners = owners))
    //           .then(() => this.setState(newState))
  }


  delete = (dataName, id) => {
    const API = new APIManager()
    return API.deleteAndGrag(dataName, id)
      .then(newdata => {
        this.setState({
          [dataName]: newdata
        }
        )
      })
  }


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail {...props} deleteLocation={this.delete} locations={this.state.locations} />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props} delete={this.delete} animals={this.state.animals} />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail {...props} deleteAnimal={this.delete} animals={this.state.animals} />
        }} />
        <Route path="/animals/new" render = {(props) => {
          return <AnimalForm {...props}
                    addAnimals = {this.addAnimal}
                    employees = {this.state.employees} />
        }
        } />
        <Route exact path="/employee" render={(props) => {
          return <EmployeeList delete={this.delete} employees={this.state.employees} />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeDetail {...props} deleteEmployee={this.delete} employees={this.state.employees} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnersList delete={this.delete} owners={this.state.owners} />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          return <OwnerDetail {...props} deleteOwner={this.delete} owners={this.state.owners} />
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews
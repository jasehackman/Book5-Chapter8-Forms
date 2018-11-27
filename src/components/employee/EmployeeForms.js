import React, {Component} from 'react'
import './Employee.css'

export default class EmployeeForm extends Component {
  //Set initial state
  state = {
    employeeName: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange);
  }
  // local method for validation, creating employee object, adn invoking the function
  // reference passed from parrent component
  constructNewEmployee = evt => {
    evt.preventDefault()
    if(this.state.employee === "") {
      window.alert("Please select a caretaker")
    } else {
      const employee = {
        name: this.state.employeeName,
      }
      // create the employee and redirect user to employee list
      this.props.addEmployee(employee).then(() => this.props.history.push("/employee"))
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className = "employeeForm list">
          <div className= "form-group">
              <label htmlFor="employeeName">Employee name</label>
              <input type = "text" required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="employeeName"
                      placeholder="Employee name"/>
          </div>
          <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }

}
import React, { Component } from 'react'
import { Link } from "react-router-dom";



class EmployeeList extends Component {
    render() {
        return (
          <React.Fragment>
            <div className = "employeeButton list">
              <button type="button"
                  className="btn btn-success"
                  onClick={() => {
                      this.props.history.push("/employee/new")
                  }}>
                  New Employee
                </button>
            </div>
            <section className="employees list">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <p>{employee.name}</p>
                        <Link className="nav-link" to={`/employee/${employee.id}`}>Details</Link>

                        <a href="#"
                          onClick={() => this.props.delete("employees", employee.id)}
                          className="card-link">Delete</a>
                    </div>
                )
            }
            </section>
          </React.Fragment>
        )
    }
}

export default EmployeeList
import React, { Component } from 'react'
import { Link } from "react-router-dom";



class EmployeeList extends Component {
    render() {
        return (
            <section className="employees list">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <p>{employee.name}</p>
                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>

                        <a href="#"
                          onClick={() => this.props.delete("employees", employee.id)}
                          className="card-link">Delete</a>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList
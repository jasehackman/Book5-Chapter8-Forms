import React, { Component } from 'react'
import { Link } from "react-router-dom";


class OwnersList extends Component {
  render() {
      return (

        <React.Fragment>
          <div className = "ownerButton list">
            <button type="button"
                className="btn btn-success"
                onClick={() => {
                    this.props.history.push("/owners/new")
                }}>
                New Owner
              </button>
          </div>
            <section className="owners list">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        {owner.name}
                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>

                    </div>
                )
            }
            </section>
          </React.Fragment>
      )
  }
}

export default OwnersList
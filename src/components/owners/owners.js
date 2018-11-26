import React, { Component } from 'react'
import { Link } from "react-router-dom";


class OwnersList extends Component {
  render() {
      return (
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
      )
  }
}

export default OwnersList
import React, { Component } from 'react'
import { Link } from "react-router-dom";



class LocationList extends Component {
  render() {
    return (
      <section className= "location list">
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              {location.name}
              <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
            </div>
            )
      }

      </section>
    )
  }
}

export default LocationList
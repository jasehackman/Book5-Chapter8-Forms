import React, {Component} from 'react'
import './Owner.css'

export default class OwnerForm extends Component {
  //Set initial state
  state = {
    ownerName: "",
    breed: "",
    employee: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange);
  }
  // local method for validation, creating owner object, adn invoking the function
  // reference passed from parrent component
  constructNewOwner = evt => {
    evt.preventDefault()

      const owner = {
        name: this.state.ownerName
      }
      // create the owner and redirect user to owner list
      this.props.addOwner(owner).then(() => this.props.history.push("/owners"))
  }

  render() {
    return (
      <React.Fragment>
        <form className = "ownerForm list">
          <div className= "form-group">
              <label htmlFor="ownerName">Owner name</label>
              <input type = "text" required
                      className="form-control"
                      onChange={this.handleFieldChange}
                      id="ownerName"
                      placeholder="Owner name"/>
          </div>

            <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }

}
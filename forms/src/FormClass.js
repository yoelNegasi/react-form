import React, { Component } from "react";

class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.submit = this.submit.bind(this);
    // this.setFirstName = this.setFirstName.bind(this);
    // this.setlastName = this.setLastName.bind(this);
  }
  submit(e) {
    e.preventDefault();
    console.log(this.state.firstName + " " + this.state.lastName);
  }
  setFirstName(e) {
    this.setState({ firstName: e.target.value });
  }
  setLastName(e) {
    this.setState({ lastName: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="first name"
            value={this.state.firstName}
            onChange={(e) => this.setFirstName(e)}
          />
          <input
            type="text"
            placeholder="last name"
            value={this.state.lastName}
            onChange={(e) => this.setLastName(e)}
          />
          <input type="submit" onClick={this.submit} />
        </form>
      </div>
    );
  }
}

export default FormClass;

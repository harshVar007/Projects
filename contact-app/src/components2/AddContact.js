
import React, { Component } from 'react'

class addContact extends Component {

    state = {

        name: " ",
        phone: " ",

    }

    add = (e) => {

        e.preventDefault();
        if (this.state.name === " " || this.state.phone === " ") {
            alert("All the fields are Mandatory");
            return;
        }

        this.props.addContactHandler(this.state);
        this.setState({ name: " ", phone: " " });

        this.props.history.push("/");

    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>NAME</label>
                        <input type='text' name='name' placeholder='Add Name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>

                    <div className="field">
                        <label>PHONE NUMBER</label>
                        <input type='text' name='phone' placeholder='Enter Phone Number' value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
                    </div>

                    <button className="ui button green">Add</button>
                </form>

            </div>
        )
    }
}

export default addContact;

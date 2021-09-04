
import React, { Component } from 'react'

class EditContact extends Component {

    constructor(props) {

        super(props)

        const { id, name, phone } = props.location.state.contact;
        this.state = {

            id, name, phone,


        }
    }

    update = (e) => {

        e.preventDefault();
        if (this.state.name === " " || this.state.phone === " ") {
            alert("All the fields are Mandatory");
            return;
        }

        this.props.updateContactHandler(this.state);
        this.setState({ name: " ", phone: " " });

        this.props.history.push("/");

    }

    render() {
        return (
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>NAME</label>
                        <input type='text' name='name' placeholder='Add Name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>

                    <div className="field">
                        <label>PHONE NUMBER</label>
                        <input type='text' name='phone' placeholder='Enter Phone Number' value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
                    </div>

                    <button className="ui button green">Update</button>
                </form>

            </div>
        )
    }
}

export default EditContact;

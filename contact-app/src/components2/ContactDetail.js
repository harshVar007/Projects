import React from 'react'
import user from '../images/user.png';
import { Link } from 'react-router-dom';

const ContactDetail = (props) => {

    //const { id, name, phone } = props.contact; /*destructuring props to id,name,phone*/
    const { name, phone } = props.location.state.contact;
    return (

        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="Usr_image" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{phone}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center" style={{ marginLeft: '520px' }} >
                        Home
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default ContactDetail;
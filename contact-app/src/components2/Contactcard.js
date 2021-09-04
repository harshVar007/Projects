import React from 'react'
import user from '../images/user.png';
import { Link } from 'react-router-dom';

const Contactcard = (props) => {

    const { id, name, phone } = props.contact; /*destructuring props to id,name,phone*/

    return (
        <div className='item'>
            <img className='ui avatar image' src={user} alt='user' />
            <div className='content '>
                <Link to={{ pathname: `./contact/${id}`, state: { contact: props.contact } }} >
                    <div className='header'>
                        {name}
                    </div>
                </Link>
                <div>
                    {phone}
                </div>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red" }}
                onClick={() => props.clickHandler(id)}

            ></i>
            <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
                <i
                    className="edit alternate outline icon"
                    style={{ color: "blue", marginTop: '5px' }}

                ></i>
            </Link>
        </div>
    )
}

export default Contactcard;

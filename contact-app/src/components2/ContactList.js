import React, { useRef } from 'react'
import Contactcard from './Contactcard';
import { Link } from 'react-router-dom';

function ContactList(props) {


    const inputEl = useRef("");
    const deleteContactHandler = (id) => {



        props.getContactId(id);

    }
    const renderContactList = props.contacts.map((contact) => {

        return <Contactcard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></Contactcard>

    });

    const getSearchTerm = () => {

        props.searchKeyword(inputEl.current.value);

    }

    return (
        <div className="main">
            <h2 className="header">Contact List
                <Link to="/add">
                    <button className="ui button blue" style={{ margin: '0px auto 0px 50px' }}>Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input type='text' placeholder='search' className="prompt" value={props.term} onChange={getSearchTerm} ref={inputEl} />
                    <i className='search icon' />
                </div>
            </div>
            <div className='ui celled list'>
                {renderContactList.length > 0 ? renderContactList : "No Contacts Available"}
            </div>
        </div>
    )
}

export default ContactList

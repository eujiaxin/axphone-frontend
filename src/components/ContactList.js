import React from "react";

const ContactList = () => {
    const contacts = [
        { id: 1, name: "Jia Xin", phoneNumber: "0123456678" },
        { id: 2, name: "Lucy", phoneNumber: "01543212334" },
    ];
    return (
        <div className="col-md-6 col-sm-10 mx-auto p-0 space-between">
            <ul className="list-group p-5">
                {contacts.map((contact) => (
                    <li className="list-group-item p-3">
                        <h2>{contact.name}</h2>
                        <span>{contact.phoneNumber}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;

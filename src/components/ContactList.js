import React from "react";

const ContactList = () => {
    const contacts = [
        { id: 1, name: "Jia Xin", phoneNumber: "0123456678" },
        { id: 2, name: "Lucy", phoneNumber: "01543212334" },
    ];
    return (
        <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
                <div className="list-group list-group-flush">
                    {contacts.map((contact) => (
                        <div>
                            <h1>{contact.name}</h1>
                            <span>{contact.phoneNumber}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactList;

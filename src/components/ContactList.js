import React from "react";

const ContactList = () => {
    const contacts = [
        { id: 1, name: "Jia Xin", phoneNumber: "0123456678" },
        { id: 2, name: "Lucy", phoneNumber: "01543212334" },
    ];
    return (
        <div className="col-md-6 col-sm-10 mx-auto p-0 space-between">
            <ul className="list-group p-5">
                {contacts.length === 0 ? (
                    <span className="text-center">
                        There are no contacts at the moment. Add new contacts
                        now!
                    </span>
                ) : (
                    contacts.map((contact) => (
                        <li className="list-group-item p-3 d-flex justify-content-between">
                            <div className="ms-2 me-auto">
                                <h2>{contact.name}</h2>
                                <span>{contact.phoneNumber}</span>
                            </div>
                            <button
                                class="btn btn-outline-dark"
                                type="button"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Edit"
                            >
                                Edit
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ContactList;

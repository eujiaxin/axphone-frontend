import { useState, useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import API from "../utils/API";
import Modal from "./Modal";

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    // edit data
    const [name, setName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [editId, setEditId] = useState(-1);

    const refreshContacts = () => {
        API.get("contacts/")
            .then((res) => {
                setContacts(res.data);
            })
            .catch(console.error);
    };

    const editHandler = (id) => {
        let item = { name, phone_number };
        API.patch(`contacts/${id}/`, item).then((res) => refreshContacts());
    };

    const deleteHandler = (id) => {
        API.delete(`contacts/${id}/`).then((res) => refreshContacts());
    };

    useEffect(() => {
        refreshContacts();
    }, [setContacts]);

    return (
        <>
            <div className="col-md-6 col-sm-10 mx-auto p-0 space-between">
                <ul className="list-group p-5">
                    {contacts.length === 0 ? (
                        <span className="text-center">
                            There are no contacts at the moment. Add new
                            contacts now!
                        </span>
                    ) : (
                        contacts.map((contact) => (
                            <>
                                <li
                                    className="list-group-item p-3 d-flex justify-content-between"
                                    key={contact.id}
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="h2">{contact.name}</div>
                                        <span className="h5">
                                            {contact.phone_number}
                                        </span>
                                    </div>
                                    <div
                                        className="btn-group-vertical"
                                        role="group"
                                    >
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark col-6"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editModal"
                                            onClick={() => {
                                                setEditId(contact.id);
                                                console.log(editId);
                                            }}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            class="btn btn-outline-danger col-6"
                                            type="button"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Delete"
                                            onClick={() =>
                                                deleteHandler(contact.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            </>
                        ))
                    )}
                </ul>
            </div>
            <Modal
                editHandler={editHandler}
                setName={setName}
                setPhoneNumber={setPhoneNumber}
                editId={editId}
                editContact={contacts.find((contact) => contact.id === editId)}
            />
        </>
    );
};

export default ContactList;

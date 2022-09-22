import { useState } from "react";

const Modal = (props) => {
    const [nameField, setNameField] = useState("");
    const [phoneNumberField, setPhoneNumberField] = useState("");

    const clearModal = () => {
        setNameField("");
        setPhoneNumberField("");
    };
    return (
        <div class="modal fade" id="editModal" tabIndex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editModalLabel">
                            Edit Contact
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3 px-3">
                                <label for="name" class="col-form-label">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder={
                                        props.editContact
                                            ? props.editContact.name
                                            : ""
                                    }
                                    onChange={(e) => {
                                        props.setName(e.target.value);
                                        setNameField(e.target.value);
                                    }}
                                    value={nameField}
                                />
                            </div>
                            <div class="mb-3 px-3">
                                <label
                                    for="phone_number"
                                    class="col-form-label"
                                >
                                    Phone Number:
                                </label>
                                <input
                                    class="form-control"
                                    id="phone_number"
                                    value={phoneNumberField}
                                    placeholder={
                                        props.editContact
                                            ? props.editContact.phone_number
                                            : ""
                                    }
                                    onChange={(e) => {
                                        props.setPhoneNumber(e.target.value);
                                        setPhoneNumberField(e.target.value);
                                    }}
                                />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                props.editHandler(props.editId);
                                clearModal();
                            }}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

import API from "../utils/API";

const Modal = (props) => {
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
                                    placeholder={props.originalName}
                                    onChange={(e) =>
                                        props.setName(e.target.value)
                                    }
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
                                    placeholder={props.originalPhoneNumber}
                                    onChange={(e) =>
                                        props.setPhoneNumber(e.target.value)
                                    }
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
                                props.editHandler(props.contactId);
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

import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/API";

const CreatePage = () => {
    // edit data
    const [name, setName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");

    const navigate = useNavigate();

    const createButtonHandler = (e) => {
        e.preventDefault();
        let contact = { name, phone_number };
        console.log(contact);
        API.post("contacts/", contact).then(() => navigate("/"));
    };

    return (
        <>
            <Navbar />
            <div className="row justify-content-md-center p-5">
                <div className="col-lg-4 col-md-6 col-sm-10 col-12">
                    <div className="card">
                        <div className="card-header">
                            <span className="fs-5 ">Create New Contact</span>
                        </div>
                        <div className="card-body p-5">
                            <form method="POST" className="g-3">
                                <div className="form-group mb-3">
                                    <label for="name" class="form-label">
                                        Name
                                    </label>
                                    <div className="col-auto">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            name="name"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label for="phoneNumber" class="form-label">
                                        Phone Number
                                    </label>
                                    <div className="col-auto">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            onChange={(e) =>
                                                setPhoneNumber(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div class="d-flex justify-content-center mt-5">
                                    <button
                                        type="submit"
                                        class="btn btn-primary btn-lg px-5"
                                        onClick={createButtonHandler}
                                    >
                                        Create
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePage;

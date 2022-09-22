import Navbar from "../components/Navbar";
const CreatePage = () => {
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
                                        />
                                    </div>
                                </div>

                                <div class="d-flex justify-content-center mt-5">
                                    <button
                                        type="submit"
                                        class="btn btn-primary btn-lg px-5"
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

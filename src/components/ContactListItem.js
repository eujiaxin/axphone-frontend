import React from "react";

const ContactListItem = (name, phoneNumber) => {
    return (
        <div>
            {name}: {phoneNumber}
        </div>
    );
};

export default ContactListItem;

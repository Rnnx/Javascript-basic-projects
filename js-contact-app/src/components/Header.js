import React from "react";

const Header = () => {
    return (
        //ui elements taken from semantic-ui
        <div className="ui fixed menu">
            <div className="ui container center">
                <h2>Contact Manager</h2>
            </div>
        </div>
    );
};

//exporting the header so that App.js can import it!
export default Header;
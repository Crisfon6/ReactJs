import React, { useState } from "react";
import "./App.css";
import GitHubUser from "./GitHubUser";

export default function App() {
    const [searchUser, setSearchUser] = useState("");
    const handleChange = (event) => {
        setSearchUser(event.target.value);
    }
    if (loading) return <h1 > Loading... < /h1>;
    if (error) return <p > { "Error: " + JSON.stringify(error) } < /p>;
    if (!data) return null;
    return ( <
        div >
        <
        input type = "text"
        placeholder = "search"
        value = { searchUser }
        onChange = { handleChange }
        /> <
        GitHubUser user = { searchUser }
        /> <
        /div>
    );
}
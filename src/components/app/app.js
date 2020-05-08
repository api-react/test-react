import React from "react";
import "./app.scss";
import Header from "../header";
import UserList from "../user-list";
import Footer from "../footer";

const App = ()  => {
    return(
        <div>
            <Header />
            <UserList />
            <Footer />
        </div>
    );
};

export default App;
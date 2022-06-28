/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom";

import Hero from "./Components/Hero/Hero";
import Form from "./Components/Form/Form";
import Modal from "./Components/Modal/Modal";

import "./App.css";
import SocialLogin from "./Components/SocialLogin/SocialLogin";

const App = () => {
  // Stores the form data
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newsletter: false,
  });
  const [userSignedUp, setUserSignedUp] = useState(false);

  return (
    <React.StrictMode>
      <div className="app">
        <Hero />
        <div className="container">
          {!userSignedUp ? (
            <div>
              <Form
                data={data}
                setData={setData}
                setUserSignedUp={setUserSignedUp}
              />
              <SocialLogin />
            </div>
          ) : (
            <Modal data={data} setData={setData} setUserSignedUp={setUserSignedUp} />
          )}
        </div>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

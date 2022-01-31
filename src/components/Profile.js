import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const sgMail = require("@sendgrid/mail");
const { SendMail } = require("../Includes/Sendgrid");

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  const gogogo = () => {
    SendMail(sgMail, {
      to: process.env.TOMAIL,
      from: process.env.FROMMAIL, // Use the email address or domain you verified above
      subject: "Sending with Twilio SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    });
    console.log("Send mail");
  };

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name} </h2>
        <p>{user.email} </p>
        {<JSONPretty data={user} />}
        <button
          onClick={() => {
            gogogo();
          }}
        >
          Send mail
        </button>
      </div>
    )
  );
};

export default Profile;

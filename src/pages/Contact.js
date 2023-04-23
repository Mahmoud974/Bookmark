import React, { useState } from "react";

const Contact = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email_client = document.querySelector(".email_client");
  const [typeTheMail, setTypeTheMail] = useState();
  const msg_error = document.querySelector(".msg_error");

  const sendMyForm = (e) => {
    e.preventDefault();
    if (!emailRegex.test(typeTheMail)) {
      msg_error.style.display = "flex";
      email_client.style.border = `hsl(0, 94%, 66%) 4px solid`;
    } else {
      msg_error.style.display = "none";
      email_client.style.border = `none`;
    }
  };
  return (
    <form className="send_mail" onSubmit={sendMyForm}>
      <small>35,00+ ALREADY JOINED</small>
      <h4>Stay up-to-date with what we're doing</h4>
      <div className="inputAndBtn">
        <div className="input_footer">
          <input
            type="email"
            className="email_client"
            placeholder="Enter your email adress"
            id="email_customer"
            onInput={(e) => setTypeTheMail(e.target.value)}
          />
          <input type="submit" value="Contact Us" className="btn_submit" />
        </div>
        <p className="msg_error" style={{ display: "none" }}>
          Whoops, make sure it's an email
        </p>
      </div>
    </form>
  );
};

export default Contact;

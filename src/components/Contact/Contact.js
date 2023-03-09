import "./Contact.css";
import React from "react";
import { TextField } from "@mui/material";
import { useState } from "react";
import SuccessAlert from "../SuccessAlert/SuccessAlert";

export default function Contact() {
  // Make them controlled textfields and add backend with mailing
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [openDialog, setOpenDialog] = useState(false);

  let sendMail = async (e) => {
    //https://niklas-burg.developerakademie.net/sendMail/send_mail/send_mail.php
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    await fetch(
      "https://niklas-burg.developerakademie.net/sendMail/send_mail/send_mail.php",
      {
        method: "POST",
        body: formData,
      }
    );
    setOpenDialog(true);

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div
      id="contact"
      className="black-background padding-top-l formContainerWrapper padding-bottom-l"
    >
      <div className="formContainer">
        <h1 className="secondary left smallSize"> Contact Me.</h1>
        <p className="white left mb-24 ">
          Get in touch via the form below or by emailing{" "}
          <span className="secondary"> niklasburg1999.nb@gmail.com</span>{" "}
        </p>
        <form className="formFields" onSubmit={(e) => sendMail(e)}>
          <div className="white left mb-12">Name</div>
          <input
            type="text"
            name="name"
            className="mb-12 textfeld"
            placeholder="Enter your Name "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="white left mb-12">Email Adress</div>
          <input
            type="text"
            name="spind"
            className="mb-12 textfeld"
            placeholder="Enter your Email address "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="white left mb-12">Message</div>
          <textarea
            name="message"
            id="text"
            placeholder="Enter your Message"
            className="mb-12 textarea"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="sendBtn" type="submit">
            {" "}
            Send Message
          </button>
        </form>
      </div>
      <SuccessAlert open={openDialog} setOpen={setOpenDialog} />
    </div>
  );
}

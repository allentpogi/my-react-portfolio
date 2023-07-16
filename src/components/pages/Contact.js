import React from "react";
import "../styles/style.css";

export default function Contact() {
  return (
    <div id="contact" className="jumbotron text-center container-fluid">
      <h1 className="margin-bottom">Contact</h1>
      <div className="row">
        <div className="col-sm-12 text-center">
          <p>Leave a message and I'll get back to you the soonest I can.</p>
        </div>
        <div className="col-sm-12">
          <div className="contact-form">
            <div className="row">
              {["name", "email"].map((name) => (
                <div className="col-sm-4" key={name}>
                  <input
                    className="form-control"
                    id={name}
                    name={name}
                    placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                    type={name === "email" ? "email" : "text"}
                    required
                  />
                </div>
              ))}
            </div>
            <div className="row margin-bottom">
              <div className="col-sm-8">
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  placeholder="<Message>"
                  rows="15"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-1">
              <button className="btn-form margin-bottom" type="submit">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

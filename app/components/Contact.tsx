"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    
  const [fname, setFname] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: any) {
    e.preventDefault(); // prevents the default behaviour of the form

    emailjs
      .sendForm(
        "service_zjfyyqs",
        "template_b78r6kd",
        e.target,
        "g2LcqesHc5RLfEpaO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFname("");
    setMail("");
    setMessage("");
  }

  return (
    <div id="contact" className="pt-10 pb-4 w-full flex flex-col items-center justify-start gap-4">
      <h1 className="font-bold text-3xl text-center">Get in touch</h1>
      <form id="myForm" onSubmit={sendEmail} className="flex flex-col items-center justify-start space-y-8 w-96 px-12 py-8 bg-[#4D1F29] rounded-md">
        <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" name="name" id="name" autoComplete="name" className="appearance-none bg-transparent focus:outline-none flex w-full border-b text-white placeholder:text-white py-1 text-sm leading-6" placeholder="Name"/>
        <input value={mail} onChange={(event) => setMail(event.target.value)} type="email" name="email" id="email" autoComplete="email" className="appearance-none bg-transparent focus:outline-none flex w-full border-b text-white placeholder:text-white py-1 text-sm leading-6" placeholder="Email address"/>
        <div className="w-full flex flex-col items-start justify-start space-y-2">
        <p className="text-white w-full text-sm">Message</p>
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} id="message" name="message" className="flex h-32 w-full rounded-md border text-white p-4 bg-transparent focus:outline-none sm:text-sm sm:leading-6"></textarea>
        </div>
        <button className="bg-white rounded-md px-8 py-2 text-sm" type="submit">Send message</button>
      </form>
      </div>
  );
};

export default Contact;

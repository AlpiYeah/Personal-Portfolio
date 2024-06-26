import Circles from "/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import React, { useState } from "react";
import axios from "axios";
import { Toaster, useToaster, toast } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    toast.loading("Please wait...", {
      style: {
        borderRadius: "10px",
        background: "#291e4d",
        color: "#fff",
      },
    });

    setTimeout(() => {
      toast.success("E-mail was sent successfully!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#291e4d",
          color: "#fff",
        },
      });
    }, 2000);

    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await axios.post("/api/send", formData);
      if (response.status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        alert("Message sent successfully!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error.response.data);
    }
  };
  return (
    <div className="h-full bg-primary/30">
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 2000,
        }}
      />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                autoComplete="name"
                value={name}
                placeholder="name"
                className="input"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                autoComplete="email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              name="subject"
              value={subject}
              className="input"
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="message"
              name="message"
              value={message}
              className="textarea"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

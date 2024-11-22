import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

import { slideIn } from "../utils/motion";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);

    setForm({ ...form, [name]: sanitizedValue });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!form.name || !form.email || !form.message) {
  //     alert("All fields are required.");
  //     return;
  //   }

  //   const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  //   if (!emailPattern.test(form.email)) {
  //     alert("Please enter a valid email address.");
  //     return;
  //   }

  //   setLoading(true);

  //   emailjs
  //     .send(
  //       process.env.NEXT_PUBLIC_SERVICE_ID,
  //       process.env.NEXT_PUBLIC_TEMPLATE_ID,
  //       {
  //         from_name: DOMPurify.sanitize(form.name),
  //         to_name: "Satyanarayana Merla",
  //         from_email: DOMPurify.sanitize(form.email),
  //         to_email: "merlasatyanarayana123@gmail.com",
  //         message: DOMPurify.sanitize(form.message),
  //       },
  //       process.env.NEXT_PUBLIC_EMAILJS_KEY
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you for your message. I will get back to you soon.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.log(error);
  //         alert("Something went wrong. Please try again later.");
  //       }
  //     );
  // };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="xl:my-36 md:w-3/5 w-full bg-bgSecondaryDark xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-md shadow-primary"
      id="contact"
    >
      <p className={"sectionSubText text-ctnSecondaryDark"}>Get in touch</p>
      <h3 className={"sectionHeadText text-ctnPrimaryDark"}>Contact.</h3>

      <p className="text-gray-400">
      Want to chat or have a conversation? WhatsApp or call me directly at <b className="text-gray-200">+91 9493474149</b>. Alternatively, email me at <b className="text-gray-200">merlasatyanarayana123@gmail.com</b>, and I’ll get back to you soon. I will ignore all soliciting.
      </p>
    </motion.div>
  );
}

export default Contact;

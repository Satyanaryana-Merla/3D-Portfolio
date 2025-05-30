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

      <div className="mt-8 space-y-6">
        <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
          <h4 className="text-lg font-semibold text-white mb-3">Let's Connect!</h4>
          <p className="text-gray-300 mb-4">
            I'm currently <span className="text-primary font-semibold">open to new opportunities</span> in Data Science, 
            Machine Learning Engineering, and Data Engineering roles. Looking for someone who can transform your data into actionable insights? Let's talk!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">📍</span>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-gray-400">Hyderabad, India</p>
                <p className="text-gray-500 text-sm">Open to Remote & Relocation</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">⏰</span>
              <div>
                <p className="font-semibold text-white">Availability</p>
                <p className="text-gray-400">Immediate</p>
                <p className="text-gray-500 text-sm">Full-time positions preferred</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-primary mt-1">📧</span>
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:merlasatyanarayana123@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                  merlasatyanarayana123@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-700">
          <p className="text-gray-500 text-sm italic">
            💡 Feel free to reach out via email for any professional inquiries or opportunities
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;

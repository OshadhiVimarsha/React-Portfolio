import { createElement, useRef, useEffect } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const { Contact: contactContent } = content;
  const form = useRef();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nohv2la",     
        "template_0jxhbec",     
        form.current,
        "qMBWYoXr1TJc3Z6OB"   
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email sent successfully! ✅", {
            duration: 4000,
            position: "top-right",
          });
        },
        (error) => {
          console.log(error.text);
          // Error toast message
          toast.error("Failed to send email ❌", {
            duration: 4000,
            position: "top-right",
          });
        }
      );
  };

  return (
    <section className="bg-cyan-900 text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {contactContent.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {contactContent.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-cyan-600 p-3 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
              required
              className="border border-cyan-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-cyan-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary px-6 py-3 rounded shadow-md hover:shadow-lg transition"
            >
              Submit
            </button>
          </form>

          {/* Social Media Links */}
          <div className="flex-1 flex flex-col gap-5">
            {contactContent.social_media.map((item, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(item.icon)}</h4>
                <a
                  className="font-Poppins text-white underline"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

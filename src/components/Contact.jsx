import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault(); // prevent default form submission

    emailjs
      .sendForm(
        "service_3n8xbix",
        "personal_website",
        form.current,
        "user_RYevFp6mtIxGCcmTimhuP"
      )
      .then(
        () => {
          console.log("Message sent successfully!");
        },
        (error) => {
          console.log("Failed to send message...", error.text);
        }
      );

    e.target.reset(); // Reset the form after submission
    let button = e.target[3];
    button.style.color = "white";
    button.style.backgroundColor = "green";
    button.innerText = "Message Sent";
  };

  return (
    <>
      <form
        ref={form}
        className="contact_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="first">
          <ul>
            <li>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
              />
              {errors.name && errors.name.type === "required" && (
                <span>Name is required</span>
              )}
            </li>

            <li>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                type="email"
                placeholder="Email"
              />
              {errors.email && <span role="alert">{errors.email.message}</span>}
            </li>

            <li>
              <textarea
                {...register("subject", { required: true })}
                placeholder="Message"
              ></textarea>
              {errors.subject && <span>Subject is required.</span>}
            </li>
          </ul>
        </div>

        <div className="tokyo_tm_button">
          <button type="submit" className="white-fill-bg fill-black">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;

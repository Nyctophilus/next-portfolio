"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import writeUserData from "./write-firebase";
import readfirebase from "./read-firebase";
import firebase from "./firebase";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState({
    isSubmitted: false,
    user: {},
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userId: "_" + Math.random().toString(36).substring(2, 9),
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    firebase;
    writeUserData(data);

    const fireData = readfirebase(data.userId);
    console.log(fireData);

    if (fireData.username)
      setEmailSubmitted({
        isSubmitted: true,
        user: fireData,
      });

    console.log(`Message sent successfully.
	  ${fireData.message}`);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Nyctophilus">
            <Image
              src="https://www.svgrepo.com/show/516640/github.svg"
              alt="Github Icon"
              width={50}
              height={50}
              loading={"lazy"}
              style={{
                filter:
                  "invert(60%) sepia(46%) saturate(5159%) hue-rotate(351deg) brightness(99%) contrast(110%)",
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/MuhammedFayad">
            <Image
              src="https://www.svgrepo.com/show/521725/linkedin.svg"
              alt="Linkedin Icon"
              width={50}
              height={50}
              loading={"lazy"}
              style={{
                filter:
                  "invert(60%) sepia(46%) saturate(5159%) hue-rotate(351deg) brightness(99%) contrast(110%)",
              }}
            />
          </Link>
          <Link href="https://codepen.io/nyctophilus">
            <Image
              src="https://www.svgrepo.com/show/330189/codepen.svg"
              alt="codepen Icon"
              width={50}
              height={50}
              loading={"lazy"}
              style={{
                filter:
                  "invert(60%) sepia(46%) saturate(5159%) hue-rotate(351deg) brightness(99%) contrast(110%)",
              }}
            />
          </Link>
        </div>
      </div>
      <div className="grid z-10">
        {emailSubmitted.isSubmitted ? (
          <p className="text-green-500 text-sm mt-2 self-center justify-self-center text-center w-[50%]">
            Hello {emailSubmitted.user.username}, thank you for reaching out!
            Your feedback is most appreciated. 😄
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 text-primary-600"
                placeholder="Muhammed Fayad"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 text-primary-600"
                placeholder="mo@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 text-primary-600"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 text-primary-600"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import heroImg from "../../../public/images/hero-image.png";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-12">
        <motion.div
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white mb-4 text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Muhammed Yousry",
                5000,
                "Web Developer",
                1000,
                "Nextjs",
                500,
                "Reactjs",
                500,
                "Tailwind",
                500,
                "Mongoose",
                500,
                "Computer Engineer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-sm mb-6 lg:text-lg">
            I&apos;m Computer Engineering graduate specializing in Web
            Development. I fond of creating beautiful fluid eye-pleasing
            websites. I&apos;m a highly self-motivated Agilest developer, I
            create full-stack web apps by (Next14|Tailwind|Mongoose)
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1LLive-nR6Kphu_I38TpBJH41obWlfUTc/view"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="col-span-4 place-self-center mt-4 lg:mt-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duratidon: 0.5 }}
            >
              <Image
                src={heroImg}
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={450}
                height={450}
              />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

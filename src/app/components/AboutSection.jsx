"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Tabs from "./Tabs/Tabs";

const AboutSection = () => {
  return (
    <section className="container text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.figure
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duratidon: 0.5 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.6 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            loading={"lazy"}
            alt="about me image"
          />
        </motion.figure>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duratidon: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duratidon: 0.5, delay: 0.3 }}
            className="text-base lg:text-lg"
          >
            I graduated from Engineering Faculty, computer major. I got B-Eng
            Degree with total degree: &apos;B+&apos;
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duratidon: 0.5, delay: 0.3 }}
            className="text-base lg:text-lg"
          >
            Awkwardly, I love Javascript! I keen on learning new Techs and
            tools. I dedicate -easily- 6h/day. You can say it&apos;s more like a
            hobbit to me. Also reading self-development & tech books has become
            one of my lastest interests!💡
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duratidon: 0.5, delay: 0.3 }}
            className="text-base lg:text-lg"
          >
            My graduation project was in AI & Machine learning specialization.
            GANS model to colorize grey scale videos based on Generative
            adversarial networks deep learning techniques. I got grade
            &apos;A&apos; on the project
          </motion.p>

          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

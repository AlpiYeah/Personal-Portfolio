import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import react, { useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import CountUp from "react-countup";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Web Developer - Freelance",
        stage: "2020 - 2023",
      },
      {
        title: "Intern - University of Bremen",
        stage: "2018",
      },
    ],
  },
  {
    title: "Awards",
    info: [
      {
        title: "Best final Project Award - WBS Coding School",
        stage: "2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development Certification - WBS Coding School",
        stage: "2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className=" h-full text-center py-32 bg-primary/30 xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        exit="hidden"
        animate="show"
        className=" absolute hidden xl:flex -bottom-2.5 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className=" flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className="h2"
          >
            Captivating <span className=" text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:-mb-12 px-2 xl:px-0"
          >
            Growing up in a small village in Bulgaria I was always fascinated by
            all Technology but never had the access to it.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            exit="hidden"
            animate="show"
            className=" hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className=" flex flex-1 xl:gap-x-4">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} duration={5} end={10} />+
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4px] max-w-[100px]">
                  Years of Experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} duration={5} end={50} />+
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4px] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
              <div className="relative flex-1 ">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} duration={5} end={85} />+
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4px] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          exit="hidden"
          animate="show"
          className=" flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  className=" flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  key={itemIndex}
                >
                  <div className=" font-light mb-2 md:mb-0">{item.title}</div>
                  <div className=" hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className=" flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className=" text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

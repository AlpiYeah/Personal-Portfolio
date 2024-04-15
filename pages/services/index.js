import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className=" h-full bg-primary/30 py-64 flex items-center">
      <Circles />
      <div className=" container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              animate="show"
              initial="hidden"
              exit="hidden"
              className="h2 xl:mt-5"
            >
              My Services<span className=" text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              animate="show"
              initial="hidden"
              exit="hidden"
              className=" mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              From innovatingly stunning website design to persuasive
              copywriting, and from boosting online visibility with SEO to
              creating impactful brand identities, my comprehensive suite of
              services is here to elevate your online presence and drive
              tangible results.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            animate="show"
            initial="hidden"
            exit="hidden"
            className=" w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

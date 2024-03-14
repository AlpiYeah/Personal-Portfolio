import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className=" h-full bg-primary/30 flex items-center">
      <Circles />
      <div className=" container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My Services<span className=" text-accent">.</span>
            </h2>
            <p className=" mb-4 max-w-[400px] mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
            </p>
          </div>
          <div className=" w-full xl:max-w-[60%]">
            <ServiceSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

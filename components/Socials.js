// links
import Link from "next/link";

// icons
import { RiLinkedinBoxLine, RiGithubFill, RiGithubLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg sm:mt-(-10) ">
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/alper-syuleyman-a19018273/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        target="_blank"
        href={"https://github.com/AlpiYeah"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Socials;

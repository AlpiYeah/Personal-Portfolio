import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div>
          <Link href={"/"}>
            {" "}
            <Image src={"/logo2.svg"} width={320} height={100} />{" "}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none ">
      <Image
        src={"/avatar2.png"}
        width={550}
        height={550}
        alt="picture of Alper"
      />
    </div>
  );
};

export default Avatar;

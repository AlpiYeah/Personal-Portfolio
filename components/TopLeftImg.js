import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div>
      <Image
        src="/top-left-img.png"
        alt="top left image"
        width={400}
        height={400}
        className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50"
      />
    </div>
  );
};

export default TopLeftImg;

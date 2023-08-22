import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div>
      <Image
        src="/top-left-img.png"
        width={400}
        height={400}
        className="absolute left-0 top-0 mix-blend-color-dodge"
      />
    </div>
  );
};

export default TopLeftImg;

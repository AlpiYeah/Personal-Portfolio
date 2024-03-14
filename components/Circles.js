import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -bottom-2 -right-16 mix-blend-color-dodge animate-[pulse_6s_infinite] duration-75 z-10">
      <Image
        src="/circles.png"
        width={260}
        height={200}
        className="h-full w-full "
        alt=" "
      />
    </div>
  );
};

export default Circles;

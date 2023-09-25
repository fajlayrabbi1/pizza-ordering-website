import Image from 'next/image';

const HeroSection = () => {
  return (
    <header className="w-full h-screen flex flex-col justify-center items-center bg-primary relative overflow-hidden">
      <div>
        <h1 className="text-5xl text-center mt-[-8rem] text-secondary font-fancy">
          Do not miss it
        </h1>

        <h2 className="text-6xl text-center mt-4 text-tertiary font-title">
          PIZZA TASTES BETTER  THAN SKINNY FEELS.
        </h2>

        <div className="w-full flex justify-center mt-6">
          <button className="btn bg-secondary">GET IT NOW</button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-44">
        <Image
          src="/bg2.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </header>
  );
};

export default HeroSection;

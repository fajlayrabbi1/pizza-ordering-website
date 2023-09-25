import Hero_Section from "@/components/Hero_Section";
import Navbar from "@/components/Mobile_Navbar";

const page = () => {
  return (
    <div className="bg-tertiary">
      <header>
        <Navbar />
        <Hero_Section />
      </header>

      <div className="bg-secondary h-96 w-full"></div>

    </div>
  );
};

export default page;

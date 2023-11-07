import Image from "next/image";
import maria from "@/assets/images/maria.jpg";

const About: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-12 ">
      <div className="flex items-center justify-center gap-32 w-5/6">
        <Image src={maria} alt="founder of vivid art admin" className="w-2/5" />
        <div>
          <h1 className="text-4xl pb-4">Our Story</h1>
          <p className="text-xl">
            Vivid Art Studio, birthed and curated by Maria Shmarina, a Swedish
            Russian artist who has roamed the globe, gathering inspiration from
            every corner. Maria's brush dances with the hues of her worldly
            adventures, infusing her creations with the vibrancy of cultures and
            places. From her heart to your home, welcome to a world of art that
            resonates with the echoes of Maria's global sojourns."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className=" sm:p-8 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className=" text-6xl text-white sm:text-6xl md:7xl lg:text-8xl sm:max-w-xl  max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;

import Button from "@/components/ui/button";
const CommissionForm: React.FC = () => {
  return (
    <form
      className="    p-16 pb-28 mb-12"
      action={"https://formsubmit.co/4a425f46eccb1a1d7513dbc7ab1d231f"}
      method="POST"
    >
      <div className="flex justify-center text-center">
        <h2 className="text-5xl  pb-12 ">Inquiry form</h2>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2  ">
        <div className="flex flex-col">
          <label className="mb-2 text-xl" htmlFor="name">
            Full name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tom Smith"
            name="name"
            required
            className="text-xl rounded-md p-2 border border-black "
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-xl" htmlFor="email">
            Email address:
          </label>
          <input
            id="email"
            type="email"
            placeholder="tomsmith@gmail.com"
            name="email"
            required
            className="text-xl rounded-md p-2 border border-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-xl" htmlFor="phone">
            Mobile number:
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+44 7443819300"
            name="phone"
            className="text-xl rounded-md p-2 border border-black"
          />
        </div>

        <div className="flex justify-center items-end">
          <Button
            className="flex items-center justify-center text-xl w-3/4  rounded-md border bg-black border-black text-white  hover:bg-white transition  ease-in-out  hover:text-black"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CommissionForm;

import Button from "@/components/ui/button";

const CommissionForm: React.FC = () => {
  return (
    <form
      className="w-2/3 pb-28 my-16 mx-auto"
      action="https://formsubmit.co/4a425f46eccb1a1d7513dbc7ab1d231f"
      method="POST"
    >
      <div className="text-center">
        <h2 className="text-5xl pb-4">Contact us</h2>
        <h3 className="text-2xl pb-12">
          We'd love to hear from you. Use the form below to send us a message.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
            className="text-xl rounded-md p-2 border border-black"
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

        <div className="flex flex-col col-span-1 md:col-span-2">
          <label className="mb-2 text-xl" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Type your message here"
            name="message"
            required
            className="text-xl rounded-md p-2 border border-black"
          />
        </div>

        <div className="flex items-center justify-center md:justify-start">
          <Button
            className="text-xl w-3/4 rounded-md border bg-black border-black text-white hover:bg-white transition ease-in-out hover:text-black"
            type="submit"
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CommissionForm;

"use client";
import { useState, FormEvent } from "react";
import Button from "@/components/ui/button";
const CommissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch("https://formsubmit.co/4a425f46eccb1a1d7513dbc7ab1d231f", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form className=" grid grid-cols-2 gap-4 " onSubmit={handleSubmit}>
      {/* <div> */}
      <div>
        <label className="pr-5" htmlFor="name">
          Full name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Tom Smith"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="pr-5" htmlFor="email">
          Email address:
        </label>
        <input
          id="email"
          type="email"
          placeholder="tomsmith@gmail.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {/* </div> */}
      {/* <div> */}
      <div>
        <label className="pr-5" htmlFor="phone">
          Mobile number:
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+44 7443819300"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <Button
        className="flex items-center px-4 py-2 rounded-full border border-black"
        type="submit"
      >
        Submit
      </Button>
      {/* </div> */}
    </form>
  );
};

export default CommissionForm;

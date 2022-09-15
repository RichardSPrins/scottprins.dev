import { MdEmail } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { Form, useActionData } from "@remix-run/react";
import { ActionFunction, json } from "@remix-run/node";
import * as React from "react";
import { sendContactEmail } from "~/utils/contact-form.server";
import { formatPhoneNumber } from "~/utils/helpers";

type ErrorFields = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  budget?: string;
  info?: string;
};

export const action: ActionFunction = async ({ request }) => {
  const fields = await request.formData();
  const errors: ErrorFields = {};

  const firstName = fields.get("firstName");
  const lastName = fields.get("lastName");
  const email = fields.get("email");
  const phoneNumber = fields.get("phoneNumber");
  const budget = fields.get("budget");
  const info = fields.get("info");

  if (typeof firstName !== "string" || !firstName.length) {
    errors.firstName = "Please enter your first name.";
  }
  if (typeof lastName !== "string" || !lastName.length) {
    errors.lastName = "Please enter your last name.";
  }
  if (typeof email !== "string" || !email.match(/^\S+@\S+$/)) {
    errors.email = "Please use a valid email address.";
  }
  if (typeof phoneNumber !== "string" || !phoneNumber.length) {
    errors.phoneNumber =
      "Please provide contact info so I can reach out promptly.";
  }
  if (
    typeof budget !== "string" ||
    !budget.length ||
    budget === "Select your budget range"
  ) {
    errors.budget = "Please select a budget range.";
  }
  if (typeof info !== "string" || !info.length) {
    errors.info =
      "Please share a bit about your project, It really helps me get an idea of what to talk wbout in our discovery call.";
  }

  if (Object.keys(errors).length) {
    return json(errors, { status: 422 });
  }

  const contactDetails = {
    name: firstName + " " + lastName,
    email: email as string,
    budget: budget as string,
    phoneNumber: phoneNumber as string,
    info: info as string,
  };

  await sendContactEmail(contactDetails);
  return json({ status: 200 });
};

export default function ContactPage() {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const errors = useActionData<ErrorFields>();

  const handleFormatPhoneNumber = (e: any) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap min-h-screen flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 px-4 md:p-0 lg:mt-24 lg:pr-8">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Ready to book a call?
          </h1>
          <p className="text-2xl mt-4 leading-relaxed">
            Looking to bring your next idea to life? Does your new business need
            a web presence that stands out among the crowd? Reach out through
            the form and I'll get back to you within the next 48 hours.
          </p>
          <div className="my-8 lg:my-12 flex items-center">
            <MdEmail className="text-6xl mr-4 text-teal-500" />
            <a href="mailto:richardsprins@gmail.com">
              <p>richardsprins@gmail.com</p>
            </a>
          </div>
          <div className="my-8 lg:my-12 flex items-center">
            <RiPhoneFill className="text-6xl mr-4 text-teal-500" />
            <a href="tel:+14582097735">
              <p>(458) 209-7735</p>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 md:p-0 lg:mt-24">
          <Form method="post">
            <div className="flex flex-wrap">
              <div className="md:pr-4 w-full md:w-1/2">
                <label htmlFor="firstName" className="block">
                  First Name
                </label>
                <input
                  // required
                  name="firstName"
                  placeholder="First Name"
                  className="bg-gray-200 h-12 px-4 w-full"
                />
                {errors?.firstName && (
                  <div className="mt-2 bg-red-100 p-1 text-red-500">
                    {errors.firstName}
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <label htmlFor="lastName" className="block">
                  Last Name
                </label>
                <input
                  // required
                  name="lastName"
                  placeholder="Last Name"
                  className="bg-gray-200 h-12 px-4 w-full"
                />
                {errors?.lastName && (
                  <div className="mt-2 bg-red-100 p-1 text-red-500">
                    {errors.lastName}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email Address</label>
              <input
                // required
                name="email"
                placeholder="Email Address"
                className="bg-gray-200 h-12 px-4 w-full"
              />
              {errors?.email && (
                <div className="mt-2 bg-red-100 p-1 text-red-500">
                  {errors.email}
                </div>
              )}
            </div>
            <div className="mt-4">
              <label htmlFor="email">Phone Number</label>
              <input
                // required
                value={phoneNumber}
                onChange={(e) => handleFormatPhoneNumber(e)}
                name="phoneNumber"
                placeholder="(123)456-7890"
                className="bg-gray-200 h-12 px-4 w-full"
              />
              {errors?.phoneNumber && (
                <div className="mt-2 bg-red-100 p-1 text-red-500">
                  {errors.phoneNumber}
                </div>
              )}
            </div>
            <div className="mt-4">
              <label htmlFor="budget">Budget</label>
              <select
                className="bg-gray-200 h-12 px-4 w-full"
                defaultValue="Select your budget range"
                name="budget"
              >
                <option value="$500-1000">$500-$1000</option>
                <option value="$1k-3k">$1000-$3000</option>
                <option value="$3k-5k">$3000-$5000</option>
                <option value="$5k-10k">$5000-$10,000</option>
                <option value="$10k+">$10,000 or more</option>
              </select>
              {errors?.budget && (
                <div className="mt-2 bg-red-100 p-1 text-red-500">
                  {errors.budget}
                </div>
              )}
            </div>
            <div className="mt-4">
              <label>Tell Me More About Your Project...</label>
              <textarea name="info" className="bg-gray-200 h-36 px-4 w-full" />
              {errors?.info && (
                <div className="mt-2 bg-red-100 p-1 text-red-500">
                  {errors.info}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="my-4 bg-teal-500 text-white hover:shadow-lg transition-all ease-in-out duration-150 font-semibold py-2 px-4 rounded shadow"
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

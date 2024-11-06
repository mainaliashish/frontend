import React from "react";
import { useForm } from "react-hook-form";
import { useContact } from "./useContactForm";
import MiniSpinner from "../../ui/MiniSpinner";

const ContactForm = () => {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { isLoading, contactFormFn } = useContact();

  const onSubmit = ({ name, mobile, email, message }) => {
    contactFormFn(
      { name, mobile, email, message },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 rounded-lg shadow-lg w-full bg-stone-100 mt-8 mx-2"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("name", {
              required: "The name field is required.",
            })}
            className={`w-full px-4 py-2 border ${
              errors?.name?.message ? "border-red-600" : "border-gray-300"
            } rounded-md`}
            disabled={isLoading}
          />
          <p className="my-2 text-red-700 font-semibold">
            {errors?.name?.message}
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-gray-700 font-medium mb-2"
          >
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            {...register("mobile", {
              required: "The mobile number field is required.",
              pattern: {
                value: /^\d+$/,
                message: "The mobile number must be number.",
              },
              minLength: {
                value: 10,
                message: "The mobile number must be 10 characters",
              },
              maxLength: {
                value: 15,
                message: "The mobile number must be less than 15 characters",
              },
            })}
            className={`w-full px-4 py-2 border ${
              errors?.mobile?.message ? "border-red-600" : "border-gray-300"
            } rounded-md`}
            disabled={isLoading}
          />
          <p className="my-2 text-red-700 font-semibold">
            {errors?.mobile?.message}
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: "The email field is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email format.",
              },
            })}
            className={`w-full px-4 py-2 border ${
              errors?.name?.message ? "border-red-600" : "border-gray-300"
            } rounded-md`}
            disabled={isLoading}
          />
          <p className="my-2 text-red-700 font-semibold">
            {errors?.email?.message}
          </p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            {...register("message", {
              required: "The message field is requied.",
            })}
            rows="4"
            className={`w-full px-4 py-2 border ${
              errors?.name?.message ? "border-red-600" : "border-gray-300"
            } rounded-md`}
            disabled={isLoading}
          ></textarea>
          <p className="my-2 text-red-700 font-semibold">
            {errors?.message?.message}
          </p>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
          disabled={isLoading}
        >
          {isLoading ? (
            <MiniSpinner variant="white" customWidth="20" customPadding="4" />
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

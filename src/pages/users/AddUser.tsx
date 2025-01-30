import { CheckCircle } from "lucide-react";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const AddUser = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [generatePassword, setGeneratePassword] = useState(false);
    const [active, setActive] = useState(true);
    const [submitted, setSubmitted] = useState(false);
  
    // Validation Schema
    const userSchema = z.object({
      fullName: z.string().nonempty("Full Name is required"),
      email: z.string().email("Invalid email address"),
      organisation: z.string().nonempty("Organisation is required"),
      contact: z.string()
        .nonempty("Contact is required")
        .min(10, "Invalid Phone Number (Min 10 digits)")
        .max(15, "Invalid Phone Number"),
      joiningDate: z.string().nonempty("Joining Date is required"),
      role: z.string().nonempty("Role is required"),
      assignProgram: z.string().nonempty("Assign Program is required"),
    });
  
    const { register, handleSubmit, control, formState, reset } = useForm({
      resolver: zodResolver(userSchema),
    });
  
    const { errors } = formState;
  
    const onSubmit = (data) => {
      console.log("Form Submitted", data);
      setSubmitted(true)
      reset(); // Reset form fields after successful submission
    };
  
  return (
    <div className="tw-min-h-screen  tw-bg-gray-200">
      <header className="tw-bg-white tw-p-4 tw-shadow-md tw-top-0 tw-z-50">
        <div className="tw-flex tw-items-center tw-space-x-2">
          <h1 className="tw-text-xl tw-font-bold">Manage User</h1>
          <nav className="tw-text-lg tw-flex tw-items-center tw-space-x-1">
            <span className="tw-text-black tw-font-medium tw-text-sm">Home</span>
            <span>&gt;</span>
            <span className="tw-text-black tw-font-medium tw-text-sm">Manage User</span>
            <span>&gt;</span>
            <span className="tw-text-black tw-font-medium tw-text-sm">Add User</span>
          </nav>
        </div>
      </header>
      <div className="tw-container tw-mx-auto tw-mb-0 tw-px-4">
        <p className="tw-py-2 tw-text-xs">
          Users profiles store information about users. You can update user information later by clicking on the user profile.
        </p>
        <div className="tw-mb-0 tw-py-0">
          <button className="tw-text-blue-900 tw-py-2 tw-px-0 tw-rounded tw-underline">
            Data Import/Export
          </button>
        </div>
        <main className="tw-bg-white tw-p-8 md:tw-w-3/4 tw-rounded-lg tw-shadow-md tw-mt-0">
          <div className="tw-mb-0">
            <h2 className="tw-text-sm tw-space-x-2">
              <span className="tw-font-bold tw-text-blue-900">User ID</span>
              <span className="tw-font-bold tw-text-blue-900">:</span>
              <span className="tw-text-gray-500">AB12345</span>
            </h2>
          </div>
          <hr className="tw-mb-5" /> {/* Adjusted margin-bottom to decrease space */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tw-flex tw-flex-wrap tw-justify-between">
              <div className="tw-flex-1 tw-pr-2">
                <div className="tw-mb-4">
                  <label className="tw-block tw-text-black tw-text-sm tw-mb-2">Full Name</label>
                  <input
                    className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    type="text"
                    placeholder="Full Name"
                    {...register('fullName')}
                  />
                  {errors.fullName && (<p className="tw-text-red-500 tw-text-xs">{String(errors.fullName.message)}</p>)}
                </div>
                <div className="tw-mb-4">
                  <label className="tw-block tw-text-black tw-text-sm tw-mb-2">Email ID</label>
                  <input
                    className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    type="email"
                    placeholder="Yourname@gmail.com"
                    {...register('email')}
                  />
                  {errors.email && (<p className="tw-text-red-500 tw-text-xs">{errors.email.message as string}</p>)}
                </div>
                <div className="tw-mb-4">
                  <label className="tw-block tw-text-black tw-text-sm tw-mb-2">Organisation</label>
                  <input
                    className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    type="text"
                    placeholder="XYZ College"
                    {...register('organisation')}
                  />
                  {errors.organisation && (<p className="tw-text-red-500 tw-text-xs">{errors.organisation.message as string}</p>)}
                </div>
                <div className="tw-mb-4">
                  <span className="tw-text-black-100">Assign Program</span>
                  <span className="tw-text-gray-400">(can select many programs)</span>
                  <select
                    className="tw-shadow tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    {...register('assignProgram')}
                  >
                    <option value="" disabled hidden className="tw-text-black">Select Program</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="C++">C++</option>
                  </select>
                  {errors.assignProgram && (<p className="tw-text-red-500 tw-text-xs">{errors.assignProgram.message as string}</p>)}
                </div>
              </div>
              <div className="tw-flex-1 tw-pl-2">
                <div className="tw-mb-4">
                  <label className="tw-block tw-text-black tw-text-sm tw-mb-2">Contact</label>
                  <Controller
                    name="contact"
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        placeholder="Enter phone number"
                        {...field}
                        className="tw-shadow tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                        defaultCountry="US"
                      />
                    )}
                  />
                  {errors.contact && (<p className="tw-text-red-500 tw-text-xs">{errors.contact.message as string}</p>)}
                </div>
                <div className="tw-mb-4">
                  <label className="tw-block tw-text-black tw-text-sm tw-mb-2">Joining Date</label>
                  <input
                    className="tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-400 leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    type="date"
                    {...register('joiningDate')}
                  />
                  {errors.joiningDate && (<p className="tw-text-red-500 tw-text-xs">{errors.joiningDate.message as string}</p>)}
                </div>
                <div className="tw-mb-4">
                  <label className="tw-block tw-text-black tw-text-sm tw-mb-2">Assign Role</label>
                  <select
                    className="tw-shadow tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    {...register('role')}
                  >
                    <option value="" disabled hidden className="tw-text-black">Select Role</option>
                    <option value="Admin" className="tw-text-black">Admin</option>
                    <option value="Super Admin">Super Admin</option>
                    <option value="User">User</option>
                  </select>
                  {errors.role && (<p className="tw-text-red-500 tw-text-xs">{errors.role.message as string}</p>)}
                </div>
              </div>
            </div>

            {/* Checkbox: Generate Password, Active, Inactive */}
            <div className="tw-mt-0 tw-flex tw-space-x-4">
              <label className="tw-inline-flex tw-text-sm">
                <input
                  type="checkbox"
                  className="tw-form-checkbox tw-h-4 tw-w-4"
                  checked={generatePassword}
                  onChange={(e) => {
                    setGeneratePassword(e.target.checked);
                    if (e.target.checked) {
                      setShowDialog(true);
                    }
                  }}
                />
                <span className="tw-ml-2">Generate new password and notify user immediately</span>
              </label>
              <label className="tw-inline-flex tw-text-sm">
                <input
                  type="checkbox"
                  className="tw-form-checkbox tw-h-4 tw-w-4"
                  checked={active}
                  onChange={(e) => setActive(true)}
                  disabled={active}
                />
                <span className="tw-ml-2">Active</span>
              </label>
              <label className="tw-inline-flex tw-text-sm">
                <input
                  type="checkbox"
                  className="tw-form-checkbox tw-h-4 tw-w-4"
                  checked={!active}
                  onChange={(e) => setActive(false)}
                  disabled={!active}
                />
                <span className="tw-ml-2">Inactive</span>
              </label>
            </div>
            <p className="tw-py-2 tw-text-blue-900 tw-font-montserrat tw-text-xs">All fields are mandatory*</p>
            <hr className="tw-mb-2" /> {/* Adjusted margin-bottom to decrease space */}

            {/* Submit Button */}
            <button className="tw-bg-blue-900 hover:tw-bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-mt-2">
              Submit
            </button>
          </form>
        </main>
      </div>

      {/* Success Dialog */}
      {showDialog && (
        <div className="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
          <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-w-96 tw-p-6 tw-text-center">
            <CheckCircle className="tw-text-green-500 tw-w-12 tw-h-12 tw-mx-auto" />
            <h2 className="tw-text-lg tw-font-bold">Completed</h2>
            <p>We will share a link at username@gmail.com. The user can click the link to reset the password.</p>
            <button onClick={() => setShowDialog(false)} className="tw-bg-blue-900 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-mt-4">
              Continue
            </button>
          </div>
        </div>
      )}


{submitted && (
        <div className="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
          <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-w-96 tw-p-6 tw-text-center">
            <CheckCircle className="tw-text-green-500 tw-w-12 tw-h-12 tw-mx-auto" />
            <h2 className="tw-text-lg tw-font-bold">Completed</h2>
            <p>Details printed in console successfully.</p>
            <button onClick={() => setSubmitted(false)} className="tw-bg-blue-900 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-mt-4">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUser;
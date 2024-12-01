"use client";
import { setUserUUID } from "@/redux/feature/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { FormValues } from "@/types/FormType";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import * as Yup from "yup";
export default function FormLoginComponent() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required(" Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    // Toggle password visibility
  };

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: FormValues) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (res.status === 200) {
        const data = await res.json();
        const userUUid = data?.user?.data?.uuid;
        dispatch(setUserUUID(userUUid));
        router.push("/");
      } else {
        setIsSubmitting(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      <Form>
        {/* Emial */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-[14px] text-text_color_light block "
          >
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="username@gmail.com"
            className=" mt-1 w-full rounded-md border  bg-text_color_dark px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary_color"
          />
          <ErrorMessage
            name="email"
            component="div"
            className={` mt-1 text-sm text-custom_red`}
          />
        </div>
        {/* Emial */}

        {/* Password */}
        <div className="relative mb-4">
          <label
            htmlFor="password"
            className="text-[14px] text-text_color_light block"
          >
            Password
          </label>
          <div className="relative">
            <Field
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              className=" mt-1 w-full rounded-md border bg-text_color_dark px-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary_color"
            />

            {!showPassword ? (
              <IoEyeOffSharp
                onClick={() => handleShowPassword()}
                className="absolute right-2 top-5 cursor-pointer"
              />
            ) : (
              <IoEyeSharp
                onClick={() => handleShowPassword()}
                className="absolute right-2 top-5 cursor-pointer"
              />
            )}
          </div>

          <ErrorMessage
            name="password"
            component="div"
            className={` mt-1 text-sm text-custom_red`}
          />
        </div>
        {/* Forget Password */}
        <div className="text-end pb-5">
          <p className="text-link_color text-[14px] underline font-medium">
            Forget Password?
          </p>
        </div>
        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 bg-primary_color text-text_color_light font-semibold flex justify-center rounded-[10px]"
        >
          Log In
        </button>
      </Form>
    </Formik>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Field, Form, Formik } from "formik";
export default function page() {
  const initialValues = {
    email: "",
  };

  const handleSubmit = (values: any) => {};

  return (
    <main className="h-screen  w-full mx-auto flex ">
      {/* secontion welcome */}
      <section className=" hidden  h-full xl:flex flex-col items-center justify-between w-[60%] bg-primary_color py-[40px] ">
        <div className="w-full px-[100px]">
          <p className="text-[60px] text-text_color_light font-semibold leading-[1.2]">
            Verify Your <br />
            <span className="font-normal">Account</span>
          </p>
          <p className="text-text_body_16 text-ascend_color leading-[1.4] mt-2">
            To gain more access to our features
          </p>
        </div>

        <div className="w-full h-[500px] items-end flex justify-center">
          <Image
            width={600}
            height={600}
            className="object-cover"
            alt="image login"
            src="/images/Login_page_image.png"
          />
        </div>
      </section>
      <section className="h-full  my-auto w-[40%] bg-text_color_dark  p-[40px] flex flex-col ">
        <div className="w-full flex justify-between">
          {/* Logo and name */}
          <div className="w-full flex items-center">
            <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="font-medium text-text_color_light pl-3 text-text_title_20">
              Inspectra
            </p>
          </div>
          {/* Close icon */}
          <Link
            href={"/"}
            className="text-text_header_34 text-text_color_light items-center"
          >
            <RxCross2 className="h-full" />
          </Link>
        </div>
        <p className="text-text_header_34 font-semibold">Verify Account</p>
        <p className="text-text_body_16 text-text_color_desc_light">
          Enter your email for the verification process, we will send 6 digits
          code to your email.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form>
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
                className={`mt-1 w-full rounded-md border  bg-text_color_dark dark:text-text_color_light px-3 py-3 focus:outline-none focus:right-2 focus:border-primary_color `}
              />
            </div>

            <button
              type="submit"
              className="inline-block px-5 font-semibold bg-background_dark_mode py-2 rounded-tl-[20px] rounded-br-[20px] w-max"
            >
              <p className="text-text_color_dark text-text_body_16 font-normal">
                Submit
              </p>
            </button>
          </Form>
        </Formik>
      </section>
    </main>
  );
}

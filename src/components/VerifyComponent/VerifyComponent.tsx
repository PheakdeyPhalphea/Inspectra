"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
export default function VerifyComponent() {
  const initialValues: any = {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  };
  const validationSchema = Yup.object({
    otp1: Yup.string().required("OTP 1 is required "),
    otp2: Yup.string().required("OTP 2 is required "),
    otp3: Yup.string().required("OTP 3 is required "),
    otp4: Yup.string().required("OTP 4 is required "),
    otp5: Yup.string().required("OTP 5 is required "),
    otp6: Yup.string().required("OTP 6 is required "),
  });

  const handleSubmit = (value: any) => {};

  return (
    <section className="w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        <div className="flex justify-between m-5">
          <Field
            type="otp1"
            id="otp1"
            name="otp1"
            className={` w-[60px] h-[60px] border border-text_color_desc_light rounded-md text-center text-text_body_16  `}
          />
          <Field
            type="otp2"
            id="otp2"
            name="otp2"
            className={` w-[60px] h-[60px] border border-text_color_desc_light rounded-md text-center text-text_body_16 `}
          />
          <Field
            type="otp3"
            id="otp3"
            name="otp3"
            className={` w-[60px] h-[60px] border border-text_color_desc_light rounded-md text-center text-text_body_16 `}
          />
          <Field
            type="otp4"
            id="otp4"
            name="otp4"
            className={` w-[60px] h-[60px] border border-text_color_desc_light rounded-md text-center text-text_body_16 `}
          />
          <Field
            type="otp5"
            id="otp5"
            name="otp5"
            className={` w-[60px] h-[60px] border border-text_color_desc_light rounded-md text-center text-text_body_16 `}
          />
          <Field
            type="otp6"
            id="otp6"
            name="otp6"
            className={` w-[60px] h-[60px] border border-text_color_desc_light rounded-md text-center text-text_body_16 `}
          />
        </div>
      </Formik>
      <p className="text-text_title_20 font-normal text-ascend_color">2:00</p>
    </section>
  );
}

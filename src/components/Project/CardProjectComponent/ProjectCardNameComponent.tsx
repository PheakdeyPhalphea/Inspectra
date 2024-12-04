"use client";
import React from "react";

import { useGetAllProjectsNameQuery } from "@/redux/service/project";
import LoadProjectComponent from "../LoadingProjectComponent/LoadProjectComponent";
import { ProjectNameType } from "@/types/ProjectNameType";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxCross2 } from "react-icons/rx";
import { Field, Form, Formik } from "formik";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
export default function ProjectCardNameComponent() {
  const getAllProjectsName = useGetAllProjectsNameQuery({});
  const projectResultTotal = getAllProjectsName?.data?.data?.length;
  const projectResult = getAllProjectsName?.data?.data;

  type projectGitUrl = {
    projectGitUrl: string;
  };

  const initValues: projectGitUrl = {
    projectGitUrl: "",
  };

  const handleSubmit = (values: projectGitUrl) => {
    console.log(values);
  };
  return (
    <div>
      {projectResultTotal === 0 ? (
        <LoadProjectComponent />
      ) : (
        projectResult?.map((projectResult: ProjectNameType, index: number) => (
          <section
            key={index}
            className="w-full h-full md:h-[150px] my-5  p-5 border border-opacity-40 border-text_color_desc_light dark:border-primary_color rounded-[20px] "
          >
            <div className="flex justify-between w-full">
              <p className="text-text_body_16 text-secondary_color dark:text-text_color_dark ">
                {projectResult?.projectName}
              </p>
            </div>
            <hr className="my-5 dark:border-primary_color" />
            <div className="flex  items-center">
              <p className=" my-2 text-text_body_16 text-text_color_desc_light  dark:text-text_color_desc_dark ">
                {" "}
                Project&apos;s{" "}
                <span className="text-secondary_color truncate">
                  {projectResult?.projectName}
                </span>{" "}
                is not analyzed yet.{" "}
              </p>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <p className="text-link_color underline">Configure Project</p>
                </AlertDialogTrigger>
                <AlertDialogContent className=" w-[90%] md:w-full rounded-[20px] bg-text_color_dark h-full flex flex-col ">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex justify-between text-center items-center">
                      <p className="text-text_title_24 text-text_color_light">
                        {projectResult?.projectName}
                      </p>
                      <AlertDialogCancel className="flex text-center items-center">
                        <RxCross2
                          className="text-text_color_light  text-text_header_34"
                          style={{ height: "1em", width: "0.7em" }}
                        />
                      </AlertDialogCancel>
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  {/* git url */}
                  <Formik
                    initialValues={initValues}
                    onSubmit={(values) => {
                      handleSubmit(values);
                    }}
                  >
                    <Form>
                      <div className="relative">
                        <FaGithub className="absolute top-1/2 left-3 text-text_title_24 transform -translate-y-1/2 text-text_color_desc_light " />
                        <Field
                          type="text"
                          id="projectName"
                          name="projectName"
                          placeholder="Enter Git URL"
                          className="mt-1 w-full rounded-md border bg-text_color_dark dark:text-text_color_light pl-12 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-primary_color"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full mt-5 py-3 bg-primary_color text-text_color_light font-semibold flex justify-center rounded-[10px]"
                      >
                        Submit
                      </button>
                    </Form>
                  </Formik>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="">
                        <p className="text-text_body_16 text-text_color_light my-2">
                          Branch
                        </p>
                        <div className="flex px-5 justify-between items-center rounded-[10px] border border-ascend_color bg-background_light_mode">
                          <p className="text-text_body_16  py-3  text-text_color_desc_light">
                            Select Project Branch
                          </p>
                          <IoIosArrowDown className="text-text_color_light h-5 w-5  " />
                        </div>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem> Main</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>dev</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>prob</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/* select language */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="">
                        <p className="text-text_body_16 text-text_color_light my-2">
                          Programming Language
                        </p>
                        <div className="flex px-5 justify-between items-center rounded-[10px] border border-ascend_color bg-background_light_mode">
                          <p className="text-text_body_16  py-3  text-text_color_desc_light">
                            Select Language
                          </p>
                          <IoIosArrowDown className="text-text_color_light h-5 w-5  " />
                        </div>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem> Main</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>dev</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>prob</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </section>
        ))
      )}
    </div>
  );
}

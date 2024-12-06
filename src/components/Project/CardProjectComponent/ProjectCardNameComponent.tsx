"use client";
import { useEffect, useState } from "react";

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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useCreateProjectScanMutation,
  useGetProjectOverViewUserQuery,
} from "@/redux/service/project";

import { toast } from "@/components/hooks/use-toast";
import { GitUrlType } from "@/data/GitUrl";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import LoadProjectComponent from "../LoadingProjectComponent/LoadProjectComponent";
import ProjectCardComponent from "./ProjectCardComponent";
import { useRouter } from "next/navigation";
import {
  getCoverageData,
  getDuplicationData,
  getHourFromTimestamp,
} from "@/lib/utils";
import Image from "next/image";
import { number } from "yup";

export default function ProjectCardNameComponent() {
  const [userUUID, setUserUUID] = useState("");

  useEffect(() => {
    setUserUUID(localStorage.getItem("userUUID") || "");
  });

  const { data: projectResult, isError } = useGetProjectOverViewUserQuery({
    uuid: userUUID,
  });

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("Select Project Branch");
  const [
    createScanProject,
    { isSuccess: isScanSuccess, isError: isScanError },
  ] = useCreateProjectScanMutation();

  const [gitUrlResult, setGitUrl] = useState<string>(""); // Store the input value
  const [gitResult, setGitResult] = useState([]); // result get from git url

  // scan project
  const handleScanProject = (index: number) => {
    setSelectedIndex(index);
    setIsLoading(true);
    createScanProject({
      project: {
        projectName: projectResult[index].projectName,
        gitUrl: gitUrlResult,
        branch: selectedBranch,
      },
    });
  };
  useEffect(() => {
    if (isScanSuccess && selectedIndex !== null) {
      toast({
        description: "Project created successfully",
        variant: "success",
      });
      router.push(`/project/${projectResult[selectedIndex].projectName}`);
      setSelectedIndex(null); // Reset selected index
    }

    if (isScanError) {
      toast({
        description: "Project is Current in Use",
        variant: "error",
      });
      setIsLoading(false);
    }
  }, [isScanSuccess, isScanError, selectedIndex]);

  // const [listDirectories, setListDirectories] = useState<{
  //   files: any[];
  //   subdirectories?: any[];
  // } | null>(null); // result get from git url

  // handle for git input from user and fetch api

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const fetchGitbranch = async () => {
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}gits/branches?gitUrl=${gitUrlResult}`
        );
        if (data.ok) {
          toast({
            description: "Get All Branches Successfully",
            variant: "success",
          });
        }
        const result = await data.json();
        setGitResult(result);
      };
      fetchGitbranch();
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGitUrl(e.target.value); // Update the state with the input value
  };
  // handle on get all Directories from user after git url and selecet branch
  // const handleFetchDirectories = async () => {
  //   if (selectedBranch !== "Select Project Branch" && gitUrlResult) {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}gits/list_files?gitUrl=${gitUrlResult}&branch=${selectedBranch}`
  //     );
  //     const data = await response.json();
  //     setListDirectories(data);
  //   } else {
  //     console.log("error");
  //   }
  // };
  // useEffect(() => {
  //   if (selectedBranch !== "Select Project Branch" && gitUrlResult) {
  //     handleFetchDirectories();
  //   }
  // }, [selectedBranch, gitUrlResult]);

  return (
    <div>
      {isError ? (
        <LoadProjectComponent />
      ) : (
        projectResult?.map((projectResult: any, index: number) => {
          if (projectResult?.component.component.measures != 0) {
            return (
              <section
                key={index}
                onClick={() =>
                  router.push(
                    `project/${projectResult?.component.component.name}`
                  )
                }
                className="w-full my-5 h-full md:h-[330px] lg:[350px] xl p-5  border border-opacity-40 border-text_color_desc_light dark:border-primary_color rounded-[20px] "
              >
                <div className="flex justify-between w-full">
                  <p className="text-text_body_16 text-text_color_light dark:text-text_color_dark ">
                    {projectResult?.component.component.name}
                  </p>
                  {/* {projectData.projectResult === "Passed" ? (
                    <div className="flex text-center items-center">
                      <div className="w-[25px] h-[25px] flex items-center justify-center rounded-[5px] bg-primary_color">
                        <FaCheck className="dark:text-text_color_light" />
                      </div>
                      <p className=" px-2 text-text_body_16">
                        {projectData.projectResult}
                      </p>
                    </div>
                  ) : (
                    <div className="flex text-center items-center">
                      <div className="w-[25px] h-[25px] flex items-center justify-center rounded-[5px] bg-custom_red">
                        <RxCross2 className="dark:text-text_color_light" />
                      </div>
                      <p className=" px-2 text-text_body_16">
                        {projectData.projectResult}
                      </p>
                    </div>
                  )} */}
                </div>
                <p className=" my-2 text-left text-[14px] text-text_color_desc_light dark:text-text_color_desc_dark ">
                  {" "}
                  <span className="text-secondary_color truncate">
                    Last analysis:
                  </span>{" "}
                  {projectResult?.branch?.map(
                    (branchItem: any, branchIndex: number) =>
                      branchItem?.branches?.map((item: any, index: number) => (
                        <span key={`${branchIndex}-${index}`}>
                          {getHourFromTimestamp(item?.analysisDate)} hours ago •{" "}
                        </span>
                      ))
                  )}
                  {projectResult?.component?.component?.measures?.map(
                    (item: any, index: number) => {
                      if (item.metric === "ncloc") {
                        return (
                          <span key={index}>{item.value} Lines of Code • </span>
                        );
                      }
                    }
                  )}
                </p>
                <hr className="my-5 dark:border-primary_color" />

                <div className="grid  grid-cols-2 md:grid-cols-3  gap-5">
                  {/* security */}
                  <div className="w-full h-full ">
                    {/* score security */}
                    <div className="flex w-full justify-center  text-center items-center">
                      <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] border border-primary_color">
                        A
                      </div>
                      {projectResult?.component?.component?.measures?.map(
                        (item: any, index: number) => {
                          if (item.metric === "security_issues") {
                            return (
                              <p key={index} className="mx-2">
                                {JSON.parse(item.value).total}
                              </p>
                            );
                          }
                        }
                      )}
                    </div>
                    <div className="my-5 w-full flex items-center justify-center">
                      Security
                    </div>
                  </div>
                  {/* reliability */}
                  <div className="w-full h-full">
                    {/* score security */}
                    <div className="flex w-full justify-center  text-center items-center">
                      <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] border border-primary_color">
                        A
                      </div>
                      {projectResult?.component?.component?.measures?.map(
                        (item: any, index: number) => {
                          if (item.metric === "reliability_issues") {
                            return (
                              <p key={index} className="mx-2">
                                {JSON.parse(item.value).total}
                              </p>
                            );
                          }
                        }
                      )}
                    </div>
                    <div className="my-5 w-full flex items-center justify-center">
                      Reliability
                    </div>
                  </div>
                  {/* Maintainability */}
                  <div className="w-full h-full">
                    {/* Maintainability */}
                    <div className="flex w-full justify-center  text-center items-center">
                      <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] border border-primary_color">
                        A
                      </div>
                      {projectResult?.component?.component?.measures?.map(
                        (item: any, index: number) => {
                          if (item.metric === "maintainability_issues") {
                            return (
                              <p key={index} className="mx-2">
                                {JSON.parse(item.value).total}
                              </p>
                            );
                          }
                        }
                      )}
                    </div>
                    <div className="my-5 w-full flex items-center justify-center">
                      Maintainability
                    </div>
                  </div>
                  {/* Hotspot Reviewed */}
                  <div className="w-full h-full">
                    {/* Hotspot Reviewed */}
                    <div className="flex w-full justify-center  text-center items-center">
                      <div className="w-[30px] h-[30px] flex items-center justify-center rounded-[5px] border border-primary_color">
                        A
                      </div>
                      {projectResult?.component?.component?.measures?.map(
                        (item: any, index: number) => {
                          if (item.metric === "security_hotspots") {
                            return (
                              <p key={index} className="mx-2">
                                {item.value}
                              </p>
                            );
                          }
                        }
                      )}
                    </div>
                    <div className="my-5 w-full flex items-center text-center justify-center">
                      Hotspot Reviewed
                    </div>
                  </div>
                  {/* Coverage Reviewed */}
                  <div className="w-full h-full">
                    {/* Coverage Reviewed */}
                    <div className="flex w-full justify-center  text-center items-center">
                      {projectResult?.component?.component?.measures?.map(
                        (item: any, index: number) => {
                          if (item.metric === "coverage") {
                            return (
                              <div
                                key={index}
                                className="w-[60px] h-[30px] flex items-center justify-center"
                              >
                                <Image
                                  width={50}
                                  height={50}
                                  alt="coverage"
                                  src={
                                    getCoverageData(item?.value)?.image ||
                                    "/default-image.png"
                                  }
                                />
                              </div>
                            );
                          }
                        }
                      )}
                      {projectResult?.component?.component?.measures?.map(
                        (item: any, index: number) => {
                          if (item.metric === "coverage") {
                            return (
                              <p key={index} className="mx-2">
                                {item.value}
                              </p>
                            );
                          }
                        }
                      )}
                    </div>
                    <div className="my-5 w-full flex items-center text-center justify-center">
                      Coverage
                    </div>
                  </div>
                  {/* duplicated */}
                  <div className="w-full h-full">
                    {/* duplicated */}
                    <div className="flex w-full justify-center  text-center items-center">
                      {projectResult?.component?.component?.measures?.map(
                        (item: any, index: number) => {
                          if (item.metric === "duplicated_lines_density") {
                            return (
                              <div className="w-[60px] h-[30px] flex items-center justify-center">
                                <Image
                                  width={60}
                                  height={50}
                                  alt="coverage"
                                  src={getDuplicationData(item.value).image}
                                />
                              </div>
                            );
                          }
                        }
                      )}
                      {projectResult?.component?.component?.measures?.map(
                        (item: any, index: number) => {
                          if (item.metric === "duplicated_lines_density") {
                            return (
                              <p key={index} className="mx-2">
                                {item.value}
                              </p>
                            );
                          }
                        }
                      )}
                    </div>
                    <div className="my-5 w-full flex items-center justify-center">
                      Duplicated
                    </div>
                  </div>
                </div>
              </section>
            );
          }
          return (
            <section
              key={index}
              className="w-full h-full md:h-[150px] my-5  p-5 border border-opacity-40 border-text_color_desc_light dark:border-primary_color rounded-[20px] "
            >
              <div className="flex justify-between w-full">
                <p className="text-text_body_16 text-secondary_color dark:text-text_color_dark ">
                  {projectResult?.component?.component.name}
                </p>
              </div>
              <hr className="my-5 dark:border-primary_color" />
              <div className="flex  items-center">
                <p className=" my-2 text-text_body_16 text-text_color_desc_light  dark:text-text_color_desc_dark ">
                  {" "}
                  Project&apos;s{" "}
                  <span className="text-secondary_color truncate">
                    {projectResult?.component?.component.name}
                  </span>{" "}
                  is not analyzed yet.{" "}
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <p className="text-link_color underline">
                      Configure Project
                    </p>
                  </AlertDialogTrigger>
                  <AlertDialogContent className=" w-[90%] md:w-full rounded-[20px] bg-text_color_dark  flex flex-col   ">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="flex justify-between text-center items-center">
                        <p className="text-text_title_24 text-text_color_light">
                          {projectResult?.component?.component.name}
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
                    <div className="relative">
                      <FaGithub className="absolute top-1/2 left-3 text-text_title_24 transform -translate-y-1/2 text-text_color_desc_light" />
                      <input
                        type="text"
                        placeholder="Enter Git URL"
                        value={gitUrlResult}
                        onChange={handleChange} // Update the state with the input value
                        onKeyDown={handleKeyPress} // Trigger logic on Enter key press
                        className="mt-1 w-full rounded-md border bg-text_color_dark dark:text-text_color_light pl-12 pr-3 py-3 focus:outline-none  border-ascend_color"
                      />
                    </div>
                    {/* select branch */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="">
                          <p className="text-text_body_16 text-text_color_light my-2">
                            Branch
                          </p>
                          <div className="flex px-5 justify-between items-center rounded-[10px] border border-ascend_color bg-background_light_mode">
                            <p className="text-text_body_16  py-3  text-text_color_desc_light">
                              {selectedBranch}
                            </p>
                            <IoIosArrowDown className="text-text_color_light h-5 w-5  " />
                          </div>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[462px] text-text_color_light text-start bg-background_light_mode">
                        <DropdownMenuSeparator />
                        {gitResult?.length === 0 ? (
                          <DropdownMenuItem disabled>
                            No branch to select
                          </DropdownMenuItem>
                        ) : (
                          gitResult?.map(
                            (gitResult: GitUrlType, index: number) => (
                              <DropdownMenuItem
                                key={index}
                                onClick={() =>
                                  setSelectedBranch(`${gitResult?.name}`)
                                }
                              >
                                {gitResult?.name}
                              </DropdownMenuItem>
                            )
                          )
                        )}
                        <DropdownMenuSeparator />
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {/* submit scan */}
                    <button
                      key={index}
                      disabled={isLoading}
                      onClick={() => handleScanProject(index)}
                      className="w-full py-3 bg-primary_color text-text_color_light font-normal flex justify-center rounded-[10px]"
                    >
                      {isLoading ? (
                        <div className="spinner-border animate-spin inline-block w-6 h-6 border-2 rounded-full border-t-2 border-text_color_light border-t-transparent"></div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}

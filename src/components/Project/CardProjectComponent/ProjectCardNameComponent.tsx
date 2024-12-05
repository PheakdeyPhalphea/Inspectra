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
import { useGetAllProjectsNameQuery } from "@/redux/service/project";
import { ProjectNameType } from "@/types/ProjectNameType";

import { toast } from "@/components/hooks/use-toast";
import { GitUrlType } from "@/data/GitUrl";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import LoadProjectComponent from "../LoadingProjectComponent/LoadProjectComponent";


export default function ProjectCardNameComponent() {
  const { data: getAllProjectsName, isError } = useGetAllProjectsNameQuery({});
  const projectResult = getAllProjectsName?.data;
  const [selectedBranch, setSelectedBranch] = useState("Select Project Branch");
  const [gitUrlResult, setGitUrl] = useState<string>(""); // Store the input value
  const [gitResult, setGitResult] = useState([]); // result get from git url
  const [listDirectories, setListDirectories] = useState<{
    files: any[];
    subdirectories?: any[];
  } | null>(null); // result get from git url
  const resultListAllFile = listDirectories?.files;
  const resultListAllSubdirectories = listDirectories?.subdirectories;

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
  const handleFetchDirectories = async () => {
    if (selectedBranch !== "Select Project Branch" && gitUrlResult) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}gits/list_files?gitUrl=${gitUrlResult}&branch=${selectedBranch}`
      );
      const data = await response.json();
      setListDirectories(data);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    if (selectedBranch !== "Select Project Branch" && gitUrlResult) {
      handleFetchDirectories();
    }
  }, [selectedBranch, gitUrlResult]);

  return (
    <div>
      {isError ? (
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
                <AlertDialogContent className=" w-[90%] md:w-full rounded-[20px] bg-text_color_dark h-full flex flex-col   ">
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
                      {gitResult?.map(
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
                      )}
                      <DropdownMenuSeparator />
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {/* directories  */}
                  <div className="h-[300px] w-full  overflow-y-scroll">
                  
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </section>
        ))
      )}
    </div>
  );
}

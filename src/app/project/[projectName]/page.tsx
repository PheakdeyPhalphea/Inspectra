import React from "react";

export type ParamProps = {
  params: {
    projectName: string;
  };
};

export default function page({ params }: ParamProps) {
  const projectName = params.projectName;
  return <p>{projectName}</p>;
}

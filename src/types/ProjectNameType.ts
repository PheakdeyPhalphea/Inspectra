export  type ProjectNameType = {
  projectName: string;
  isUsed?: boolean;
};

export type Measure = {
  metric: string;
  value: string;
  bestValue?: boolean;
}

export type ComponentProps = {
  key: string;
  name: string;
  qualifier: string;
  measures: Measure[];
}

export type BranchProps = {
  name: string;
  isMain: boolean;
  type: string;
  status: {
    qualityGateStatus: string;
  };
  analysisDate: string;
  excludedFromPurge: boolean;
  branchId: string;
}
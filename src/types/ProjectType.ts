export type CoverageItem = {
  percent: string;
  image: string;
};

export type DuplicationItem = {
  percent: string;
  image: string;
};

export type FacetValue = {
  val: string;
  count: number;
};

export type FacetItem = {
  property: string;
  values: FacetValue[];
};

export type FacetsData = {
  facets: FacetItem[];
  coverage: CoverageItem[];
  duplication: DuplicationItem[];
  values: {
    grade: string;
    result: string;
    borderColor: string;
  }[];
};

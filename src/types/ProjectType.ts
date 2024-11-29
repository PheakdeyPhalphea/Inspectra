// types.ts
export type FacetValue = {
    val: string;
    count: number;
  };
  
  export type Facet = {
    property: string;
    values: FacetValue[];
  };
  
  export type Grade = {
    grade: string;
    result: string;
    borderColor: string;
  };
  
  export type CoverageItem = {
    percent: string;
    image: string;
  };
  
  export type DuplicationItem = {
    percent: string;
    image: string;
  };
  
  export type FacetsData = {
    facets: Facet[];
    values: Grade[];
    coverage: CoverageItem[];
    duplication: DuplicationItem[];
  };
  
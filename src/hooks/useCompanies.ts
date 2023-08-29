import useData from "./useData";

export interface Company {
  _id: string;
  companyName: string;
  companyLogo: string;
  companyCountry: string;
}

const useCompanies = () => useData<Company>("/companies");

export default useCompanies;

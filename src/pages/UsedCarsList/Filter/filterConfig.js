import { getAllBrands, getAllModels } from "../../../helpers/cars-functions.js";
import { getYears } from "../../../helpers/filter-functions.js";

const FILTERS_CONFIG = ({ cars, searchParams }) => [
  {
    title: "Brand",
    field: "brand",
    queryParam: "brand",
    type: "select",
    options: getAllBrands(cars),
    value: searchParams.get("brand") || "",
    placeholder: "Select a brand",
    filterFn: (value) => value === searchParams.get("brand"),
  },
  {
    title: "Model",
    field: "model",
    queryParam: "model",
    type: "select",
    options: getAllModels(cars),
    value: searchParams.get("model") || "",
    placeholder: "Select a model",
    filterFn: (value) => value === searchParams.get("model"),
  },
  {
    title: "Year from",
    field: "year",
    queryParam: "year from",
    type: "select",
    options: getYears(cars),
    value: searchParams.get("year from") || "",
    placeholder: "From",
    filterFn: (value) => value >= searchParams.get("year from"),
  },
  {
    title: "Year to",
    field: "year",
    queryParam: "year to",
    type: "select",
    options: getYears(cars),
    value: searchParams.get("year to") || "",
    placeholder: "To",
    filterFn: (value) => value <= searchParams.get("year to"),
  },
];

export default FILTERS_CONFIG;

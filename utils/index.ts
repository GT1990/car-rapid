import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { year, make, model, fuel, limit } = filters;

  const headers = {
    "X-RapidAPI-Key": "c025083f4dmshe00600e784a9936p127901jsncd2efeebc3dd",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?year=${year}&make=${make}&model=${model}&fuel_type=${fuel}&limit=${limit}`;
  const response = await fetch(url, { headers: headers });
  const result = await response.json();
  return result;
}

export const calculateCarPrice = (city_mpg: number, year: number) => {
  const basePricePerMonth = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const priceRatePerMonth =
    (basePricePerMonth + mileageRate + ageRate) * 20 - 350;

  return priceRatePerMonth.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");

  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  let scrollPosition = window.scrollY;
  searchParams.set("scroll", `${scrollPosition}`);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};

export const updatePageLink = (id: string) => {
  const newPathName = `${window.location.pathname}#${id}`;

  return newPathName;
};

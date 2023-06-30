import { CarCardProps, FilterProps } from "@/types";

export const fetchCars = async (filter: FilterProps) => {
  const { manuFacturer, model, year, fuel, limit } = filter;
  const headers = {
    "X-RapidAPI-Key": "d5c02bdaa8mshe71a4b25e1c141dp18b586jsnb90620e9ee4b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manuFacturer}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel}`,
      { headers: headers }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarCardProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("make", make);
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  return `${url}`;
};
export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathName;
};

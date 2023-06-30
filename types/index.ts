import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface SearchManuFacturerProps {
  manuFacturer: string;
  setManuFacturer: (manuFacturer: string) => void;
}
export interface CarCardProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface carDetailsProps {
  open: boolean;
  onCloseModel: () => void;
  car: CarCardProps;
}

export interface FilterProps {
  manuFacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}
export interface ShowMoreProps {
  isNext: boolean;
  pageNumber: number;
}

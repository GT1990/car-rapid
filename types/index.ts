import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchMakeProps {
  make: string;
  setMake: (make: string) => void;
}

export interface CarProps {
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

export interface FilterProps {
  year: number;
  make: string;
  model: string;
  fuel: string;
  limit: number;
}

export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export type HomeProps = {
  searchParams: FilterProps & { scroll: string };
};

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

"use client";
import { Combobox, Transition } from "@headlessui/react";
import { SearchMakeProps } from "@/types";
import { useState, Fragment } from "react";
import Image from "next/image";

import { makes } from "@/constants";

const SearchMake = ({ make, setMake }: SearchMakeProps) => {
  const [query, setQuery] = useState("");

  const filteredMakes =
    query === ""
      ? makes
      : makes.filter((make) =>
          make
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={make} onChange={setMake}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen..."
            displayValue={(make: string) => make}
            onChange={(event) => setQuery(event.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredMakes.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  No results
                </Combobox.Option>
              ) : (
                filteredMakes.map((make) => (
                  <Combobox.Option
                    key={make}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={make}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {make}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? "text-white"
                                : "text-pribg-primary-purple"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchMake;

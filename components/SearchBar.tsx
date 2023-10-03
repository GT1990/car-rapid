"use client";

import React, { useState, useEffect } from "react";

import { SearchMakes } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="maginifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ scrollValue }: { scrollValue: number }) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, scrollValue);
  }, [scrollValue]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make === "" && model == "") {
      return alert("Please fill in search bar");
    }
    updateSearchParams(make.toLowerCase(), model.toLowerCase());
  };

  const updateSearchParams = (make: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMakes make={make} setMake={setMake} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;

"use client";
import React, { useState } from "react";
import { SearchManuFacturer } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type='submit'
    className={`-ml-3 z-10 ${otherClasses}`}
  >
    <Image
      src='/magnifying-glass.svg'
      alt='search img'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);
function SearchBar() {
  const [manuFacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manuFacturer === "" && model === "")
      return alert("Please fill in the search field");

    updateSearchParams(model.toLowerCase(), manuFacturer.toLowerCase());
  };
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };
  return (
    <form
      className='searchbar'
      onSubmit={handleSearch}
    >
      <div className='searchbar__item'>
        <SearchManuFacturer
          manuFacturer={manuFacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='object-contain absolute w-[20px] height-[20px] ml-4'
          alt='model img'
        />
        <input
          type='text'
          name='model'
          className='searchbar__input'
          placeholder='Search eg:Tiguan..'
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
}

export default SearchBar;

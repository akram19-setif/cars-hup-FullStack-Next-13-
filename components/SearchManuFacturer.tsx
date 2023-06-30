"use client";
import Image from "next/image";
import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchManuFacturerProps } from "@/types";
// utils
import { manufacturers } from "@/constants";

function SearchManuFacturer({
  manuFacturer,
  setManuFacturer,
}: SearchManuFacturerProps) {
  const [query, setQuery] = useState("");
  const filteredManuFacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className='search-manufacturer'>
      <Combobox
        value={manuFacturer}
        onChange={setManuFacturer}
      >
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              alt='car-icon'
              width={20}
              height={20}
              className='ml-4'
            />
          </Combobox.Button>
          <Combobox.Input
            placeholder='Volkswagen'
            displayValue={(manufacturers: string) => manufacturers}
            onChange={(event) => setQuery(event.target.value)}
            className='search-manufacturer__input'
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManuFacturers.length === 0 && query !== "" ? (
                <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                  Nothing found.
                </div>
              ) : (
                filteredManuFacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
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
}

export default SearchManuFacturer;

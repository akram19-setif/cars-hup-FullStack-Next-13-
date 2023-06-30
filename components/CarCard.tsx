"use client";
import React, { useState } from "react";
import { CarCardProps } from "@/types";
// Components
import { CustomButton, CarDetails } from "@/components";
// utils
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
interface CarCard {
  car: CarCardProps;
}
function CarCard({ car }: CarCard) {
  const { city_mpg, drive, make, model, transmission, year } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);
  const onCloseModel = () => {
    setIsOpen(false);
  };
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {" "}
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px]'>
        <span className='self-start text-[14px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] font-meduim'>/day</span>
      </p>
      <div className='relative w-full object-contain h-40 my-3'>
        <Image
          src={generateCarImageUrl(car)}
          alt='car model'
          fill
          priority
          className='object-contain'
        />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <Image
              src='/steering-wheel.svg'
              width={20}
              height={20}
              alt='streering wheel'
            />
            <p className='text-[14px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <Image
              src='/tire.svg'
              width={20}
              height={20}
              alt='tire'
            />
            <p className='text-[14px]'>{drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <Image
              src='/gas.svg'
              width={20}
              height={20}
              alt='gas'
            />
            <p className='text-[14px]'>{city_mpg} MPG</p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        open={isOpen}
        onCloseModel={onCloseModel}
        car={car}
      />
    </div>
  );
}

export default CarCard;

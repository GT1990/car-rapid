"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import heroCar from "../public/heroM3.png";

import { updatePageLink } from "@/utils";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Discover, select, and buy your dream car!
        </h1>

        <p className="hero__subtitle">
          Simplify your car-buying journey with our streamlined purchasing
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={() => router.push(updatePageLink("inventoryId"))}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={heroCar} alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;

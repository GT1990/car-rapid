"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import CustomButton from "./CustomButton";

import { useRouter } from "next/navigation";
import { updatePageLink, updateSearchParams } from "@/utils";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={logo}
            alt="DealerTron Logo"
            width={218}
            height={118}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="View Inventory"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={() => router.push(updatePageLink("inventoryId"))}
        />
      </nav>
    </header>
  );
};

export default Navbar;

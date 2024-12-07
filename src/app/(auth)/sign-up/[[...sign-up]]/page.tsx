"use client";

import styles from "../[[...sign-up]]/styles.module.css";
import { SignUp, useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Sign_up() {
  const { user } = useUser();

  if (!user) {
    return (
      <div
        className={`${styles.gradientBackground} grid lg:grid-cols-2 w-full`}
      >
        <div className="hidden lg:grid">
          <div className="grid grid-rows-12 items-center px-4 w-full h-screen justify-center">
            <h1
              className={`text-[25px] font-extrabold text-gray-600 font-sans text-center row-start-2`}
            >
              Migration Master
            </h1>
            <Image
              alt="Migration Master"
              src={"/images/Banner.png"}
              width={550}
              height={550}
              className="row-start-7"
              priority
            />
          </div>
        </div>
        <div className="grid items-center px-4 w-full bg-slate-100 justify-center">
          <SignUp signInUrl="/sign-in" path="/sign-up" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.gradientBackground} grid w-full grow items-center px-4 sm:justify-center`}
    >
      Welcome
    </div>
  );
}

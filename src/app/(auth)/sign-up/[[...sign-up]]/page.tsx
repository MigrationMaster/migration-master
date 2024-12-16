"use client";

import styles from "../[[...sign-up]]/styles.module.css";
import { SignUp, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserData } from "@/app/api/users/signup-validation/route";
import { redirect } from "next/navigation";

export default function Sign_up() {
  const { user, isSignedIn } = useUser();
  const [isUserSaved, setIsUserSaved] = useState(false); // Tracks if the user data is already saved

  useEffect(() => {
    // Once the user object becomes available (indicating the user is signed up), this useEffect hook triggers.

    const saveUserData = async () => {
      if (user && !isUserSaved) {
        // construct user Data first
        const userData: UserData = {
          username: user.username || "Ravi_Default",
          email:
            user.emailAddresses.map((email) => email.emailAddress)[0] ||
            "default_email@gmail.com",
          id: user.id || "default_id",
        };

        try {
          const response = await fetch("/api/users/signup-validation", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          const result = await response.json();

          if (
            response.ok &&
            result.message === "User data saved successfully"
          ) {
            console.log("User data saved successfully");
            setIsUserSaved(true);
          } else if (result.message === "User already exists") {
            console.log("User already exists");
            setIsUserSaved(true);
          } else {
            console.error("Failed to save user data:", result.message);
          }
        } catch (error) {
          console.error("Error sending user data:", error);
        }
      }
    };

    // run when user ins't signed in
    if (isSignedIn && !isUserSaved) {
      saveUserData();
      redirect("/dashboard");
    }
  }, [user, isSignedIn, isUserSaved]);

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
          <SignUp
            signInUrl="/sign-in"
            path="/sign-up"
            fallbackRedirectUrl={"/dashboard"}
            // after the successful sign up I want send user data to somewhere else automatically. How can I do that?
          />
        </div>
      </div>
    );
  }
}

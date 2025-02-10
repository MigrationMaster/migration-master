"use client";

import { useUser, SignIn } from "@clerk/nextjs";
import styles from "../[[...sign-in]]/styles.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Sign_up() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const checkUserData = async () => {
      if (!user) return;

      // Build user data
      const userData = {
        username: user.username || "Ravi_Default",
        email:
          user.emailAddresses.map((email) => email.emailAddress)[0] ||
          "default_email@gmail.com",
        id: user.id || "default_id",
      };

      try {
        const response = await fetch("/api/users/signin-validation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        const result = await response.json();

        if (response.ok && result.message === "user exists") {
          router.push("/dashboard");
        } else if (result.message === "user doesn't exist") {
          router.push("/sign-in");
        } else {
          console.error("Error validating user data.");
        }
      } catch (error) {
        console.error("Error sending user data:", error);
      }
    };

    if (isSignedIn) {
      checkUserData();
    }
  }, [isSignedIn, user, router]);

  if (!isSignedIn) {
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
          <SignIn signUpUrl="/sign-up" fallbackRedirectUrl={"/dashboard"} />
        </div>
      </div>
    );
  }
}

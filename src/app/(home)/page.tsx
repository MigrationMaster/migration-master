"use client";
import React from "react";
// import { useDB } from "@/lib/db/test_insert_user";
// import { useEffect } from "react";
import test000 from "@/test/test000";
// import Image from "next/image";
// import { useState } from "react";

export default function Home() {
  // const [loggedIn, setLoggedIn] = useState(false);

  // const query = useDB();
  // useEffect(() => {
  //   query.then((value) => console.log(value));
  //   // console.log(query);
  // }, []);
  return (
    <div>
      <p>yes</p>
      <button onClick={test000} className="bg-red-500 shadow-sm">
        click me
      </button>
    </div>
  );
}

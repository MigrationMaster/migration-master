"use client";
import React, { useState } from "react";
// import { useDB } from "@/lib/db/test_insert_user";
// import { useEffect } from "react";
import test000 from "@/test/test.insert.supabase";
import test001 from "@/test/test.get";
import upd from "@/lib/db/storage/upload";

// import Image from "next/image";
// import { useState } from "react";

export default function Home() {
  // const [loggedIn, setLoggedIn] = useState(false);

  // const query = useDB();
  // useEffect(() => {
  //   query.then((value) => console.log(value));
  //   // console.log(query);
  // const [data, setData] = useState<
  //   | {
  //       email: string;
  //       last_login: string | null;
  //       user_id: string;
  //       username: string;
  //     }[]
  //   | null
  // >();

  // }, []);

  const [file, SetFile] = useState<File | null>(null);

  return (
    <div className="gap flex flex-col">
      <p>yes</p>
      <button onClick={test000} className="bg-red-500 shadow-sm">
        click me to test insert
      </button>

      <label htmlFor="file-select"></label>
      <input
        type="file"
        name="select file"
        id="file-select"
        onChange={(e) => SetFile(e.target?.files?.[0] as File)}
        // value={file}
      />

      <button
        onClick={() => {
          upd(file as File);
        }}
        className=" shadow-lg"
      >
        click me to upload
      </button>

      <button
        onClick={() =>
          test001().then((data) => {
            console.log(data);
            // setData(data.data);
          })
        }
        className="bg-red-500 shadow-sm"
      >
        click me to test fetch
      </button>
      {/* <p>{data?.toString()}</p> */}
    </div>
  );
}

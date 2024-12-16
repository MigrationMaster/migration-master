import { NextResponse } from "next/server";
import { UserData } from "../signup-validation/route";
import { setupDB } from "@/lib/db";

export async function POST(req: Request) {
  const worker = setupDB();
  try {
    const body = await req.json(); // Parse JSON body
    const userData: UserData = body;

    // Validate body data
    if (!userData.email || !userData.username) {
      return NextResponse.json({
        status: 400,
        message: "Invalid user data. All fields are required.",
      });
    }

    const { data: existingUser } = await worker
      .from("users")
      .select("*")
      .eq("email", userData.email)
      .single();

    if (!existingUser) {
      return NextResponse.json({
        status: 400,
        message: "user doesn't exist",
        isSaved: false,
      });
    } else {
      return NextResponse.json({
        status: 200,
        message: "user exists",
        isSaved: true,
      });
    }
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json({
      status: 500,
      message: "Server error occurred",
    });
  }
}

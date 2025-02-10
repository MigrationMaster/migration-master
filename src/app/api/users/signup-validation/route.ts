import { NextResponse } from "next/server";
import { setupDB } from "@/lib/db";

export type UserData = {
  username: string;
  email: string;
  id: string;
};

// Handle POST requests
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse JSON body
    const userData: UserData = body;

    // Validate incoming data
    if (!userData.username || !userData.email || !userData.id) {
      return NextResponse.json(
        { message: "Invalid user data. All fields are required." },
        { status: 400 }
      );
    }

    const worker = setupDB();

    // Check if user already exists
    const { data: existingUser, error: selectError } = await worker
      .from("users")
      .select("*")
      .eq("email", userData.email)
      .single();

    if (existingUser) {
      // User already exists
      return NextResponse.json(
        { message: "User already exists", isSaved: true },
        { status: 200 }
      );
    }

    // Insert user data into Supabase
    const { error } = await worker.from("users").insert({
      username: userData.username,
      email: userData.email,
    });

    if (error) {
      console.error("Supabase Insert Error", { error, userData });
      return NextResponse.json(
        { message: "Failed to save user data" },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({ message: "User data saved successfully" });
  } catch (error) {
    console.error("Unexpected Error:", error);
    return NextResponse.json(
      { message: "Server error occurred" },
      { status: 500 }
    );
  }
}

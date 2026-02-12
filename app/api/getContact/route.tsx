import { NextResponse } from "next/server";
import Contact from "@/model/Contact";
import connectToDb from "@/database/dbConnect";

export async function POST(req: Request) {
  try {
    await connectToDb();

    const { name, mail, type,message } = await req.json();

    // basic validation
    if (!name || !mail || !type || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newMessage = await Contact.create({
      name,
      mail,
      type,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message saved successfully",
        data: newMessage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}

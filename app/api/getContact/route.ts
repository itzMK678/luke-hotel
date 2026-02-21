// /app/api/getContact/route.ts
import { NextResponse } from "next/server";
import Contact from "@/app/model/Contact";
import connectToDb from "@/app/database/dbConnect";

export async function POST(req: Request) {
  console.log("🚀 API route hit");

  try {
    const body = await req.json();
    console.log("📨 Received body:", body);

    await connectToDb();
    console.log("🗄 DB connected");

    const { name, mail, type, message } = body as {
      name: string;
      mail: string;
      type: string;
      message: string;
    };

    if (!name || !mail || !type || !message) {
      console.log("❌ Validation failed");
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newMessage = await Contact.create({ name, mail, type, message });
    console.log("✅ Message saved:", newMessage);

    return NextResponse.json({ success: true, message: "Message saved", data: newMessage }, { status: 201 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("CONTACT API ERROR ❌", errorMessage);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}
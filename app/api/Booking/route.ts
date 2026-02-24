import { NextResponse } from "next/server";
import connectToDb from "@/app/database/dbConnect";
import Booking from "@/app/model/Booking";

export async function POST(req: Request) {
  try {
    await connectToDb();

    const { name, mail, number, date, person, VIP } = await req.json();

    // validation
    if (!name || !mail || !number || !date || !person) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const booking = await Booking.create({
      name,
      mail,
      number,
      date,
      person,
      VIP,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking confirmed",
        data: booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
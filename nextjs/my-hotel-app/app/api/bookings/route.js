import { NextResponse } from "next/server";
import { bookings } from "@/data/bookings";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: bookings.length,
    data: bookings,
  });
}


export async function POST(req) {
  try {
    const body = await req.json();
    const { hotelId, userName, checkIn, checkOut, guests } = body;

    if (!hotelId || !userName || !checkIn || !checkOut || !guests) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const newBooking = {
      id: (bookings.length + 1).toString(),
      hotelId,
      userName,
      checkIn,
      checkOut,
      guests,
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);

    return NextResponse.json(
      {
        success: true,
        message: "Booking created successfully!",
        data: newBooking,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid JSON format", error: error.message },
      { status: 500 }
    );
  }
}

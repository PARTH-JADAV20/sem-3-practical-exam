import { NextResponse } from "next/server";
import { bookings } from "@/data/bookings";

export async function GET(_, { params }) {
  const resolvedParams = await params;
  const { bookingId } = resolvedParams;
  console.log("GET /api/bookings params:", resolvedParams);
  console.log("available bookings:", bookings);
  const booking = bookings.find((b) => String(b.id) === String(bookingId));

  if (!booking) {
    return NextResponse.json(
      { success: false, message: "Booking not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: booking });
}

export async function DELETE(_, { params }) {
  const resolvedParams = await params;
  const { bookingId } = resolvedParams;
  console.log("DELETE /api/bookings params:", resolvedParams);
  const index = bookings.findIndex((b) => String(b.id) === String(bookingId));

  if (index === -1) {
    return NextResponse.json(
      { success: false, message: "Booking not found" },
      { status: 404 }
    );
  }

  const deletedBooking = bookings.splice(index, 1);

  return NextResponse.json({
    success: true,
    message: "Booking cancelled successfully",
    data: deletedBooking[0],
  });
}

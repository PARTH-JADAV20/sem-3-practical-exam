import Image from "next/image";
import Link from "next/link";
import { hotels } from "@/data/hotels";

export default async function HotelDetail({ params }) {
  const resolvedParams = await params;
  console.log(hotels);
  console.log("params:", resolvedParams);
  const hotelId = resolvedParams?.hotelId;
  const hotel = hotels.find((h) => String(h.id) === String(hotelId));

  if (!hotel) {
    return (
      <main className="p-10 text-center">
        <h2 className="text-2xl text-red-600 font-semibold">Hotel not found!</h2>
        <Link href="/hotels">
          <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">
            ← Back to Hotels
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="p-10 flex flex-col items-center bg-gray-50 min-h-screen">
      <Link href="/hotels" className="self-start">
        <button className="mb-4 px-4 py-2 bg-gray-700 text-white rounded">
          ← Back to Hotels
        </button>
      </Link>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={800}
          height={500}
          className="rounded-lg object-cover"
        />
        <h1 className="text-3xl font-bold mt-4">{hotel.name}</h1>
        <p className="text-gray-600">{hotel.location}</p>
        <p className="mt-3">{hotel.description}</p>
        <p className="mt-3 font-semibold text-lg">💰 Price: ₹{hotel.price}</p>
        <p>⭐ Rating: {hotel.rating}</p>
        <button className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </main>
  );
}

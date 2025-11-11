import Link from "next/link";
import Image from "next/image";
import { hotels } from "@/data/hotels";

export default function HotelList() {
  return (
    <main className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">🏨 Available Hotels</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={400}
              height={250}
              className="rounded-md object-cover"
            />
            <h2 className="text-xl font-semibold mt-3">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.location}</p>
            <p className="text-gray-800 mt-2">💰 ₹{hotel.price} / night</p>
            <p>⭐ {hotel.rating}</p>

            <Link href={`/hotels/${hotel.id}`}>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

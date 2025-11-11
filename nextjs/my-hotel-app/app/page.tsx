// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">🏨 Welcome to Hotel Booking System</h1>
      <p className="text-gray-600 mb-10 text-center max-w-lg">
        Browse available hotels, check details, and make bookings effortlessly.
      </p>
      <Link href="/hotels">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View All Hotels
        </button>
      </Link>
    </main>
  );
}

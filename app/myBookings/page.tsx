import { BookingCard } from "@/components/BookingCard";
import { mockUser, mockBookings } from "../data/mockBookings";

export default function MyBookingsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      <p className="text-lg mb-6">Welcome, {mockUser.name}</p>
      <div className="space-y-4">
        {mockBookings.map((booking) => (
          <BookingCard
            key={booking.id}
            time={booking.time}
            activity={booking.activity}
            contactInfo={booking.contactInfo}
          />
        ))}
      </div>
    </div>
  );
}

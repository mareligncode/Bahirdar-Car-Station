import { Calendar, Ticket, MapPin, Clock } from 'lucide-react';

// Mock data
const upcomingTrips = [
  {
    id: '1',
    from: 'Bahir Dar',
    to: 'Addis Ababa',
    departureTime: '2024-10-28T06:00:00',
    price: 1200,
    status: 'confirmed',
    seats: ['A1', 'A2'],
  },
  {
    id: '2',
    from: 'Bahir Dar',
    to: 'Gondar',
    departureTime: '2024-10-30T08:00:00',
    price: 350,
    status: 'confirmed',
    seats: ['B3'],
  },
];

export default function PassengerDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Good Morning, Abebe
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your trips today
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Upcoming Trips</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <Calendar className="w-8 h-8 text-primary-500" />
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold">ETB 3,100</p>
            </div>
            <Ticket className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Next Trip</p>
              <p className="text-2xl font-bold">Oct 28</p>
            </div>
            <Clock className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Upcoming Trips */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Upcoming Trips</h2>
        <div className="space-y-4">
          {upcomingTrips.map((trip) => (
            <div key={trip.id} className="card p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <h3 className="font-semibold">
                        {trip.from} → {trip.to}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Departure: {new Date(trip.departureTime).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
                      {trip.status}
                    </span>
                    <span>Seats: {trip.seats.join(', ')}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">ETB {trip.price * trip.seats.length}</p>
                  <button className="btn-secondary mt-2">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="card p-6 text-left hover:bg-gray-50">
            <h3 className="font-semibold mb-2">Book New Trip</h3>
            <p className="text-sm text-gray-600">Find and book your next journey</p>
          </button>
          <button className="card p-6 text-left hover:bg-gray-50">
            <h3 className="font-semibold mb-2">View Booking History</h3>
            <p className="text-sm text-gray-600">See all your past trips</p>
          </button>
        </div>
      </div>
    </div>
  );
}
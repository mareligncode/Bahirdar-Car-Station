import { MapPin, Clock, Users, Car } from 'lucide-react';

const assignedTrips = [
  {
    id: 'BD-GND-045',
    from: 'Bahir Dar',
    to: 'Gondar',
    departureTime: '2024-10-26T08:00:00',
    arrivalTime: '2024-10-26T11:00:00',
    vehiclePlate: 'ET 54321A',
    vehicleType: 'minibus',
    status: 'assigned',
    passengers: 3,
  },
  {
    id: 'BD-AA-0600',
    from: 'Bahir Dar',
    to: 'Addis Ababa',
    departureTime: '2024-10-27T06:00:00',
    arrivalTime: '2024-10-27T13:00:00',
    vehiclePlate: 'ET 12345B',
    vehicleType: 'luxury_bus',
    status: 'upcoming',
    passengers: 0,
  },
];

export default function DriverDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Good Morning, Tsegaye
        </h1>
        <p className="text-gray-600">Here are your assignments for today, 26th October 2024</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Trips Today</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Car className="w-8 h-8 text-primary-500" />
            </div>
          </div>
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed Trips</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <Clock className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Distance</p>
                <p className="text-2xl font-bold">76 km</p>
              </div>
              <MapPin className="w-8 h-8 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Today's Trips */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Today's Trips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assignedTrips.map((trip) => (
            <div key={trip.id} className="card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{trip.id}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      trip.status === 'assigned' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {trip.status}
                    </span>
                  </div>
                </div>
                <button className="btn-primary">Start Trip</button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{trip.from} → {trip.to}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(trip.departureTime).toLocaleTimeString()} - {new Date(trip.arrivalTime).toLocaleTimeString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{trip.vehicleType}</p>
                    <p className="text-sm text-gray-600">{trip.vehiclePlate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{trip.passengers} Passengers</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { TrendingUp, Users, Car, DollarSign } from 'lucide-react';

const stats = [
  { icon: DollarSign, label: 'Revenue Today', value: 'ETB 85K', change: '+8.5%' },
  { icon: Users, label: 'Total Bookings', value: '1,284', change: '+12%' },
  { icon: Car, label: 'Active Routes', value: '24', change: '+3' },
  { icon: Users, label: 'Available Drivers', value: '18', change: '-5 on leave' },
];

const upcomingTrips = [
  {
    id: 'BD-AA-0600',
    route: 'Bahir Dar – Addis Ababa',
    time: '06:00 AM',
    driver: 'Tsegaye Lemma',
    status: 'On Time',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    id: 'BD-GD-0730',
    route: 'Bahir Dar – Gondar',
    time: '07:30 AM',
    driver: 'Abeba Girma',
    status: 'On Time',
    statusColor: 'bg-green-100 text-green-800',
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">{stat.change}</span>
                  <span className="text-sm text-gray-500 ml-2">from yesterday</span>
                </div>
              </div>
              <div className="p-3 bg-primary-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Departures */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Departures</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 text-sm font-medium text-gray-600">Trip ID</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Route</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Time</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Driver</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {upcomingTrips.map((trip) => (
                <tr key={trip.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 text-sm font-medium">{trip.id}</td>
                  <td className="py-4 text-sm">{trip.route}</td>
                  <td className="py-4 text-sm">{trip.time}</td>
                  <td className="py-4 text-sm">{trip.driver}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${trip.statusColor}`}>
                      {trip.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="btn-primary py-3">Add New Route</button>
          <button className="btn-primary py-3">Create Schedule</button>
          <button className="btn-primary py-3">Add Driver</button>
          <button className="btn-primary py-3">View Reports</button>
        </div>
      </div>
    </div>
  );
}
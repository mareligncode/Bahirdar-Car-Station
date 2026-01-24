import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Car, 
  Ticket, 
  BarChart3,
  Settings,
  MapPin,
  FileText
} from 'lucide-react';

export default function Sidebar({ userRole }) {
  const passengerMenu = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/passenger/dashboard' },
    { icon: Ticket, label: 'Book Trip', path: '/passenger/book-trip' },
    { icon: Calendar, label: 'My Bookings', path: '/passenger/my-bookings' },
  ];

  const driverMenu = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/driver/dashboard' },
    { icon: Calendar, label: 'Assigned Trips', path: '/driver/trips' },
    { icon: MapPin, label: 'Trip Tracking', path: '/driver/tracking' },
  ];

  const adminMenu = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Calendar, label: 'Schedules', path: '/admin/schedules' },
    { icon: Users, label: 'Drivers', path: '/admin/drivers' },
    { icon: Car, label: 'Vehicles', path: '/admin/vehicles' },
    { icon: BarChart3, label: 'Reports', path: '/admin/reports' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const menuItems = 
    userRole === 'passenger' ? passengerMenu :
    userRole === 'driver' ? driverMenu :
    adminMenu;

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r shadow-sm overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          {userRole === 'passenger' ? 'Passenger' : 
           userRole === 'driver' ? 'Driver' : 
           'Admin'} Panel
        </h2>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
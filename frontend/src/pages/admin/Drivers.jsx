import { Plus, User, Phone, Car, Star, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

const mockDrivers = [
  {
    id: 'DR-001',
    name: 'Tsegaye Lemma',
    phone: '+251912345678',
    licenseNumber: 'ET-LICENSE-001',
    vehicle: 'Luxury Bus (ET-1234)',
    status: 'active',
    rating: 4.8,
    tripsCompleted: 124,
    joinedDate: '2023-01-15',
  },
  {
    id: 'DR-002',
    name: 'Abeba Girma',
    phone: '+251923456789',
    licenseNumber: 'ET-LICENSE-002',
    vehicle: 'Coaster (ET-5678)',
    status: 'active',
    rating: 4.9,
    tripsCompleted: 98,
    joinedDate: '2023-03-20',
  },
  {
    id: 'DR-003',
    name: 'Mekonnen Tesfaye',
    phone: '+251934567890',
    licenseNumber: 'ET-LICENSE-003',
    vehicle: 'Minibus (ET-9012)',
    status: 'on_leave',
    rating: 4.5,
    tripsCompleted: 76,
    joinedDate: '2023-05-10',
  },
  {
    id: 'DR-004',
    name: 'Hana Worku',
    phone: '+251945678901',
    licenseNumber: 'ET-LICENSE-004',
    vehicle: 'Not Assigned',
    status: 'inactive',
    rating: 4.7,
    tripsCompleted: 45,
    joinedDate: '2023-08-05',
  },
];

const statusColors = {
  active: 'bg-green-100 text-green-800',
  inactive: 'bg-red-100 text-red-800',
  on_leave: 'bg-yellow-100 text-yellow-800',
};

export default function Drivers() {
  const [drivers, setDrivers] = useState(mockDrivers);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this driver?')) {
      setDrivers(drivers.filter(d => d.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Drivers Management</h1>
          <p className="text-gray-600">Manage driver accounts and assignments</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Driver
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Drivers</p>
              <p className="text-2xl font-bold">{drivers.length}</p>
            </div>
            <User className="w-8 h-8 text-primary-500" />
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Drivers</p>
              <p className="text-2xl font-bold">
                {drivers.filter(d => d.status === 'active').length}
              </p>
            </div>
            <Car className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Rating</p>
              <p className="text-2xl font-bold">4.7</p>
            </div>
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">On Leave</p>
              <p className="text-2xl font-bold">
                {drivers.filter(d => d.status === 'on_leave').length}
              </p>
            </div>
            <User className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Drivers Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Driver
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Contact & License
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Vehicle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Performance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {drivers.map((driver) => (
                <tr key={driver.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                        <User className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{driver.name}</div>
                        <div className="text-sm text-gray-500">ID: {driver.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {driver.phone}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        License: {driver.licenseNumber}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-gray-400" />
                      <span>{driver.vehicle}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">{driver.rating}/5.0</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {driver.tripsCompleted} trips
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[driver.status]}`}>
                      {driver.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <button className="text-primary-600 hover:text-primary-700">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(driver.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
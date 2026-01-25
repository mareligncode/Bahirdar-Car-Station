import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Layout
import Layout from './components/common/Layout';
import ProtectedRoute from './components/common/ProtectedRoute';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import FAQ from './pages/public/FAQ';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Passenger Pages
import PassengerDashboard from './pages/passenger/Dashboard';
import BookTrip from './pages/passenger/BookTrip';
import MyBookings from './pages/passenger/MyBookings';

// Driver Pages
import DriverDashboard from './pages/driver/Dashboard';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import Schedules from './pages/admin/Schedules';
import Drivers from './pages/admin/Drivers';
import Vehicles from './pages/admin/Vehicles';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/faq" element={<Layout><FAQ /></Layout>} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
          
          {/* Passenger Routes */}
          <Route path="/passenger/dashboard" element={
            <ProtectedRoute requiredRole="passenger">
              <Layout showSidebar>
                <PassengerDashboard />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/passenger/book-trip" element={
            <ProtectedRoute requiredRole="passenger">
              <Layout showSidebar>
                <BookTrip />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/passenger/book-trip/:tripId" element={
            <ProtectedRoute requiredRole="passenger">
              <Layout showSidebar>
                <BookTrip />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/passenger/my-bookings" element={
            <ProtectedRoute requiredRole="passenger">
              <Layout showSidebar>
                <MyBookings />
              </Layout>
            </ProtectedRoute>
          } />
          
          {/* Driver Routes */}
          <Route path="/driver/dashboard" element={
            <ProtectedRoute requiredRole="driver">
              <Layout showSidebar>
                <DriverDashboard />
              </Layout>
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={
            <ProtectedRoute requiredRole="station_admin">
              <Layout showSidebar>
                <AdminDashboard />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/schedules" element={
            <ProtectedRoute requiredRole="station_admin">
              <Layout showSidebar>
                <Schedules />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/drivers" element={
            <ProtectedRoute requiredRole="station_admin">
              <Layout showSidebar>
                <Drivers />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/vehicles" element={
            <ProtectedRoute requiredRole="station_admin">
              <Layout showSidebar>
                <Vehicles />
              </Layout>
            </ProtectedRoute>
          } />
          
          {/* 404 Route */}
          <Route path="*" element={
            <Layout>
              <div className="text-center py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600">The page you're looking for doesn't exist.</p>
              </div>
            </Layout>
          } />
        </Routes>
        <Toaster position="top-right" />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';
import { Mail, Lock } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      await login(email, password);
      
      // Get user from store after login
      const user = useAuthStore.getState().user;
      
      // Redirect based on role
      if (user?.role === 'driver') {
        navigate('/driver/dashboard');
      } else if (user?.role === 'station_admin' || user?.role === 'super_admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/passenger/dashboard');
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to your account to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field pl-10"
              placeholder="name@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field pl-10"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-primary-600 rounded border-gray-300"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 disabled:opacity-50"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-gray-600 mb-4">Quick login for testing:</p>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => {
                setEmail('passenger@example.com');
                setPassword('password');
              }}
              className="text-sm bg-gray-100 hover:bg-gray-200 py-2 rounded"
            >
              Passenger
            </button>
            <button
              type="button"
              onClick={() => {
                setEmail('driver@example.com');
                setPassword('password');
              }}
              className="text-sm bg-gray-100 hover:bg-gray-200 py-2 rounded"
            >
              Driver
            </button>
            <button
              type="button"
              onClick={() => {
                setEmail('station_admin@example.com');
                setPassword('password');
              }}
              className="text-sm bg-gray-100 hover:bg-gray-200 py-2 rounded"
            >
              Admin
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
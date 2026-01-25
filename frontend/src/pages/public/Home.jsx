import { Link } from 'react-router-dom';
import { Search, Shield, Clock, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Guide to Transportation in Bahir Dar
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Seamlessly connect with rides and drivers across the city. 
            Your journey, simplified.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/login" 
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find a Ride
            </Link>
            <Link 
              to="/register?role=driver" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Drive with Us
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Search, title: 'Search', desc: 'Enter your destination to find available rides' },
              { icon: Clock, title: 'Book', desc: 'Choose your preferred ride and confirm instantly' },
              { icon: Shield, title: 'Travel', desc: 'Meet your driver and enjoy a safe trip' },
              { icon: DollarSign, title: 'Pay', desc: 'Pay securely through the app' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600">
                Watch your ride approach on the map in real-time so you know exactly when to meet your driver.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Safe & Secure</h3>
              <p className="text-gray-600">
                All drivers are verified, and you can share your trip status with loved ones for peace of mind.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Fair Pricing</h3>
              <p className="text-gray-600">
                Get upfront, transparent pricing before you book. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
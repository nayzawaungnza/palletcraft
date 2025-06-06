import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Recycle, Package2, Shield, Clock, Award, CheckCircle, Star } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Package2,
      title: 'Custom Manufacturing',
      description: 'Tailored pallet solutions designed to meet your specific business requirements with precision engineering.'
    },
    {
      icon: Recycle,
      title: 'Sustainable Practices',
      description: 'Eco-friendly processes with comprehensive recycling programs to minimize environmental impact.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Reliable logistics network ensuring timely delivery to your location with real-time tracking.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Every pallet meets rigorous quality standards for durability, performance, and safety compliance.'
    }
  ];

  const stats = [
    { number: '20+', label: 'Years Experience', description: 'Industry expertise' },
    { number: '10K+', label: 'Pallets Delivered', description: 'Successful projects' },
    { number: '500+', label: 'Happy Clients', description: 'Trusted partnerships' },
    { number: '99%', label: 'Customer Satisfaction', description: 'Quality guarantee' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Logistics Pro Inc.',
      text: 'PalletCraft has been our go-to supplier for 5 years. Their quality and reliability are unmatched.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Industrial Solutions',
      text: 'Custom pallets delivered on time, every time. Excellent customer service and competitive pricing.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-wood-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-wood-600/20 backdrop-blur-sm border border-wood-400/30 rounded-full px-4 py-2 mb-6">
                <Award className="h-4 w-4 text-wood-300 mr-2" />
                <span className="text-wood-200 text-sm font-medium">20+ Years of Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Wood Pallets for 
                <span className="bg-gradient-to-r from-wood-400 to-wood-300 bg-clip-text text-transparent"> Modern Business</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
                Crafting quality pallets with precision, sustainability, and reliability. 
                Your trusted partner for all logistics and packaging solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-wood-600 to-wood-700 hover:from-wood-700 hover:to-wood-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-large hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl transition-all duration-300"
                >
                  View Products
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-400" />
                  <span className="text-slate-300">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-forest-400" />
                  <span className="text-slate-300">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Premium wood pallets"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-large">
                <div className="flex items-center space-x-4">
                  <div className="bg-forest-100 p-3 rounded-lg">
                    <Package2 className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">10,000+</div>
                    <div className="text-slate-600 text-sm">Pallets Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-wood-50 to-wood-100 p-6 rounded-2xl group-hover:from-wood-100 group-hover:to-wood-200 transition-all duration-300 shadow-soft hover:shadow-medium">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-wood-700 to-wood-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-800 font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-slate-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-wood-100 rounded-full px-4 py-2 mb-4">
              <span className="text-wood-700 text-sm font-semibold">Why Choose PalletCraft</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
              Excellence in Every Detail
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We combine traditional craftsmanship with modern technology to deliver 
              exceptional pallet solutions that exceed expectations and drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                  <div className="bg-gradient-to-br from-wood-100 to-wood-200 p-4 rounded-xl w-fit mb-6 group-hover:from-wood-200 group-hover:to-wood-300 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-wood-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-wood-50 p-8 rounded-2xl shadow-soft border border-slate-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-wood-600 via-wood-700 to-wood-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl mb-10 text-wood-100 leading-relaxed">
              Contact us today for a free consultation and discover how our premium wood pallets 
              can optimize your operations, reduce costs, and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-4 bg-white text-wood-700 hover:bg-wood-50 font-bold rounded-xl transition-all duration-300 shadow-large hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-10 py-4 border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-wood-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Custom Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
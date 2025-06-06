import React from 'react';
import { Package, Recycle, Truck, Wrench, Clock, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Package,
      title: 'Custom Pallet Manufacturing',
      description: 'Tailored pallet solutions designed to your exact specifications and requirements.',
      features: ['Custom dimensions', 'Various wood types', 'Specialized treatments', 'Volume discounts'],
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Recycle,
      title: 'Pallet Recycling & Refurbishment',
      description: 'Eco-friendly recycling services to extend the life of your existing pallets.',
      features: ['Damage assessment', 'Professional repairs', 'Quality restoration', 'Eco-friendly disposal'],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Truck,
      title: 'Delivery & Logistics',
      description: 'Reliable delivery services to get your pallets exactly where you need them.',
      features: ['Same-day delivery', 'Scheduled deliveries', 'Regional coverage', 'Tracking support'],
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Wrench,
      title: 'Pallet Repair Services',
      description: 'Professional repair and maintenance to maximize your pallet investment.',
      features: ['On-site repairs', 'Quality materials', 'Fast turnaround', 'Cost-effective solutions'],
      image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick delivery times without compromising on quality.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'All our services come with a comprehensive quality guarantee.'
    },
    {
      icon: Recycle,
      title: 'Sustainable Practices',
      description: 'Environmentally responsible processes and materials.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-wood-800 to-wood-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Pallet Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-wood-100">
            From custom manufacturing to recycling and repairs, we provide complete 
            pallet solutions for your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-wood-600 max-w-3xl mx-auto">
              We offer a complete range of pallet services designed to meet your specific 
              business requirements and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute top-4 left-4 bg-wood-600 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-wood-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-wood-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-wood-600 rounded-full"></div>
                        <span className="text-wood-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-800 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-wood-600 max-w-3xl mx-auto">
              We go above and beyond to ensure your complete satisfaction with every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-wood-50 rounded-xl hover:bg-wood-100 transition-colors group">
                <div className="bg-wood-600 p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-wood-700 transition-colors">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-wood-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-wood-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-800 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-wood-600 max-w-3xl mx-auto">
              A streamlined approach that ensures quality results and customer satisfaction every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your specific needs and requirements' },
              { step: '02', title: 'Planning', description: 'Custom solution design and project timeline creation' },
              { step: '03', title: 'Execution', description: 'Professional service delivery with quality assurance' },
              { step: '04', title: 'Follow-up', description: 'Ongoing support and maintenance as needed' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-forest-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-wood-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-wood-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
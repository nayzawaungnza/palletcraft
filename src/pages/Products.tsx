import React from 'react';
import { Package, Truck, Shield, Recycle } from 'lucide-react';

const Products: React.FC = () => {
  const productCategories = [
    {
      title: 'Standard Pallets',
      description: 'High-quality standard pallets for general logistics and storage needs.',
      image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['48" x 40" dimensions', 'Heat-treated lumber', 'ISPM 15 compliant', 'Multiple entry points'],
      price: 'Starting at $25'
    },
    {
      title: 'Heavy Duty Pallets',
      description: 'Reinforced pallets designed for heavy loads and demanding applications.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['3000+ lbs capacity', 'Extra reinforcement', 'Premium hardwood', 'Extended warranty'],
      price: 'Starting at $45'
    },
    {
      title: 'Custom Pallets',
      description: 'Tailored solutions designed to meet your specific requirements.',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Any dimensions', 'Various wood species', 'Special treatments', 'Unique designs'],
      price: 'Quote on request'
    },
    {
      title: 'Recycled Pallets',
      description: 'Eco-friendly refurbished pallets that deliver quality and sustainability.',
      image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Quality inspected', 'Professionally repaired', 'Cost-effective', 'Environmentally friendly'],
      price: 'Starting at $15'
    }
  ];

  const specifications = [
    {
      icon: Package,
      title: 'Standard Dimensions',
      details: ['48" x 40" (most common)', '48" x 48" (square)', '42" x 42" (drum)', 'Custom sizes available']
    },
    {
      icon: Shield,
      title: 'Load Capacity',
      details: ['Light duty: 1,500 lbs', 'Standard: 2,500 lbs', 'Heavy duty: 3,500+ lbs', 'Custom capacity options']
    },
    {
      icon: Truck,
      title: 'Entry Types',
      details: ['2-way entry', '4-way entry', 'Partial 4-way', 'Specialized access']
    },
    {
      icon: Recycle,
      title: 'Wood Treatment',
      details: ['Heat treatment (HT)', 'Kiln dried (KD)', 'Chemical treatment', 'Natural/untreated']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-wood-100 to-wood-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-wood-800 mb-6">
            Quality Wood Pallets
          </h1>
          <p className="text-xl md:text-2xl text-wood-600 max-w-3xl mx-auto">
            Discover our comprehensive range of wood pallets designed to meet every 
            logistics and storage requirement with uncompromising quality.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-800 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-wood-600 max-w-3xl mx-auto">
              From standard pallets to custom solutions, we have the perfect pallet 
              for your specific needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((product, index) => (
              <div key={index} className="bg-wood-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute bottom-4 left-4 bg-wood-600 text-white px-3 py-1 rounded-lg font-semibold">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-wood-800 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-wood-600 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-wood-800">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-wood-600 rounded-full"></div>
                          <span className="text-wood-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-800 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-wood-600 max-w-3xl mx-auto">
              Detailed specifications to help you choose the right pallet for your application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="bg-wood-100 p-3 rounded-lg w-fit mb-6">
                  <spec.icon className="h-8 w-8 text-wood-600" />
                </div>
                <h3 className="text-xl font-semibold text-wood-800 mb-4">
                  {spec.title}
                </h3>
                <ul className="space-y-2">
                  {spec.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-wood-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-wood-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-wood-800 mb-6">
                Quality Standards & Certifications
              </h2>
              <p className="text-lg text-wood-600 mb-8">
                All our pallets meet or exceed industry standards and international 
                shipping requirements, ensuring your products are protected throughout 
                their journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-600 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-wood-800 mb-2">
                      ISPM 15 Compliant
                    </h3>
                    <p className="text-wood-600">
                      International standards for phytosanitary measures in wood packaging.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-600 p-2 rounded-lg">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-wood-800 mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-wood-600">
                      Rigorous testing and inspection processes ensure consistent quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-forest-600 p-2 rounded-lg">
                    <Recycle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-wood-800 mb-2">
                      Sustainable Sourcing
                    </h3>
                    <p className="text-wood-600">
                      Responsibly sourced materials from certified sustainable forests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Quality wood pallets"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-wood-600 to-wood-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Choosing the Right Pallet?
          </h2>
          <p className="text-xl mb-8 text-wood-100 max-w-3xl mx-auto">
            Our experts are ready to help you find the perfect pallet solution for your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-wood-700 hover:bg-wood-50 font-semibold rounded-lg transition-colors"
            >
              Get Custom Quote
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-wood-700 text-white font-semibold rounded-lg transition-colors"
            >
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
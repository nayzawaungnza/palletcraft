import React from 'react';
import { Users, Target, Heart, Award, TrendingUp, Globe, CheckCircle, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Every pallet is crafted with meticulous attention to detail and exact specifications for optimal performance.'
    },
    {
      icon: Heart,
      title: 'Sustainability First',
      description: 'We prioritize eco-friendly practices and responsible sourcing in all our operations and processes.'
    },
    {
      icon: Users,
      title: 'True Partnership',
      description: 'We work closely with our clients to understand and exceed their unique business requirements.'
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'Committed to delivering the highest quality products and exceptional service experiences.'
    }
  ];

  const milestones = [
    { year: '2004', event: 'PalletCraft founded with a vision for revolutionary wood pallet solutions', highlight: true },
    { year: '2008', event: 'Achieved first major industry certification and quality standards' },
    { year: '2012', event: 'Expanded operations with state-of-the-art manufacturing facility' },
    { year: '2016', event: 'Launched comprehensive recycling program and sustainability initiative' },
    { year: '2020', event: 'Reached 10,000+ pallets delivered milestone with 99% satisfaction rate' },
    { year: '2024', event: 'Celebrating 20 years of excellence, innovation, and industry leadership', highlight: true }
  ];

  const achievements = [
    { number: '500+', label: 'Satisfied Clients', icon: Users },
    { number: '99%', label: 'Quality Rate', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Zap },
    { number: '100%', label: 'Sustainable Materials', icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-wood-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-wood-600/20 backdrop-blur-sm border border-wood-400/30 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="h-4 w-4 text-wood-300 mr-2" />
                <span className="text-wood-200 text-sm font-medium">Two Decades of Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Crafting Excellence 
                <span className="bg-gradient-to-r from-wood-400 to-wood-300 bg-clip-text text-transparent"> Since 2004</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
                For over two decades, PalletCraft has been at the forefront of wood pallet 
                manufacturing, combining traditional craftsmanship with cutting-edge technology 
                to deliver solutions that consistently exceed expectations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <achievement.icon className="h-5 w-5 text-wood-300" />
                      <div className="text-2xl font-bold text-white">{achievement.number}</div>
                    </div>
                    <div className="text-slate-300 text-sm">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Wood pallet manufacturing excellence"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-wood-100 rounded-full px-4 py-2 mb-4">
              <span className="text-wood-700 text-sm font-semibold">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
              Built on Passion, Driven by Innovation
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded in 2004 by a team of passionate woodworkers and logistics experts, PalletCraft began as a 
              family business with a revolutionary mission: to create the highest quality wood pallets 
              using sustainable practices and innovative manufacturing techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To provide innovative, sustainable, and reliable wood pallet solutions that 
                help businesses optimize their logistics operations while minimizing their 
                environmental impact and maximizing operational efficiency.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Our Vision</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                To be the most trusted and innovative partner for wood pallet solutions globally, 
                known for our unwavering commitment to quality, sustainability, and customer success.
              </p>

              <div className="space-y-4">
                {[
                  'Industry-leading quality standards',
                  'Sustainable manufacturing processes',
                  'Customer-centric approach',
                  'Continuous innovation and improvement'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-wood-50 to-wood-100 p-8 rounded-2xl shadow-soft">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-forest-600 to-forest-700 p-4 rounded-xl shadow-medium">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800">Global Impact</h4>
                  <p className="text-slate-600">Sustainable practices worldwide</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Our commitment to sustainability extends far beyond our local operations. We're 
                proud to be part of a global movement toward responsible manufacturing, circular 
                economy principles, and environmental stewardship that benefits communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-wood-100 rounded-full px-4 py-2 mb-4">
              <span className="text-wood-700 text-sm font-semibold">Core Values</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
              Principles That Guide Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do and shape our relationships with 
              customers, partners, employees, and our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 text-center">
                  <div className="bg-gradient-to-br from-wood-100 to-wood-200 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:from-wood-200 group-hover:to-wood-300 transition-all duration-300">
                    <value.icon className="h-8 w-8 text-wood-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-wood-100 rounded-full px-4 py-2 mb-4">
              <span className="text-wood-700 text-sm font-semibold">Our Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
              Milestones of Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Key achievements and pivotal moments that have shaped our company's growth, 
              innovation, and industry leadership over the past two decades.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-wood-300 via-wood-400 to-wood-500 rounded-full"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center mb-16 last:mb-0">
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-large ${
                    milestone.highlight ? 'bg-gradient-to-r from-wood-600 to-wood-700' : 'bg-wood-500'
                  }`}></div>
                  
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <div className={`p-8 rounded-2xl shadow-soft border transition-all duration-300 hover:shadow-medium ${
                      milestone.highlight 
                        ? 'bg-gradient-to-br from-wood-50 to-wood-100 border-wood-200' 
                        : 'bg-white border-slate-100'
                    }`}>
                      <div className={`text-3xl font-bold mb-3 ${
                        milestone.highlight 
                          ? 'bg-gradient-to-r from-wood-700 to-wood-600 bg-clip-text text-transparent' 
                          : 'text-wood-600'
                      }`}>
                        {milestone.year}
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-wood-600 via-wood-700 to-wood-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Our Success Story
          </h2>
          <p className="text-xl mb-10 text-wood-100 max-w-3xl mx-auto leading-relaxed">
            Become part of our growing family of satisfied customers who trust PalletCraft 
            for their most critical logistics and packaging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-white text-wood-700 hover:bg-wood-50 font-bold rounded-xl transition-all duration-300 shadow-large hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Partnership
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-10 py-4 border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
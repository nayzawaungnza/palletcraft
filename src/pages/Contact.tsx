import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Facility',
      details: ['123 Industrial Boulevard', 'Manufacturing District', 'Your City, State 12345'],
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Main: (555) 123-4567', 'Sales: (555) 123-4568', 'Emergency: (555) 123-4569'],
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@palletcraft.com', 'sales@palletcraft.com', 'support@palletcraft.com'],
      link: 'mailto:info@palletcraft.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 7:00 AM - 6:00 PM', 'Saturday: 8:00 AM - 4:00 PM', 'Sunday: Closed'],
      link: null
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
            backgroundImage: 'url("https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-wood-100">
            Ready to discuss your pallet needs? We're here to help you find the perfect 
            solution for your business requirements.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow group">
                <div className="bg-wood-100 p-3 rounded-lg w-fit mx-auto mb-6 group-hover:bg-wood-200 transition-colors">
                  <info.icon className="h-8 w-8 text-wood-600" />
                </div>
                <h3 className="text-xl font-semibold text-wood-800 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-wood-600">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.link && (
                  <a
                    href={info.link}
                    className="inline-block mt-4 text-wood-700 hover:text-wood-800 font-medium"
                  >
                    Contact Now →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-wood-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-wood-600 mb-8">
                Fill out the form below and we'll get back to you within one business day 
                with a detailed response to your inquiry.
              </p>

              {isSubmitted ? (
                <div className="bg-forest-50 border border-forest-200 rounded-lg p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-forest-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-forest-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-forest-600">
                    Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-wood-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-wood-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-wood-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-wood-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-wood-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-manufacturing">Custom Manufacturing</option>
                      <option value="standard-pallets">Standard Pallets</option>
                      <option value="recycling">Recycling & Refurbishment</option>
                      <option value="repair">Repair Services</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-wood-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                      placeholder="Tell us about your pallet needs, quantities, specifications, or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-wood-600 hover:bg-wood-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map/Additional Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-wood-800 mb-6">
                Visit Our Facility
              </h2>
              <p className="text-lg text-wood-600 mb-8">
                Come see our state-of-the-art manufacturing facility and meet our team. 
                We'd love to show you our processes and discuss your needs in person.
              </p>

              {/* Mock Map */}
              <div className="bg-wood-100 rounded-lg h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-wood-600 mx-auto mb-4" />
                  <p className="text-wood-700 font-medium">Interactive Map</p>
                  <p className="text-wood-600">123 Industrial Boulevard</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-wood-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-wood-800 mb-4">
                  Why Choose PalletCraft?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-wood-600 rounded-full mt-2"></div>
                    <span className="text-wood-600">
                      Free consultation and quote within 24 hours
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-wood-600 rounded-full mt-2"></div>
                    <span className="text-wood-600">
                      Custom solutions tailored to your specific needs
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-wood-600 rounded-full mt-2"></div>
                    <span className="text-wood-600">
                      20+ years of experience and expertise
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-wood-600 rounded-full mt-2"></div>
                    <span className="text-wood-600">
                      Sustainable practices and eco-friendly options
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-forest-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Urgent Assistance?
          </h2>
          <p className="text-xl mb-8 text-forest-100 max-w-3xl mx-auto">
            We understand that some situations require immediate attention. 
            Our emergency support line is available 24/7 for urgent pallet needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234569"
              className="inline-flex items-center px-8 py-4 bg-white text-forest-700 hover:bg-forest-50 font-semibold rounded-lg transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency: (555) 123-4569
            </a>
            <a
              href="mailto:emergency@palletcraft.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-forest-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Emergency Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
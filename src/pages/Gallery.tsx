import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Standard wood pallets in warehouse',
      category: 'Manufacturing'
    },
    {
      src: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Custom pallet production line',
      category: 'Manufacturing'
    },
    {
      src: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Loading dock with pallets',
      category: 'Logistics'
    },
    {
      src: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Wood pallet repair station',
      category: 'Services'
    },
    {
      src: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Heavy duty pallet stack',
      category: 'Products'
    },
    {
      src: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Pallet recycling facility',
      category: 'Sustainability'
    },
    {
      src: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Forklift moving pallets',
      category: 'Logistics'
    },
    {
      src: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Quality control inspection',
      category: 'Quality'
    },
    {
      src: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Custom pallet designs',
      category: 'Products'
    }
  ];

  const categories = ['All', 'Manufacturing', 'Products', 'Services', 'Logistics', 'Quality', 'Sustainability'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const maxIndex = filteredImages.length - 1;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex === 0 ? maxIndex : currentIndex - 1);
    } else {
      setSelectedImage(currentIndex === maxIndex ? 0 : currentIndex + 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-wood-100 to-wood-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-wood-800 mb-6">
            Our Work Gallery
          </h1>
          <p className="text-xl md:text-2xl text-wood-600 max-w-3xl mx-auto">
            Explore our craftsmanship, facilities, and the quality pallets we create 
            for businesses across the region.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-wood-600 text-white'
                    : 'bg-wood-100 text-wood-700 hover:bg-wood-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-wood-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 bg-wood-600 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
              <p className="text-lg font-medium">{filteredImages[selectedImage].alt}</p>
              <p className="text-sm text-gray-300">Category: {filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-wood-800 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-wood-600">
              See the scale of our operations and commitment to quality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-wood-700 mb-2">10K+</div>
              <div className="text-wood-600 font-medium">Pallets Produced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-wood-700 mb-2">500+</div>
              <div className="text-wood-600 font-medium">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-wood-700 mb-2">20+</div>
              <div className="text-wood-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-wood-700 mb-2">99%</div>
              <div className="text-wood-600 font-medium">Quality Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
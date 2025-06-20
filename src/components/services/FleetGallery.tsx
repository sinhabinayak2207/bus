import { useState } from 'react';
import Image from 'next/image';

interface FleetGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const FleetGallery = ({ images }: FleetGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full">
      {/* Main Image Display */}
      <div className="w-full rounded-xl overflow-hidden mb-4 shadow-md">
        <Image
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          width={800}
          height={450}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
          priority
          className="object-cover transition-all duration-300"
        />
      </div>
      
      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`relative h-16 md:h-20 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ${
              activeImage === index 
                ? 'ring-2 ring-blue-600 opacity-100 scale-105' 
                : 'opacity-80 hover:opacity-100'
            }`}
            onClick={() => setActiveImage(index)}
          >
            <Image
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              width={200}
              height={120}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FleetGallery;

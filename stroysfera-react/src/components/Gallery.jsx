import { useState } from 'react';

export default function Gallery() {
  const images = [
    'work1.jpg', 'work2.jpg', 'work3.jpg', 'work4.jpg',
    'work5.jpg', 'work6.jpg', 'work7.jpg', 'work8.jpg'
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-16 px-4 bg-gray-50">
      <div className="container max-w-[1200px] mx-auto text-center">
      <h2 className="text-4xl font-bold text-center mb-12">
          Наши <span className="text-blue-500">работы</span>
        </h2> 
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                className="w-full h-[350px] object-cover transform transition duration-300 group-hover:scale-110"
                src={`/assets/images/${img}`}
                alt={`Работа ${idx + 1}`}
              />

            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img 
              src={`/assets/images/${selectedImage}`} 
              alt="Увеличенное изображение"
              className="max-h-full max-w-full p-4 rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

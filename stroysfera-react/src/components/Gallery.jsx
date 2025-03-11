export default function Gallery() {
    const images = ['work1.jpg', 'work2.jpg', 'work3.jpg']
  
    return (
      <section id="gallery" className="py-16 px-4">
        <div className="container max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {images.map((img, idx) => (
              <img key={idx} className="rounded-lg shadow-md" src={`/assets/images/${img}`} alt={`Работа ${idx + 1}`} />
            ))}
          </div>
        </div>
      </section>
    )
  }
  
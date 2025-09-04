import type React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./CSS/Try.css"

// Define types for the logos array
interface Logo {
  src: string
  alt: string
}

// Array of logos with placeholder images
const logos: Logo[] = [
  { src: "/abstract-logo-1.png", alt: "شريك 1" },
  { src: "/abstract-logo-geometric.png", alt: "شريك 2" },
  { src: "/abstract-logo-design-3.png", alt: "شريك 3" },
  { src: "/abstract-logo-4.png", alt: "شريك 4" },
  { src: "/abstract-logo-5.png", alt: "شريك 5" },
  { src: "/company-logo-6.png", alt: "شريك 6" },
  { src: "/company-logo-7.png", alt: "شريك 7" },
  { src: "/company-logo-8.png", alt: "شريك 8" },
  { src: "/company-logo-9.png", alt: "شريك 9" },
  { src: "/company-logo-10.png", alt: "شريك 10" },
]

// Logo Carousel component
const LogoCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      align: "start",
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })],
  )

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">شركاؤنا</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {logos.map((logo, index) => (
              <div key={index} className="flex-[0_0_33.333%] md:flex-[0_0_20%] lg:flex-[0_0_16.666%] min-w-0 px-4">
                <div className="bg-white rounded-lg shadow-sm p-4 h-20 flex items-center justify-center">
                  <img
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel

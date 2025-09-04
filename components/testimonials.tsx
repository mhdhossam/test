import type React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import "./CSS/Testimonials.css"

// Define the structure of testimonial data
interface Testimonial {
  image: string
  alt: string
  quote: string
  name: string
}

// Testimonial data with placeholder images
const testimonials: Testimonial[] = [
  {
    image: "/testimonial-person-1.png",
    alt: "عميل 1",
    name: "أحمد محمد",
    quote:
      "شركة دليل حفظكم الله ورعاكم وعلى طاعته قواكم أسأل الله العظيم أن يجعلكم دائما في نفع الأمة، حفظكم الله جميعا يا أصحاب مشروع القلوب الطيبة",
  },
  {
    image: "/testimonial-person-2.png",
    alt: "عميل 2",
    name: "فاطمة أحمد",
    quote:
      "أنا حابة أشكر المهندسة إيمان أحمد صاحبة الشركة والمهندسة إيمان مكاوي والأستاذ محمود والدكتورة فاطمة والأستاذ مدرب العطور والأستاذة ياسمين حقيقي فريق عمل غاية في الأخلاق العالية",
  },
  {
    image: "/testimonial-person-3.png",
    alt: "عميل 3",
    name: "محمد علي",
    quote:
      "شكر خاص لمدربنا الرائع الأستاذ هادي للمعلومات المفيدة والوقت الممتع المفيد والجهد الكبير كل أسرة مؤسسة رحاب شعيب كلهم لهم جزيل الشكر وكل التقدير",
  },
]

const Testimonials: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })])

  return (
    <div className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">آراء عملائنا</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-2xl">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.alt}
                      className="w-16 h-16 rounded-full object-cover ml-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600">عميل دليل</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed text-lg italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

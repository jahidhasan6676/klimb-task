import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Parent of 8-year-old",
      role: "Soccer Enthusiast",
      quote: "KLIMB matched my son with soccer and he's never been happier! The quiz was so easy and fun for him to complete.",
      sport: "⚽ Soccer",
      image: "https://i.ibb.co/NgHRy9nz/jahid.jpg"
    },
    {
      id: 2,
      name: "Mother of 10-year-old",
      role: "Swimming Family",
      quote: "We never would have thought of swimming, but after the KLIMB match, our daughter is thriving in the pool!",
      sport: "🏊 Swimming",
      image: "https://i.ibb.co/pXPRh3q/IMG-0478.jpg"
    },
    {
      id: 3,
      name: "Father of 7-year-old",
      role: "Basketball Coach",
      quote: "The accuracy of the sport matching surprised me. My shy kid turned into a confident basketball player!",
      sport: "🏀 Basketball",
      image: "https://i.ibb.co/Z62TctDH/DAN-STEVENS-1.webp"
    },
    {
      id: 4,
      name: "Parents of 9-year-old",
      role: "Gymnastics Fans",
      quote: "From the first trial class, we knew KLIMB got it right. She's naturally flexible and loves the challenge!",
      sport: "🤸 Gymnastics",
      image: "https://i.ibb.co/yX1VGdX/IMG-0374.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Parents Are Saying
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination',
            bulletClass: 'testimonial-bullet',
            bulletActiveClass: 'testimonial-bullet-active',
            renderBullet: (index, className) => {
              return `<span class="${className} w-2 h-2 md:w-2 md:h-2 inline-block rounded-full mx-1 transition-all"></span>`;
            },
          }}>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-4 sm:p-8 rounded-xl shadow-md w-11/12 mx-auto">
                <div className="flex items-start mb-4 md:mb-6">
                  <img className="w-[50px] h-[50px] rounded-full object-cover mr-3 md:mr-4" src={testimonial.image} alt='profile'/>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm md:text-base">{testimonial.role}</p>
                    <p className="text-gray-500 mt-1 text-sm md:text-base">{testimonial.sport}</p>
                  </div>
                </div>
                <FaQuoteLeft className="text-gray-300 text-xl md:text-2xl mb-3 md:mb-4" />
                <p className="text-gray-600 text-base md:text-lg italic">
                  {testimonial.quote}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="testimonial-pagination flex justify-center mt-5"></div>
      </div>

      <style jsx global>{`
        .testimonial-bullet {
          background-color: #D1D5DB;
          opacity: 1;
        }
        .testimonial-bullet-active {
          background-color: #2563EB;
          transform: scale(1.25);
        }
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
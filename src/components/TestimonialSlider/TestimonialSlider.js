import React, { useState, useRef } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      body: "Websofttools has transformed the way we operate. Their software solutions are top-notch and have significantly improved our efficiency.",
      author: {
        name: "John Smith",
        handle: "johnsmith",
        imageUrl: "/images/toolsimgs/image1.jpeg",
      },
    },
    {
      body: "We are impressed with the exceptional service provided by Websofttools. Their team is always responsive and goes above and beyond to meet our needs.",
      author: {
        name: "Jane Doe",
        handle: "janedoe",
        imageUrl: "/images/toolsimgs/image2.jpeg",
      },
    },
    {
      body: "Websofttools software has streamlined our operations, significantly saving us time and resources. It's a game-changer for our business.",
      author: {
        name: "Robert Johnson",
        handle: "robertjohnson",
        imageUrl: "/images/toolsimgs/image3.jpeg",
      },
    },
    {
      body: "The team at Websofttools is a genuine pleasure to work with. Their expertise and unwavering dedication to our success are truly remarkable",
      author: {
        name: "Linda Wilson",
        handle: "lindawilson",
        imageUrl: "/images/toolsimgs/image5.jpeg",
      },
    },
    {
      body: "Websofttools has consistently exceeded our expectations. Their software solutions are exceptionally reliable, and their support is truly exceptional",
      author: {
        name: "Michael Brown",
        handle: "michaelbrown",
        imageUrl: "/images/toolsimgs/image4.jpeg",
      },
    },
  ];

  const cardWidth = 500;
  const totalCards = testimonials.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    carouselRef.current.style.transform = `translateX(-${
      slideIndex * cardWidth
    }px)`;
  };
  return (
    <div className="mb-20 bg-white">
      <div className="px-3 sm:container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-Secondary">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-Primary sm:text-4xl">
            What Our Clients Are Saying About Us
          </p>
        </div>
        <div className="relative mt-10 overflow-x-hidden px-3 sm:container">
          <div
            className="testimonial-carousel flex gap-8 "
            style={{
              width: `${totalCards * cardWidth}px`,
              transform: `translateX(-${currentSlide * cardWidth}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
            ref={carouselRef}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                style={{ width: `${cardWidth}px` }}
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-Body2 text-black">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      width={400}
                      height={400}
                      alt="author image"
                    />
                    <div>
                      <div className="text-Subtile2 text-Primary">
                        {testimonial.author.name}
                      </div>
                      <div className="text-[#828181]">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            {Array.from({ length: totalCards - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`testimonial-dot ${
                  index === currentSlide ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

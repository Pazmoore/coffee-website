"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { reviewsData } from "@/components/data/Reviews";
import Rating from "@mui/material/Rating";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Buttons (below the slider)
const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="text-[#ce7a7a]"
  >
    <FaChevronLeft size={24} />
  </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="text-[#ce7a7a]"
  >
    <FaChevronRight size={24} />
  </button>
);

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderRef = React.useRef<Slider | null>(null);

  return (
    <section className="bg-[#f9efef] text-black p-5">
        <div className='flex flex-col flex-wrap gap-4 justify-center items-center mt-4'>
            <h1 className="text-5xl font-bold">Testimonials</h1>
            <div className='border-b-4 border-[#ce7a7a] w-20 inline-block rounded-3xl'></div>
            <p className='text-sm w-full max-w-[700px] text-center'>At Coffee House in Berndorf, Germany, we pride ourselves on being a
                go-to destination for coffee lovers and conversation seekers alike, their thoughts and appreciations are also forever documented
            </p>
        </div>
        {/* Custom Navigation Arrows Below Slider */}
        <div className="flex justify-between items-center">
            <div className="w-fit">
                <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            </div>
            {/* Reviews Slider */}
            <div className="relative max-w-[90%] mx-auto mt-4">
                <Slider ref={sliderRef} {...settings}>
                {reviewsData.map((review) => (
                    <div key={review.id} className="px-3">
                        <div className=" p-5 max-w-[550px] mt-20 mx-auto flex flex-col justify-center items-center text-center">
                            {/* User Info */}
                            <div className="flex flex-wrap items-center gap-4 mb-10">
                                <Image 
                                    src={review.image} 
                                    width={100}
                                    height={100}
                                    alt="User Image"
                                    className="rounded-full bg-gray-400"
                                />
                            </div>

                            {/* Review Description */}
                            <p className="text-xl leading-snug">{review.description}</p>

                            {/* Rating */}
                            <div className="flex items-center justify-end gap-2 mt-4 text-[#ce7a7a]">
                                <Rating name="read-only" value={review.rating} precision={0.5} readOnly/>
                                <span>{review.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
            <div className="w-fit">
              <CustomNextArrow onClick={() => sliderRef.current?.slickNext()}/>
            </div>
        </div>
    </section>
  );
};

export default Reviews;

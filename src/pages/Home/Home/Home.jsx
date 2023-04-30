import React, { useRef } from "react";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <>
      <Swiper className="slider-div">
        <SwiperSlide>
          <div className="w-52 h-60 md:w-96 md:h-96 bg-base-100 shadow-xl border-4 border-yellow-400 rounded-lg relative">
            <div
              className="absolute inset-0 bg-cover bg-center h-full"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co/6g2Gtjw/Sreemongol.png')",
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white p-0">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div className="absolute bottom-0 p-4">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-52 h-60 md:w-96 md:h-96 bg-base-100 shadow-xl border-4 border-yellow-400 rounded-lg relative">
            <div
              className="absolute inset-0 bg-cover bg-center h-full"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co/vdwVMmw/sundorbon.png')",
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white p-0">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div className="absolute bottom-0 p-4">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-52 h-60 md:w-96 md:h-96 bg-base-100 shadow-xl border-4 border-yellow-400 rounded-lg relative">
            <div
              className="absolute inset-0 bg-cover bg-center h-full"
              style={{
                backgroundImage: "url('https://i.ibb.co/nRLSdZ9/Sajek.png')",
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white p-0">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div className="absolute bottom-0 p-4">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-buttons">
        <button
          className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Home;

import React, { useRef } from "react";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row-reverse justify-around items-center text-white ">
        {/* Slider */}

        <div className="carousel slider-div w-52 h-60 md:w-96 md:h-96 bg-base-100 shadow-xl border-4 border-yellow-400 rounded-lg relative">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/gvzz3wx/Rectangle-26.png"
              className="w-full"
            />
            <div className="absolute mx-auto flex items-center justify-center bottom-6 text-3xl font-bold ms-4">
              <h3>Cox's Bazar</h3>
            </div>
            <div className="absolute flex md:justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/8jyPQ2r/Rectangle-27.png"
              className="w-full"
            />
            <div className="absolute mx-auto flex items-center justify-center bottom-6 text-3xl font-bold ms-4">
              <h3>Cox's Bazar</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/nRLSdZ9/Sajek.png" className="w-full" />
            <div className="absolute mx-auto flex items-center justify-center bottom-6 text-3xl font-bold ms-4">
              <h3>Cox's Bazar</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/yykzR9d/Rectangle-1.png"
              className="w-full"
            />
            <div className="absolute mx-auto flex items-center justify-center bottom-6 text-3xl font-bold ms-4">
              <h3>Cox's Bazar</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        {/* <div class="absolute inset-0 bg-gradient-to-t from-black opacity-60 pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black opacity-60 pointer-events-none"></div> */}

        {/* Details */}
        <div className="text-white ">
          <p className="text-4xl font-bold">Explore All Over Bangladesh</p>
          <Link to="/destination">
            <button className="btn-outlined bg-yellow-400">Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

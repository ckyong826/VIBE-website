"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("swiper/react");
require("swiper/css");
require("swiper/css/navigation");
require(".././globals.css");
var modules_1 = require("swiper/modules");
var Tshirt_1 = require("./Tshirt");
function Slider() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_2.Swiper, { slidesPerView: 1, spaceBetween: 0, breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                1536: {
                    slidesPerView: 5,
                    spaceBetween: 50
                }
            }, loop: true, navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }, modules: [modules_1.Navigation], className: "truncate w-screen h-[45%] pt-[20px] flex flex-row items-center justify-center\r\n                            pl-[20px] pr-[20px] " },
            react_1["default"].createElement(react_2.SwiperSlide, null,
                react_1["default"].createElement(Tshirt_1["default"], null)),
            react_1["default"].createElement(react_2.SwiperSlide, null,
                react_1["default"].createElement(Tshirt_1["default"], null)),
            react_1["default"].createElement(react_2.SwiperSlide, null,
                react_1["default"].createElement(Tshirt_1["default"], null)),
            react_1["default"].createElement(react_2.SwiperSlide, null,
                react_1["default"].createElement(Tshirt_1["default"], null)),
            react_1["default"].createElement(react_2.SwiperSlide, null,
                react_1["default"].createElement(Tshirt_1["default"], null)),
            react_1["default"].createElement(react_2.SwiperSlide, null,
                react_1["default"].createElement(Tshirt_1["default"], null)),
            react_1["default"].createElement("div", { className: "swiper-button-next" }),
            react_1["default"].createElement("div", { className: "swiper-button-prev" }))));
}
exports["default"] = Slider;

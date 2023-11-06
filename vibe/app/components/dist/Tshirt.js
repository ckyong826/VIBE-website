"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var AllProduct_jpg_1 = require("../../public/AllProduct.jpg");
var font_1 = require("./font");
function Tshirt() {
    return (React.createElement("div", { className: "w-[250px] h-[375px] p-[10px] pt-[20px] block flex flex-col items-center justify-center\r\n                  " },
        React.createElement(image_1["default"], { src: AllProduct_jpg_1["default"], alt: "Chill Bro Tee", className: "aspect-square object-cover" }),
        React.createElement("div", { className: "text-[18px] uppercase pt-[5px]" }, "CHILL BRO TEE(black)"),
        React.createElement("div", { className: font_1.racing_sans_one.className },
            React.createElement("div", { className: 'flex flex-row items-center translate-y-[-5px]' },
                React.createElement("div", { className: "text-[16px] pt-1 uppercase p" }, "RM 128.00 MYR")))));
}
exports["default"] = Tshirt;

"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var vibe_streetwear_model_homepage_jpg_1 = require("../public/vibe-streetwear-model-homepage.jpg");
var AllProduct_jpg_1 = require("../public/AllProduct.jpg");
var font_1 = require("./components/font");
var TshirtSlider_1 = require("./components/TshirtSlider");
function Home() {
    return (React.createElement("div", { className: "scroll-smooth overflow-y-scroll snap-y snap-mandatory h-screen scrollbar-hide cursor-default select-none" },
        React.createElement("section", { className: "snap-center block flex flex-col h-screen pt-[100px] w-screen" },
            React.createElement("div", { className: "flex h-[60%] max-lg:h-[100%] flex-row justify-center items-end max-md:flex-col" },
                React.createElement("div", { className: "h-[100%] flex items-end inline-block justify-end pl-[5%] translate-y-[20%]\n                          max-md:h-full max-lg:hidden" },
                    React.createElement("h1", { className: "text-[220px] text-end bottom-[-100%] max-md:text-[50px] min-[1920px]:text-[300px]\n                            max-xl:text-[200px] max-lg:text-[150px]" }, "NEW")),
                React.createElement("div", { className: "w-[2%] max-md:w-[0]" }),
                React.createElement("div", { className: "w-[45%] h-[100%] grow truncate lg:rounded-[50px] flex items-end lg:pr-[5%]\n                          max-md:w-full max-lg:rounded-0 " },
                    React.createElement(image_1["default"], { src: vibe_streetwear_model_homepage_jpg_1["default"], alt: 'vibe-streetwear-model', className: "aspect-square w-[100%] h-[100%] lg:rounded-[50px] object-cover" }))),
            React.createElement("div", { className: "flex items-start inline-block justify-start pl-[5%] translate-y-[-20%]\n                        max-md:h-full max-lg:hidden " },
                React.createElement("h1", { className: "text-[240px] text-end  max-md:text-[50px] min-[1920px]:text-[300px]\n                            max-xl:text-[200px] max-lg:text-[150px]" }, "ARRIVAL"))),
        React.createElement("section", { className: "snap-center block flex flex-col h-screen w-screen cursor-default select-none " },
            React.createElement("div", { className: "flex flex-col h-[50%] pt-[110px] items-center" },
                React.createElement("div", { className: "block h-[70%] w-[40%]" },
                    React.createElement(image_1["default"], { src: AllProduct_jpg_1["default"], alt: 'All-Product-Poster', className: "aspect-video trunscate w-[100%] h-[100%] lg:rounded-[20px] object-cover" })),
                React.createElement("div", { className: "uppercase pt-[10px] text-[30px] text-center" }, "chill collection"),
                React.createElement("div", { className: font_1.bad_script.className },
                    React.createElement("div", { className: "text-[15px] text-center" }, "With us, you don't just wear your heart on your sleeve; you wear your convictions, your passions, your stories."))),
            React.createElement(TshirtSlider_1["default"], null))));
}
exports["default"] = Home;

"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var Logo_png_1 = require("../../public/Logo.png");
var react_1 = require("react");
function Navbar() {
    var Links = [
        { name: "HOME", link: "/" },
        { name: "SHOP", link: "/shop" },
        { name: "STORY", link: "/story" },
        { name: "FAQs", link: "/faqs" },
        { name: "ABOUT", link: "/about" },
    ];
    var _a = react_1.useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    var router = navigation_1.useRouter();
    return (React.createElement("div", { className: 'fixed bg-t-black select-none z-[200]' },
        React.createElement("nav", { className: "w-screen h-[100px] flex text-t-white items-center justify-between top-0" },
            React.createElement("div", { className: 'w-[130px] h-auto block translate-x-[30%] max-md:translate-x-[20%]' },
                React.createElement(image_1["default"], { src: Logo_png_1["default"], alt: "VIBE-streetwear", className: 'object-scale-down items-center cursor-pointer', onClick: function () { return router.push('/'); } })),
            React.createElement("ul", { className: "w-[600px] text-[30px] flex font-roboto-con font-medium items-center justify-center \n                       transition-all duration-200 ease-in-out max-lg:w-screen max-lg:h-screen  max-lg:pt-[100px]\n                       max-lg:block max-lg:absolute max-lg:justify-end max-lg:top-0 max-lg:z-[999]\n                       max-lg:bg-t-black\n                       " + (isMenuOpen ? 'max-lg:right-0' : 'max-lg:right-[-100%] ') + "\n                       " },
                Links.map(function (link, index) {
                    return (React.createElement(link_1["default"], { href: link.link, onClick: function () { return setIsMenuOpen(false); }, key: index, className: 'mx-5 hover:text-t-yellow text-center transition duration-700 ease-in-out \r\n                                inline-block max-lg:w-[100%] max-lg:mx-0 truncate max-lg:hover:none' }, link.name));
                }),
                React.createElement(link_1["default"], { href: "/account", onClick: function () { return setIsMenuOpen(false); }, className: 'mx-5 hover:text-t-yellow transition text-center  duration-700 ease-in-out \r\n                                        inline-block max-lg:w-[100%] lg:hidden max-lg:mx-0 ' }, "ACCOUNT")),
            React.createElement("ul", { className: 'flex w-[150px] justify-center items-center max-lg:justify-end max-lg:pr-[10px]' },
                React.createElement("button", { onClick: function () { return router.push('/account'); }, className: ' max-lg:hidden' },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUser, className: ' mx-2 w-[20px] h-[20px] hover:text-t-yellow transition duration-700 ease-in-out' })),
                React.createElement("button", { onClick: function () { return router.push('/cart'); }, className: '' },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faShoppingCart, className: 'mx-2 w-[20px] h-[20px] max-lg:w-[27px] max-lg:h-[27px] hover:text-t-yellow transition duration-700 ease-in-out' })),
                React.createElement("button", { onClick: function () { return setIsMenuOpen(!isMenuOpen); }, className: 'hidden max-lg:block z-[999]' },
                    React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: isMenuOpen ? free_solid_svg_icons_1.faClose : free_solid_svg_icons_1.faBars, className: 'mx-2 w-[30px] h-[30px] hover:text-t-yellow transition duration-700 ease-in-out' }))))));
}
exports["default"] = Navbar;

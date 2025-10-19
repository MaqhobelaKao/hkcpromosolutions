import React from "react";
function FeaturedCategories() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "page-width"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "mb-2 mt-3"
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "text-center"
    }, "OUR CATEGORIES")), /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-2"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "relative col-span-1 row-span-2 men-cat"
    }, /*#__PURE__*/ React.createElement("img", {
        src: "/men-banner.jpg",
        alt: "Shop men"
    }), /*#__PURE__*/ React.createElement("a", {
        className: "absolute underline top-[20px] left-[20px] bg-white px-2",
        href: "#"
    }, "SHOP MEN")), /*#__PURE__*/ React.createElement("div", {
        className: "relative col-span-1 row-span-1 women-cat"
    }, /*#__PURE__*/ React.createElement("img", {
        src: "/women-banner.jpg",
        alt: "Shop women"
    }), /*#__PURE__*/ React.createElement("a", {
        className: "absolute underline top-[20px] left-[20px] bg-white px-2",
        href: "#"
    }, "SHOP WOMEN")), /*#__PURE__*/ React.createElement("div", {
        className: "relative col-span-1 row-span-1 kid-cat"
    }, /*#__PURE__*/ React.createElement("img", {
        src: "/kid-banner.jpg",
        alt: "Shop kids"
    }), /*#__PURE__*/ React.createElement("a", {
        className: "absolute underline top-[20px] left-[20px] bg-white px-2",
        href: "#"
    }, "SHOP KIDS"))));
}
export default FeaturedCategories;
export const layout = {
    areaId: "content",
    sortOrder: 5
};

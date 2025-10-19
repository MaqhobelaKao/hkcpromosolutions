import PropTypes from "prop-types";
import React from "react";

export default function Menu({ menu: { items } }) {
  return (
    <div className="main-menu self-center hidden md:block">
      <ul className="nav flex space-x-8 justify-center">
        {items.map((i, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className="nav-item group" key={index}>
            <a 
              className="nav-link px-4 py-2 text-gray-800 hover:text-primary-600 
                        transition-all duration-300 ease-in-out
                        hover:bg-gray-100 rounded-lg font-medium"
              href={i.url}
            >
              {i.name}
            </a>
          </li>
        ))}
        <li className="nav-item group">
          <a 
            className="nav-link px-4 py-2 text-gray-800 hover:text-primary-600 
                      transition-all duration-300 ease-in-out
                      hover:bg-gray-100 rounded-lg font-medium" 
            href={"/page/contact"}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export const layout = {
  areaId: "header",
  sortOrder: 1,
};

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;

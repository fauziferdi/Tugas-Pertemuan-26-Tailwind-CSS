import React, { useState } from "react";

const Navbar = () => {
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);
  const [isStoriesDropdownOpen, setIsStoriesDropdownOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-col max-w-5xl ">
        <a href="#" className="mb-4">
          <img
            src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/tokopedia-logo.276ef32a.png"
            alt="Logo"
            className="w-72"
          />
        </a>

        <ul className="flex flex-grow justify-between text-black">
          <li>
            <a href="#" class="hover:text-gray-300 hover:underline font-bold">
              HOME
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-300 font-bold">
              COMPANY
            </a>
          </li>
          <li className="relative">
            <button
              onMouseEnter={() => setIsCommunityDropdownOpen(true)}
              onMouseLeave={() => setIsCommunityDropdownOpen(false)}
              class="hover:text-gray-300 font-bold flex items-center"
            >
              COMMUNITY <i class="bi bi-chevron-down ms-2"></i>
            </button>
            {isCommunityDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50"
                onMouseEnter={() => setIsCommunityDropdownOpen(true)}
                onMouseLeave={() => setIsCommunityDropdownOpen(false)}
              >
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Seller Story
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Life at Tokopedia
                </a>
              </div>
            )}
          </li>
          <li className="relative">
            <button
              onMouseEnter={() => setIsStoriesDropdownOpen(true)}
              onMouseLeave={() => setIsStoriesDropdownOpen(false)}
              class="hover:text-gray-300 font-bold flex items-center"
            >
              STORIES <i class="bi bi-chevron-down ms-2"></i>
            </button>
            {isStoriesDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50"
                onMouseEnter={() => setIsStoriesDropdownOpen(true)}
                onMouseLeave={() => setIsStoriesDropdownOpen(false)}
              >
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Behind The Scene
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Inovation
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Milesstone
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Opration
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Product
                </a>
              </div>
            )}
          </li>
          <li>
            <a href="#" class="hover:text-gray-300 font-bold">
              INSIGHT
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-300 font-bold">
              TOP LIST
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-300 font-bold">
              NEWSROOM
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-300 font-bold ">
              KALKUPEDIA
            </a>
          </li>
          <li>
            <a href="#" class="hover:text-gray-300 font-bold">
              <i class="bi bi-search"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

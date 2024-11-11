import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-slate-600 py-8 mt-9">
      <div className="container mx-auto flex justify-between items-center max-w-5xl">
        <div>
          <p>&copy; Recreate Fauzi 2024</p>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-300">
              Tentang Kami
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Pusat Penjualan
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Mobile Apps
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Mitra
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Kurir
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Tokopedia Care
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              B2B digital
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

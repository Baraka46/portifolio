import React from "react";
import crossant from "./crossant.jpg";
import { FaCog, FaRegClock, FaPrint, FaCalculator, FaSearch } from "react-icons/fa";

const App = () => {
  const products = [
    { name: "Almond Brown Sugar Croissant", price: "$12.98 / 3 pcs", image: crossant },
    { name: "Smoke Tenderloin Slice Croissant", price: "$10.01 / 2 pcs", image: crossant },
    { name: "Berry Whipped Cream Croissant", price: "$8.92 / 3 pcs", image: crossant },
    { name: "Almond Brown Sugar Croissant", price: "$12.98 / 3 pcs", image: crossant },
    { name: "Smoke Tenderloin Slice Croissant", price: "$10.01 / 2 pcs", image: crossant },
    { name: "Berry Whipped Cream Croissant", price: "$8.92 / 3 pcs", image: crossant },
    { name: "Almond Brown Sugar Croissant", price: "$12.98 / 3 pcs", image: crossant },
    { name: "Smoke Tenderloin Slice Croissant", price: "$10.01 / 2 pcs", image: crossant },
    { name: "Berry Whipped Cream Croissant", price: "$8.92 / 3 pcs", image: crossant },
    { name: "Almond Brown Sugar Croissant", price: "$12.98 / 3 pcs", image: crossant },
    { name: "Smoke Tenderloin Slice Croissant", price: "$10.01 / 2 pcs", image: crossant },
    { name: "Berry Whipped Cream Croissant", price: "$8.92 / 3 pcs", image: crossant },
  ];

  const paymentMethods = [
    { name: "Cash", icon: "💵" },
    { name: "Card", icon: "💳" },
    { name: "Points", icon: "🌟" },
    { name: "Deposit", icon: "📥" },
    { name: "Cheque", icon: "🏦" },
    { name: "Gift Card", icon: "🎁" },
    { name: "Scan", icon: "📷" },
    { name: "Pay Later", icon: "🕒" },
    { name: "External", icon: "🔌" },
    { name: "Split Bill", icon: "🔗" },
  ];

  return (
    // Wrap the whole layout in a vertical flex container.
    <div className="h-screen flex flex-col">
      {/* Top Bar */}
      <header className="flex justify-between items-center p-4 bg-white text-white shadow-md">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={crossant} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
        </div>

        {/* Center: Dashboard Button */}
        <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
            Dashboard
          </button>
        </div>

        {/* Right: Icons and Profile */}
        <div className="flex items-center space-x-4 text-black space-x-8">
         
              <FaPrint className="text-xl cursor-pointer" />
              <FaRegClock className="text-xl cursor-pointer" />
              <FaCalculator className="text-xl cursor-pointer" />
          <FaCog className="text-xl cursor-pointer" />
          <img
            src={crossant}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
      
        </div>
      </header>

      {/* Content Area */}
      <div className="flex flex-1">
        {/* 
          If you have a left sidebar, it would go here. 
          For now, we'll assume it's not in use.
        */}

        {/* Main Content */}
        <main className="flex-1 p-6  h-screen top-0 left-o overflow-y-auto  shadow-md p-6 rounded-lg  bg-gray-100 custom-scrollbar">
          <header className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Welcome, Gorry</h1>
              <p className="text-gray-500">Discover whatever you need easily</p>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search product..."
                className="border rounded-full px-4 py-2 pl-10 w-64"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </header>

          {/* Product Categories */}
          <div className="flex space-x-4 mb-6">
            <button className="px-4 py-2 bg-gray-200 rounded-full">Signature</button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-full">Croissant</button>
            <button className="px-4 py-2 bg-gray-200 rounded-full">Waffle</button>
            <button className="px-4 py-2 bg-gray-200 rounded-full">Coffee</button>
            <button className="px-4 py-2 bg-gray-200 rounded-full">Ice Cream</button>
          </div>

          {/* Product List */}
          <div className="grid grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-md text-center mb-2">{product.name}</h3>
                <p className="text-orange-500 font-bold text-center">{product.price}</p>
              </div>
            ))}
          </div>
        </main>

        {/* Order Summary */}
        <aside className="w-96 h-screen top-0 left-o overflow-y-auto  shadow-md p-6 rounded-lg  bg-gray-100 custom-scrollbar">

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Current Order</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>🥐 Smoke Tenderloin Slice</span>
                <span className="text-orange-500 font-bold">$10.01</span>
              </div>
              <div className="flex justify-between">
                <span>🥐 Sweet Chocolate Croissant</span>
                <span className="text-orange-500 font-bold">$22.02</span>
              </div>
              <div className="flex justify-between">
                <span>🥐 Sweet Granulated Sugar</span>
                <span className="text-orange-500 font-bold">$5.58</span>
              </div>
              <div className="flex justify-between">
                <span>🥐 Smoke Tenderloin Slice</span>
                <span className="text-orange-500 font-bold">$10.01</span>
              </div>
              <div className="flex justify-between">
                <span>🥐 Sweet Chocolate Croissant</span>
                <span className="text-orange-500 font-bold">$22.02</span>
              </div>
              <div className="flex justify-between">
                <span>🥐 Sweet Granulated Sugar</span>
                <span className="text-orange-500 font-bold">$5.58</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$37.61</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-500">-$5.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$2.25</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>$34.86</span>
            </div>
          </div>

          {/* Payment Selection */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Select Payment</h2>
            <div className="grid grid-cols-3 gap-3">
              {paymentMethods.map((method, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center justify-center p-3 h-20 border rounded-lg shadow-sm hover:bg-gray-200"
                >
                  <span className="text-2xl">{method.icon}</span>
                  <span className="text-gray-700 text-sm font-medium">{method.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Checkout Button */}
          <button className="mt-6 bg-orange-500 text-white px-4 py-3 rounded-md w-full">
            Continue to Payment
          </button>
        </aside>
      </div>
    </div>
  );
};

export default App;

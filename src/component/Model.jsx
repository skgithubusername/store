import React from 'react';

const Modal = ({ product, onClose }) => {
  const { title, image, description, price, rating } = product;
  const { rate, count } = rating;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-xl font-bold mb-8">{title}</h2>
        <img src={image} alt={title} className="w-full mb-4 h-48 object-cover my-2" />
        <p className=' mb-4'>{description}</p>
        <p className="text-gray-600 mb-4 ">${price}</p>
        <p className="text-gray-600 mb-4">⭐ {rate} ({count} reviews)</p>
        <button className="text-red-500 mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

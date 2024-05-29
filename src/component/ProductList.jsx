import API from "../component/axios";
import { useEffect, useState } from "react";
import Modal from "../component/Model";

const ProductList = () => {
  const [mydata, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");

  const getApiData = async () => {
    try {
      const res = await API.get("/");
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  return (
    <div>
      <form>
        <input
          className="p-2 border-2 border-gray-400 mb-4 mt-4 outline-none rounded w-full"
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {mydata
          .filter((product) => {
            return search.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((product) => {
            const { id, image, title, price, description, category, rating } = product;
            const { rate, count } = rating; // Extract rate and count from rating
            return (
              <div key={id} className="border p-4 rounded-lg shadow-lg">
                <img src={image} alt={title} className="w-full h-48 object-cover" />
                <h1 className="font-bold m-2">{title}</h1>
                <p className="text-gray-600 m-2">${price}</p>
                <h1 className="font-semibold m-2">{category}</h1>
                <p className="text-gray-600 m-2">{description}</p>
                <p className="text-gray-600 m-2">⭐ {rate} ({count} reviews)</p>
                <button
                  className="text-blue-500 mt-2"
                  onClick={() => handleProductClick(product)}
                >
                  View Details
                </button>
              </div>
            );
          })}
      </div>
      {selectedProduct && <Modal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default ProductList;

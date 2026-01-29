import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        Error loading product
      </div>
    );
  }

  if (!product) return null;

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          <FaArrowLeft />
          <span>Back to Blog</span>
        </Link>
      </div>

      <div className="max-w-3xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <img
            src={product.image}
            alt=""
            className="h-96 object-contain mb-6"
          />

          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-700 mb-6">
            {product.description}
          </p>

          <span className="text-2xl font-bold mb-6">
            ${product.price}
          </span>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPost;

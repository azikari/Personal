import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Blog = () => {
    // 'https://fakestoreapi.com/products

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data);


            } catch (error) {
                setError(error, "Something went wrong")

            }
            finally {
                setLoading(false);
            }

        }
        fetchData();

    }, [])

    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <h2 className="text-4xl font-bold text-black mb-4 text-center">
                Fake Store Products
            </h2>
            {loading && (
                <div className="flex justify-center items-center py-20" role="status">
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-neutral-tertiary animate-spin fill-brand"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            )}

            {error && <div>{error?.message}</div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {data.map(item => (
                    <Link
                        key={item.id}
                        to={`/blog/${item.id}`}
                        className="rounded-2xl bg-white p-5 shadow-md hover:shadow-xl transition-shadow flex flex-col cursor-pointer"
                    >
                        <img src={item.image} alt={item.title} className="h-64 object-contain mb-4" />
                        <h2 className="font-semibold text-lg line-clamp-2 mb-2">{item.title}</h2>
                        <p className="text-base text-gray-600 leading-relaxed line-clamp-4 mb-6">{item.description}</p>
                        <div className="mt-auto flex items-center justify-between">
                            <span className="text-xl font-bold">${item.price}</span>
                            <button className="bg-blue-600 text-white px-5 py-3 rounded-xl text-base font-semibold hover:bg-blue-700 transition-all">
                                Buy
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default Blog
import React, { useState } from 'react';
import Title from '../../../components/title/Title';
import p1 from '../../../assets/images/p1.jpg';
import p2 from '../../../assets/images/p2.jpg';
import p3 from '../../../assets/images/p3.jpg';
import p4 from '../../../assets/images/p4.jpg';
import p5 from '../../../assets/images/p5.jpg';
import p6 from '../../../assets/images/p6.jpg';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('ALL');
    const tabs = ['ALL', 'VECTOR', 'RASTER', 'UI/UX', 'PRINTING'];

    return (
        <div>
            <section className="bg-white pb-20 max-w-6xl mx-auto mt-32 mb-18">
                <div className="container mx-auto px-6 text-center">
                    <Title
                        title="Our Latest Featured Projects"
                        subTitle="Who are in extremely love with eco friendly system."
                    />
                </div>

                <div className="flex justify-center gap-6 mt-10 mb-12">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm font-medium transition
                ${activeTab === tab
                                    ? 'text-[#8490ff]'
                                    : 'text-gray-500'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">

                    {activeTab === 'ALL' && (
                        <>
                            <div className="text-center space-y-2">
                                <img src={p1} alt="" className="w-full h-80 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold text-black">2D Vinyl Design</h3>
                                <p className="text-sm text-gray-500">Vector</p>
                            </div>

                            <div className="text-center space-y-2">
                                <img src={p2} alt="" className="w-full h-80 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold text-black">2D Vinyl Design</h3>
                                <p className="text-sm text-gray-500">Vector</p>
                            </div>

                            <div className="text-center space-y-2">
                                <img src={p3} alt="" className="w-full h-80 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold text-black">Creative Poster Design</h3>
                                <p className="text-sm text-gray-500">Agency</p>
                            </div>

                            <div className="text-center space-y-2">
                                <img src={p4} alt="" className="w-full h-80 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold text-black">Embosed Logo Design</h3>
                                <p className="text-sm text-gray-500">Portal</p>
                            </div>

                            <div className="text-center space-y-2">
                                <img src={p5} alt="" className="w-full h-80 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold text-black">3D Helmet Design</h3>
                                <p className="text-sm text-gray-500">Vector</p>
                            </div>

                            <div className="text-center space-y-2">
                                <img src={p6} alt="" className="w-full h-80 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold text-black">2D Vinyl Design</h3>
                                <p className="text-sm text-gray-500">Raster</p>
                            </div>
                        </>
                    )}

                    {activeTab === 'VECTOR' && (
                        <>
                            <div className="text-center space-y-2">
                                <img src={p1} alt="" className="w-full h-80 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold text-black">2D Vinyl Design</h3>
                                <p className="text-sm text-gray-500">Vector</p>
                            </div>

                            <div className="text-center space-y-2">
                                <img src={p5} alt="" className="w-full h-80 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold text-black">3D Helmet Design</h3>
                                <p className="text-sm text-gray-500">Vector</p>
                            </div>
                        </>
                    )}

                    {activeTab === 'RASTER' && (
                        <>
                            <div className="text-center space-y-2">
                                <img src={p2} alt="" className="w-full h-80 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold text-black">2D Vinyl Design</h3>
                                <p className="text-sm text-gray-500">Raster</p>
                            </div>

                            <div className="text-center space-y-2">
                                <img src={p6} alt="" className="w-full h-80 object-cover rounded-lg" />
                                <h3 className="text-lg font-semibold text-black">2D Vinyl Design</h3>
                                <p className="text-sm text-gray-500">Raster</p>
                            </div>
                        </>
                    )}

                    {activeTab === 'UI/UX' && (
                        <div className="text-center space-y-2">
                            <img src={p3} alt="" className="w-full h-80 object-cover rounded-lg" />
                            <h3 className="text-lg font-semibold text-black">Creative Poster Design</h3>
                            <p className="text-sm text-gray-500">Agency</p>
                        </div>
                    )}

                    {activeTab === 'PRINTING' && (
                        <div className="text-center space-y-2">
                            <img src={p4} alt="" className="w-full h-80 object-cover rounded-lg" />
                            <h3 className="text-lg font-semibold text-black">Embosed Logo Design</h3>
                            <p className="text-sm text-gray-500">Portal</p>
                        </div>
                    )}

                </div>

            </section>
        </div>
    );
};

export default Tabs;
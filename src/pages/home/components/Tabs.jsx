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
                            <img src={p1} alt="" className="w-full h-80 object-cover rounded-lg" />
                            <img src={p2} alt="" className="w-full h-80 object-cover rounded-lg" />
                            <img src={p3} alt="" className="w-full h-80 object-cover rounded-lg" />
                            <img src={p4} alt="" className="w-full h-80 object-cover rounded-lg" />
                            <img src={p5} alt="" className="w-full h-80 object-cover rounded-lg" />
                            <img src={p6} alt="" className="w-full h-80 object-cover rounded-lg" />
                        </>
                    )}

                    {activeTab === 'VECTOR' && (
                        <>
                            <img src={p1} alt="" className="w-full h-80 object-cover rounded-lg" />
                            <img src={p5} alt="" className="w-full h-80 object-cover rounded-lg" />
                        </>
                    )}

                    {activeTab === 'RASTER' && (
                        <>
                            <img src={p2} alt="" className="w-full h-80 object-cover rounded-lg" />
                            <img src={p6} alt="" className="w-full h-80 object-cover rounded-lg" />
                        </>
                    )}

                    {activeTab === 'UI/UX' && (
                        <img src={p3} alt="" className="w-full h-80 object-cover rounded-lg" />
                    )}

                    {activeTab === 'PRINTING' && (
                        <img src={p4} alt="" className="w-full h-80 object-cover rounded-lg" />
                    )}

                </div>
            </section>
        </div>
    );
};

export default Tabs;
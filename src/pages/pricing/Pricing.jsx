import React from 'react'
import Banner from '../../components/banner/Banner'
import Title from '../../components/title/Title'
import Card from '../home/components/cards/Card'
import { data } from '../home/data/data'

const Pricing = () => {
    return (
        <div>
            <Banner title="Pricing Plan" subtitle={"Pricing Plan"} />
            <div className="container mx-auto px-6 text-center my-20 flex flex-col items-center mb-32">
                <Title title="Choose Your Plan" subTitle="When someone does something that they know that they shouldn’t do, did they." />
                <div className="container mx-auto flex flex-col md:flex-row md:flex-wrap md:justify-center items-center mt-10">
                    {data.map(item => (
                        <Card
                            key={item.id}
                            order={item.order}
                            title={item.title}
                            subtitle={item.subtitle}
                            features={item.features}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pricing
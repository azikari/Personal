import React from 'react'
import Banner from '../../components/banner/Banner'
import Section from '../home/components/Section'
import Services from '../home/components/Services'
import Counter from '../home/components/counter/Counter'
import Card from '../home/components/cards/Card'
import Title from '../../components/title/Title'
import { data } from '../home/data/data'

const ServicesPage = () => {
  return (
    <div>
      <Banner title="Services" subtitle={"Services"} />
      <Services />
      <Counter />

      <div className="container mx-auto px-6 text-center my-20 flex flex-col items-center mb-32">
        <Title title="Choose Your Plan" subTitle="When someone does something that they know that they shouldn’t do, did they." />
        <div className="container mx-auto flex items-center justify-center mt-10">
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

export default ServicesPage
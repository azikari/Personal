import React from 'react'
import Hero from './components/Hero'
import Section from './components/Section'
import Services from './components/Services'
import Card from './components/cards/Card'
import { Features } from 'tailwindcss'
import Title from '../../components/title/Title'

const data = [
  {
    id: 1,
    title: "Economy",
    subtitle: "For the individuals",
    price: "$199.00",
    order: "01",
    features: [
      "Secure Online Transfer",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
    ],
  },
  {
    id: 2,
    title: "Business",
    subtitle: "For the individuals",
    price: "$299.00",
    order: "02",
    features: [
      "Secure Online Transfer",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
    ],
  },
  {
    id: 3,
    title: "Premium",
    subtitle: "For the individuals",
    price: "$399.00",
    order: "03",
    features: [
      "Secure Online Transfer",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
    ],
  },
  {
    id: 4,
    title: "Exclusive",
    subtitle: "For the individuals",
    price: "$499.00",
    order: "04",
    features: [
      "Secure Online Transfer",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
    ],
  }
]
const Home = () => {
  return (
    <div>
      <Hero />
      <Section />
      <Services />

      <div className="container mx-auto px-6 text-center my-20 flex flex-col items-center">
        <Title title={"Choose Your Plan"} subTitle={"When someone does something that they know that they shouldn’t do, did they."} />
        <div className="container mx-auto flex  item-center justify-center mt-10">
          {data.map(item => (
            <Card key={item.id} order={item.order} title={item.title} subtitle={item.subtitle} features={item.features} price={item.price} />
          ))}


        </div>
      </div>



    </div>
  )
}

export default Home
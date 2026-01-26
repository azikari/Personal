import React from 'react'
import Hero from './components/Hero'
import Section from './components/Section'
import Services from './components/Services'
import Card from './components/cards/Card'
import Blog from './components/blogs/Blog'
import { Features } from 'tailwindcss'
import Title from '../../components/title/Title'
import Counter from './components/counter/Counter'
import { data } from './data/data'
import { blogData } from './data/blog'


const Home = () => {
  return (
    <div>
      <Hero />
      <Section />
      <Services />
      <Counter />

      <div className="container mx-auto px-6 text-center my-20 flex flex-col items-center mb-32">
        <Title title={"Choose Your Plan"} subTitle={"When someone does something that they know that they shouldn’t do, did they."} />
        <div className="container mx-auto flex  item-center justify-center mt-10">
          {data.map(item => (
            <Card key={item.id} order={item.order} title={item.title} subtitle={item.subtitle} features={item.features} price={item.price} />
          ))}


        </div>
      </div>

      <div className="w-full bg-gray-100 py-24">
        <div className="container mx-auto px-6 text-center flex flex-col items-center">
          <div className="mt-4">
            <Title
              title="Latest Posts From Our Blog"
              subTitle="You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business"
            />
          </div>

          <div className="flex flex-wrap justify-center mt-10 gap-8">
            {blogData.map((item) => (
              <Blog
                key={item.id}
                image={item.image}
                authorImage={item.authorImage}
                authorName={item.authorName}
                date={item.date}
                likes={item.likes}
                comments={item.comments}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
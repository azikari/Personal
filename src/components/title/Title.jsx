import React from 'react'

const Title = ({title,subTitle}) => {
  return (
    <>
         <h2 className="text-4xl font-bold text-black mb-4">
         {title || 'OUR SERVICES'}
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          {subTitle}
        </p>
    </>
  )
}

export default Title
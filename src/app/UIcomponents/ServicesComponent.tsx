import React from 'react'
import { ServiceCard } from '@/components/service-card'
function ServicesComponent() {
  return (
    <div className='flex flex-col gap-5 my-10' id='services'>
      <ServiceCard title='Mobile App development' description='' />
      <ServiceCard title='WordPress development' description='' />
      <ServiceCard title='WebApp development' description='' />

    </div>
  )
}

export default ServicesComponent
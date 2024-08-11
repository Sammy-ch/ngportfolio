import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
function TestimonialsComponent() {
  return (
    <div id="testimonials" className="h-[20rem] full-bleed rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

export default TestimonialsComponent

const testimonials = [
  {
    "quote": "Working with Alain was a game-changer for our online presence. The website they developed is not only visually stunning but also incredibly functional and user-friendly. We've seen a significant increase in engagement since the launch.",
    "name": "Jane Doe",
    "title": "Marketing Director at ABC Corp"
  },
  {
    "quote": "The attention to detail and the level of professionalism exhibited by Alain were beyond our expectations. They took our vision and brought it to life in a way that surpassed our wildest dreams. Highly recommend!",
    "name": "John Smith",
    "title": "Founder & CEO of XYZ Inc"
  },
  {
    "quote": "Alain delivered a top-notch website that has greatly enhanced our brand image. They were easy to work with, always on schedule, and provided excellent support throughout the process.",
    "name": "Emily Johnson",
    "title": "Creative Director at Creative Solutions"
  },
  {
    "quote": "From start to finish, Alain was a true professional. They understood our needs perfectly and delivered a website that was both aesthetically pleasing and highly functional. Our clients love the new look!",
    "name": "Michael Brown",
    "title": "Product Manager at Tech Innovations"
  },
  {
    "quote": "We are thrilled with the new website designed by Alain. It’s exactly what we wanted and more. The user experience is seamless, and the design is modern and attractive. Excellent work!",
    "name": "Sarah Lee",
    "title": "Operations Manager at Retail Hub"
  }
];
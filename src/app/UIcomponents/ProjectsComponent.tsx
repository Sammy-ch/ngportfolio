import React from 'react'

function ProjectsComponent() {
  return (
    <main className='full-bleed p-10' id='portfolio'>
      <section className='full-bleed flex gap-5'>
        <div className="h-96 w-full bg-[url('/portfolio/eden-port.png')] bg-contain bg-no-repeat rounded-lg"></div>
        <div className="h-96 w-full bg-[url('/portfolio/wasili-port.png')] bg-contain bg-no-repeat rounded-lg"></div>
        <div className="h-96 w-full bg-[url('/portfolio/rweru-port.png')] bg-contain bg-no-repeat rounded-lg"></div>
        <div className="h-96 w-full bg-[url('/portfolio/carhub-port.png')] bg-contain bg-no-repeat rounded-lg"></div>

      </section>

      </main>
  )
}

export default ProjectsComponent


import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
function CTAComponent() {
  return (
    <div id='CTA' className='my-10'>
          <Card isFooterBlurred className="w-full h-[400px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-black uppercase font-bold pb-5">Let's Work Together</p>
        <h4 className="text-black font-medium text-2xl">Now that you have come this far, <br/> let's work together on your next product </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
          src="./behance.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">

        </div>
        <Button radius="full" size="sm">sammystcherubin@gmail.com</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default CTAComponent
/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/MrRAGhuTzG9
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

interface ServiceCardProps { 
  title: string;
  description: string;
}

export function ServiceCard({title,description}:ServiceCardProps) {
  return (
    <Card className=" text-gray-50 rounded-lg border-none overflow-hidden">
      <CardContent className="p-6 bg-[#0C090A] sm:p-8 ">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-gray-400 mt-1">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center  gap-4">
            <Button className="w-full sm:w-auto">Get Started</Button>
            <Button className="w-full sm:w-auto" variant="secondary">
              Book a Call
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface CatImage {
    src: string;
    alt: string;
}

interface Props {
    catImages: CatImage[];
}

export function CarouselOrientationDemo({ catImages }: Props) {
    return (
        <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="w-full mt-10 outline-black md:max-w-xs bg-blue-100"
        >
            <CarouselContent className="mt-6 h-[50vh] mb-10">
                {catImages.map((image, index) => (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2 mt-1 mb-1">
                        <div>
                            <Card className="bg-blue-100">
                                <CardContent className="flex aspect-square items-center justify-center">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute w-20 h-20 -top-10 bg-blue-400" />
            <CarouselNext className="absolute -bottom-10 w-20 h-20 bg-amber-300 z-20" />
        </Carousel>
    )
}


// export function CarouselOrientationDemo() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       orientation="vertical"
//       className="w-full max-w-xs"
//     >
//       <CarouselContent className="mt-6 h-[300px] mb-6">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="m-5 pt-1 md:basis-1/2">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="m-35"/>
//       <CarouselNext className="m-35" />
//     </Carousel>
//   )
// }

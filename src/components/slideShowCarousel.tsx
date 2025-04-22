import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Pictures } from "@/components/pictures";

type slideShowCarouselProps = {
  slideShowImages: string[];
};
export function SlideShowCarousel({ slideShowImages }: slideShowCarouselProps) {
  return (
    <Carousel>
      <CarouselPrevious className="absolute left-2  z-20" />
      <CarouselContent className="h-min">
        {slideShowImages.map((image, index) => {
          const picture = Pictures[image as keyof typeof Pictures];

          return (
            <CarouselItem key={index}>
              <div className="bg-primary rounded-xl h-screen flex justify-center">
                <img src={picture} className="object-cover h-full rounded-xl" />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselNext className="absolute right-2 top-[50%] z-20" />
    </Carousel>
  );
}

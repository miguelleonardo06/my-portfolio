import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <main className="sm:grid grid-cols-2 h-full">
      <div className="flex flex-col justify-center mb-3 ">
        <h1 className="text-[24px] fancy-font font-semibold tracking-wide mb-1">
          Miguel Leonardo, at your Service
        </h1>
        <p className="text-[14px] font-thin text-muted-foreground mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium
          numquam saepe dolor eius rem magni accusamus. Eos velit magni aliquam
          vero eaque consectetur, explicabo pariatur. Pariatur labore cupiditate
          quas.
        </p>
        <Button className="w-fit px-10">See More</Button>
      </div>
      <div className="flex justify-center items-center mb-3 ">
        <img src="vite.svg" height="180px" width="180px" />
      </div>
    </main>
  );
}

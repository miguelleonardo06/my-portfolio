import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import myPicture from "@/assets/myPicture.png";
export const Route = createFileRoute("/_home/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <main className="sm:grid grid-cols-2 h-full">
      <div className="flex flex-col justify-end sm:mb-10 ">
        <h1 className="text-[24px] fancy-font font-semibold tracking-wide mb-1 ">
          <span>Miguel Leonardo,</span>{" "}
          <span className="block sm:inline-block">at your Service</span>
        </h1>
        <p className="text-[14px] font-thin text-muted-foreground mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium
          numquam saepe dolor eius rem magni accusamus. Eos velit magni aliquam
          vero eaque consectetur, explicabo pariatur. Pariatur labore cupiditate
          quas.
        </p>
        <div className="flex gap-2">
          <Button className="w-fit px-10">See More</Button>
          <Button
            variant="outline"
            className="w-fit px-10"
            onClick={() => downloadCV()}
          >
            Download CV
          </Button>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end items-start mb-3">
        <img
          src={myPicture}
          height="250px"
          width="280px"
          className="rounded-full mt-7"
        />
      </div>
    </main>
  );
}

function downloadCV() {
  const a = document.createElement("a");
  a.href = "/assets/myResume.pdf";
  a.download = "Miguel Leonardo Resume";
  document.body.appendChild(a);
  a.click();
}

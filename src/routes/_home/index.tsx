import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import myPicture from "@/assets/myPicture.png";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
export const Route = createFileRoute("/_home/")({
  component: IndexPage,
});

type SeeMoreModalProp = {
  isModalOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
function IndexPage() {
  const [isModalOpen, setModal] = useState<boolean>(false);

  return (
    <main className="sm:grid grid-cols-2 h-full">
      <div className="flex justify-center  items-start mb-8 sm:hidden">
        <img
          src={myPicture}
          height="250px"
          width="280px"
          className="rounded-full mt-7"
        />
      </div>
      <div className="homeDialogAnimate flex flex-col justify-end sm:mb-10">
        <h1 className="text-4xl  sm:text-5xl header-font font-semibold tracking-wide mb-1 ">
          <span>Miguel Leonardo,</span>{" "}
          <span className="block sm:inline-block">at your Service</span>
        </h1>
        <p className="text-[14px] font-thin text-muted-foreground my-4">
          I'm a passionate front-end developer with solid experience in React
          JS, Tailwind CSS, and Shadcn UI. I love turning ideas into clean,
          responsive interfaces and integrating APIs to deliver interactive,
          visually appealing experiences.
        </p>
        <div className="flex gap-2">
          <Button
            className="w-fit px-10"
            onClick={() => {
              setModal(!isModalOpen);
            }}
          >
            See More
          </Button>
          <Button
            variant="outline"
            className="w-fit px-10"
            onClick={() => downloadCV()}
          >
            Download CV
          </Button>
        </div>
      </div>
      <div className="homePictureAnimate hidden sm:flex justify-center sm:justify-end items-start mb-3">
        <img
          src={myPicture}
          height="250px"
          width="280px"
          className="rounded-full mt-7"
        />
      </div>
      <SeeMoreModal isModalOpen={isModalOpen} setModal={setModal} />
    </main>
  );
}
function SeeMoreModal({ isModalOpen, setModal }: SeeMoreModalProp) {
  return (
    <Dialog open={isModalOpen} onOpenChange={setModal}>
      <DialogContent>
        <DialogTitle>About my Skills.</DialogTitle>
        <DialogDescription>
          This site is built with React JS, Shadcn UI, and Tailwind CSS. Most of
          the components are dynamic and use mock data to make things easier to
          manage. and also to showcase my current skills to my employer. <br />
          <br />
          You can visit my github account to view the code structure of this
          Personal porfolio website:
          <br />
          <br />
          <a
            href="https://github.com/miguelleonardo06/my-portfolio"
            target="_blank"
            className="underline"
          >
            https://github.com/miguelleonardo06/my-portfolio
          </a>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
function downloadCV() {
  const a = document.createElement("a");
  a.href = "/assets/myResume.pdf";
  a.download = "Miguel Leonardo Resume";
  document.body.appendChild(a);
  a.click();
}

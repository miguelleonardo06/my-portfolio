import { createFileRoute } from "@tanstack/react-router";
import { Icons } from "@/components/icons";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { OverviewInfoType } from "@/types/";
import { SlideShowCarousel } from "@/components/slideShowCarousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MoreAboutMe } from "@/components/more-about-me";
export const Route = createFileRoute("/_home/personal")({
  component: PersonalPage,
});

function PersonalPage() {
  const [openModalKey, setOpenModalKey] = useState<string | null>(null);

  function overviewInfo({ title, body, icon }: OverviewInfoType) {
    const IconComponent = Icons[icon as keyof typeof Icons];
    const isModalOpen = openModalKey === title;

    return (
      <Card className="py-2">
        <CardContent>
          <CardTitle className="mb-2 fancy-font font-normal text-xl flex items-center gap-2">
            {IconComponent && <IconComponent height="18px" width="18px" />}
            {title}
          </CardTitle>
          <CardDescription className="font-thin inline">
            <p>{body.substring(1, 180) + "..."}</p>
            <Button
              className="mt-2 "
              onClick={() => {
                setOpenModalKey(title);
              }}
            >
              See More
            </Button>
          </CardDescription>
        </CardContent>

        <SeeMoreModal
          isModalOpen={isModalOpen}
          setModalOpen={() => setOpenModalKey(null)}
          title={title}
          body={body}
        />
      </Card>
    );
  }
  return (
    <main className="h-full w-full py-10">
      <div className=" grid sm:grid-cols-2">
        <SlideShowCarousel slideShowImages={["myPicture", "myPicture2"]} />
        <div className="pl-4 flex-col space-y-4">
          <div className="my-4 sm:my-0">
            {overviewInfo({
              title: "My Background",
              body: ` I a'm  intermediate level web developer, I can do CRUD operation with API, design slightly complicated website, and familiarity with a trend framework and library, such as, ReactJS, Tailwindcss, Shadcn. With a basic knowledge in Backend using vanilla PHP`,
              icon: "circleUser",
            })}
          </div>

          <div>
            {overviewInfo({
              title: "My Education",
              body: ` Primary Education
                I completed my primary education at Dr. Juan F. Pascual Memorial School, where I built the foundation of my skills in reading, writing, and discovered my early interests and talents.

                Secondary Education
                I attended San Miguel National High School for my secondary education. This was where I experienced a lot of firsts—made real friends, hung out, learned life lessons, and even faced some academic challenges. It was a time of growth, both socially and personally.

                College (2021 – Present)
                I’m currently studying at Bulacan Agricultural State College. This is where I started learning how to write code, starting with C++ and JavaScript. I also explored web development using PHP. My college journey has been like a rollercoaster—there were moments I felt like I was on top of the world, and others where I struggled to find my footing. But through it all, I’ve kept learning and growing.`,
              icon: "bookOpenText",
            })}
          </div>
          <div>
            {overviewInfo({
              title: "My On-the-Job-Training",
              body: ` I was accepted as a front-end developer at Hiraya Technology Solutions, where we built dynamic and interactive web systems for various clients. This was my first time working with a JavaScript framework, and it’s where I got hands-on experience with React JS. I learned a lot during my time there—not just about coding, but also about best practices in building systems that focus on dynamic output and user interaction. Since we worked remotely, I also became comfortable using GitHub for version control and team collaboration. It was a valuable learning experience that helped shape my development skills.`,
              icon: "cloud",
            })}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <MoreAboutMe />
      </div>
    </main>
  );
}

type SeeMoreModalProp = {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  body: string;
};
function SeeMoreModal({
  isModalOpen,
  setModalOpen,
  title,
  body,
}: SeeMoreModalProp) {
  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription className="text-sm">{body}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
